import { Header } from "../../Page Model/Header page/Header_page"
import { AddLiquidity } from "../../Page Model/Liquidity page/Add_liquidity_page"

const header = new Header()
const liquidity = new AddLiquidity()

let base_url = 'https://dev.fin-dex.finstable.co.th/swap'

describe('Login Page', () => {
    context('Check Element Header', () => {
        //Arrange
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            cy.visit(base_url)

            header.connect_wallet()
        })

        //ACT check header text findex
        it('check header text findex', () => {
            header.validate_header_text_findex()
        })

        //ACT check header text swap
        it('check header text swap', () => {
            header.validate_header_text_swap('Swap')
        })

        //ACT check header text liquidity
        it('check header text liquidity', () => {
            header.validate_header_text_liquidity('Liquidity')
        })

        //ACT check account button
        it(`Check Account button`, () => {
            header.clickaccount_button()
            //Asset
            header.validateaccount_filter_element('metamask', 'History', 'Setting', 'Disconnect')
            header.clickaccount_close() //close
        })

        //ACT check network button
        it(`check network button`, () => {
            header.clicknetwork_button()
            //Asset
            header.validatenetwork_filter_element('Select network', 'Bitkub Chain - Testnet', 'bkc', 'true')
            header.clicknetwork_close() // close 
        })

        //ACT check language button
        it('check language button', () => {
            header.clicklanguage_button()
            //Assert
            header.validatelanguage_filter_element('language', 'English', 'ไทย')
        })

        //ACT check mode window
        it('check mode window', () => {
            //Assert
            header.validatemode_window()
        })
        afterEach(()=>{
            cy.wait(100)
        })
    })

    context('Action Element Header', () => {
        //Arrange
        beforeEach(()=>{
            cy.viewport(1920,1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            cy.visit(base_url)

            //header.connect_wallet()
            header.click_connect_wallet()
        })

        //ACT thai language
        it('Thai language At Swap Page', () => {
            header.clicklanguage_action_thai()
            //Assert
            header.validateaction_language('แลกเปลี่ยน', 'แลกเปลี่ยน', 'แลกเปลี่ยน')
        })

        it('Thai language At Liquidity Page',()=>{
            //click thai language
            header.clicklanguage_action_thai()
            cy.wait(500)
            //click liquidity header menu
            header.clickheader_text_liquidity()
            cy.wait(500)

            //assert
            header.validate_thai_language_at_liquiditypage()

        })

        it('Thai language At Add Liquidity Page',()=>{
            //click add liquidity button
            header.click_add_liquidity_btn()
            cy.wait(500)

            //assert
            header.validate_thai_language_at_add_liquiditypage()
        })

        it('Thai language At Confirm Add liquidity Dialog',()=>{
            cy.visit(base_url)
            //connect wallet
            header.click_connect_wallet()

            //click thai language
            header.clicklanguage_action_thai()
            cy.wait(500)
            //click liquidity header menu
            header.clickheader_text_liquidity()

            //click add liquidity button
            header.click_add_liquidity_btn()

            //enter liquidity detail
            liquidity.enter_liquidity_detail('KUSDC', 'KUSDT', '1000')
            cy.wait(500)

            //click supply button
            liquidity.click_supply_btn()
            cy.wait(500)

            //assert
            header.validate_thai_language_at_conirm_liquiditypage_dialog()
        })

        it('Thai language At Wait Confirm Transection and Success Dialog',()=>{
            cy.visit(base_url)
            //connect wallet
            header.click_connect_wallet()

            //click thai language
            header.clicklanguage_action_thai()
            cy.wait(500)
            //click liquidity header menu
            header.clickheader_text_liquidity()

            //click add liquidity button
            header.click_add_liquidity_btn()

            //enter liquidity detail
            liquidity.enter_liquidity_detail('KUSDC', 'KUSDT', '1000')
            cy.wait(500)

            //click supply button
            liquidity.click_supply_btn()
            cy.wait(500)

            //click confirm add liqudity
            liquidity.click_confirm_on_confirm_liquidity_dialog()
            cy.wait(3000)
            //confirm transection on metamask
            cy.confirmMetamaskTransaction()
            cy.wait(2000)

            //assert1
            header.validate_thai_language_at_wait_confirm_dialog()
            cy.wait(23000)

            //assert2
            header.validate_thai_language_at_success_dialog()

            //after
            //click close success dialog
            cy.wait(500)
            liquidity.click_close_add_liquidity_success_dialog()
        })

        it('Thai language At Find Liquidity Page',()=>{
            cy.wait(4000)
            //click find liquidity button
            header.click_find_liquidity_btn()
            cy.wait(500)

            //assert
            header.validate_thai_language_at_find_liquidity()
        })

        //ACT english language
        it('English language', () => {
            cy.visit(base_url)

            header.click_connect_wallet()

            header.clicklanguage_action_eng()
            //Assert
            header.validateaction_language('Swap', 'Swap', 'Swap')
        })

        //ACT bright mode
        it('bright mode', () => {
            header.clickmode_window_button()
            //Assert
            header.validatemode_window()
        })

        //ACT header text swap
        it('header text swap', () => {
            header.clickheader_text_swap()
            //Asset
            cy.url().should('eq', 'https://dev.fin-dex.finstable.co.th/swap')
        })

        //ACT header text swap
        it('header text liquidity', () => {
            header.clickheader_text_liquidity()
            //Asset
            cy.url().should('eq', 'https://dev.fin-dex.finstable.co.th/liquidity')
        })

        //ACT header text findex
        it('header text findex', () => {
            header.clickheader_text_findex()
            //Asset
            cy.url().should('eq', 'https://dev.fin-dex.finstable.co.th/')
        })
    })

    afterEach(()=>{
        cy.wait(100)
    })

    after('Disconnect metamask', () => {
        cy.disconnectMetamaskWalletFromAllDapps()
        cy.visit(base_url)
    })
})








