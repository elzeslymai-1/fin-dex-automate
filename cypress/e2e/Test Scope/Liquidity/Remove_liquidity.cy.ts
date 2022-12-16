import { Remove_Liquidity } from "../../Page Model/Liquidity page/Remove_liquidity_page"
const remove = new Remove_Liquidity()

let base_url = 'https://dev.fin-dex.finstable.co.th/liquidity'

describe('Remove Liquidity Flow', () => {

    context('Check Data Detail & Action on Remove Liquidity', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            cy.visit(base_url)

            remove.connect_wallet()
            //remove.click_connect_wallet()

            //add liquidity -token1 -token2 -amount -slippage
            remove.add_liquidity_pool('KUSDC', 'KUSDT', '1000', '0.5')

            cy.wait(4000)
            //setting slippage & go to remove liquidity page
            remove.go_to_remove_liquidity_page()
            cy.wait(2000)
        })

        //ACT
        it('No input Amount To Remove', () => {
            //assert
            remove.validate_no_input_amount_remove()
        })

        //ACT
        it('Select 25% Liquidity To Remove', () => {
            cy.wait(500)
            //select 25%
            remove.click_25_percen()

            //assert
            remove.validate_25_percen()
        })

        //ACT
        it('Select 50% Liquidity To Remove', () => {
            cy.wait(1000)
            //select 50%
            remove.click_50_percen()

            //assert
            remove.validate_50_percen()
        })

        //ACT
        it('Select 75% Liquidity To Remove', () => {
            //select 75%
            remove.click_75_percen()

            //assert
            remove.validate_75_percen()
        })

        //ACT
        it('Select 100% Liquidity To Remove', () => {
            //select 100%
            remove.click_100_percen()

            //assert
            remove.validate_100_percen()
        })

        //ACT
        it('Check slippage', () => {
            //assert
            remove.validate_slippage()
        })

        //ACT
        it('Check Liquidity Pool in Your Wallet => Liquidity Pool Name', () => {
            //assert
            remove.validate_liquidity_pool_name()
        })

        //ACT
        it('Check Liquidity Pool in Your Wallet => Sharepool', () => {
            //assert
            remove.validate_sharepool()
        })

        //ACT
        it('Check Liquidity Pool in Your Wallet => Token 1 Amount', () => {
            //assert
            remove.validate_liquidity_pool_token1_amount()
        })

        //ACT
        it('Check Liquidity Pool in Your Wallet => Token 2 Amount', () => {
            //assert
            remove.validate_liquidity_pool_token2_amount()
        })

        //ACT
        it('Reject Enable token', () => {
            //select 25%
            remove.click_25_percen()
            //click enable
            remove.click_enable_btn()
            cy.wait(3000)
            cy.rejectMetamaskPermissionToSpend()

            //assert
            remove.validate_notification('user rejected transaction')
        })

        //ACT
        it('Check Detail Confirm Remove Liquidity Dialog', () => {
            cy.wait(1000)
            //click enable
            remove.click_enable_btn()
            cy.wait(3000)
            //confirm on notification metamask and wait
            cy.confirmMetamaskPermissionToSpend()
            cy.wait(25000)
            //click remove button
            remove.click_remove_btn()

            //assert
            remove.validate_confirm_remove_dialog()
        })

        after(() => {
            cy.wait(300)
        })
    })

    context('Remove Liquidity Flow Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
            cy.visit(base_url)

            //remove.connect_wallet()
            remove.click_connect_wallet()
        })

        //ACT
        it('Reject Remove token', () => {
            //get balance after add liquidity > setting slippage > go to remove liquidity page
            remove.go_to_remove_liquidity_page()
            cy.wait(2000)

            //select 25%
            remove.click_remove_percen('25')
            //click enable
            remove.click_enable_btn()
            cy.wait(3000)
            //confirm on notification metamask and wait
            cy.confirmMetamaskPermissionToSpend()
            cy.wait(25000)
            //click remove button
            remove.click_remove_btn()
            //click confirm remove button
            remove.click_confirm_remove_btn()
            cy.wait(3000)
            //reject on notification metamask
            cy.rejectMetamaskPermissionToSpend()

            //assert
            remove.validate_notification('user rejected transaction')
        })

        //ACT
        it('Remove Liquidity as 25%', () => {
            //get balance after add liquidity > setting slippage > go to remove liquidity page
            remove.go_to_remove_liquidity_page()
            cy.wait(2000)

            //remove liquidity pool  -percen
            remove.remove_liquidity_pool('25')

            //assert
            remove.validate_remove_liquidity_success('25')

            //after
            //remove.call_remove_liquidity_pool()
        })

        //ACT
        it('Remove Liquidity as 50%', () => {

            //get balance after add liquidity > setting slippage > go to remove liquidity page
            remove.go_to_remove_liquidity_page()
            cy.wait(2000)

            //remove liquidity pool  -percen
            remove.remove_liquidity_pool('50')

            //assert
            remove.validate_remove_liquidity_success('50')

        })

        //ACT
        it('Remove Liquidity as 75%', () => {
            //get balance after add liquidity > setting slippage > go to remove liquidity page
            remove.go_to_remove_liquidity_page()
            cy.wait(2000)

            //remove liquidity pool  -percen
            remove.remove_liquidity_pool('75')

            //assert
            remove.validate_remove_liquidity_success('75')

        })

        //ACT
        it('Remove Liquidity as 100%', () => {
            //get balance after add liquidity > setting slippage > go to remove liquidity page
            remove.go_to_remove_liquidity_page()
            cy.wait(2000)

            //remove liquidity pool  -percen
            remove.remove_liquidity_pool('100')

            //assert
            remove.validate_remove_liquidity_success('100')
        })

        after(() => {
            cy.wait(300)
        })
    })

    after(() => {
        cy.wait(200)
        cy.disconnectMetamaskWalletFromAllDapps()
        cy.visit(base_url)
    })
})