import { AddLiquidity } from "./Add_liquidity_page"
const addLiquidity = new AddLiquidity()

let liquidity_menu_button = '.text-text-active'
let connect_wallet_button = '.space-x-3 > :nth-child(1) > .relative'
let metamask_button = '.metamask-gradient > .absolute'
let find_liquidity = '.mt-2 > .MuiButtonBase-root'
let addLiquidity_button = '.MuiButtonBase-root > svg.w-5'
let back_button = '.container > .flex > .w-full > .grid > div > .text-primary-cyan'
let your_liquidity_button = '#panel1d-header'
let remove_liquidity_button = '.grid-cols-1 > :nth-child(1) > .MuiButtonBase-root'
let setting_button = '.grid-cols-3 > .flex > :nth-child(1)'
let history_button = ''

let slippage_button = '.grid-cols-1 > .flex-col > .grid'
let slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let slippage_1_button = '.grid > :nth-child(3) > .font-semibold'
let slippage_textbox = ':nth-child(4) > .flex'
let tx_deadline_textbox = '.justify-between > .bg-input-primary'
let close_setting_button = '.px-4 > .items-center > .w-5' //xpath

let select_token1_button = '.bg-gray-100 > :nth-child(1)'
let select_token2_button = '.bg-gray-100 > :nth-child(2)'
let select_token_dialog_close_button = '.flex-col > .items-center > .w-5'
let select_token_dialog_bookmark_token_1_button = '.MuiPaper-root > .flex-col > .grid > div > .cursor-pointer > .w-6'
let select_token_dialog_search_textbox = '.mt-3 > .flex'
let select_token_dialog_bookmark_box = '.mt-6 > .grid'
let select_token_dialog_token_button = '.MuiPaper-root > .flex-col > .grid'

let manage_pool_btn = '.MuiButton-root > .text-xs'
let supply_button = '#approve-token-and-supply > .space-y-3 > .MuiButtonBase-root'

//assert
let validate_setting_button = '.text-xl'
let validate_slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let validate_slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let validate_slippage_1_button = '.grid > :nth-child(3) > .font-semibold'
let validate_slippage_textbox = ':nth-child(4) > .flex > .bg-transparent'
let validate_slippage_textbox_class = ':nth-child(4) > .flex'
let validate_tx_deadline_textbox = '.text-red-500'
let validate_close_setting_button = '[role="dialog"]'
let validate_select_token_dialog = '[role="dialog"]'
let validate_select_token_dialog_search_textbox = '.MuiPaper-root > .flex-col > .grid'
let validate_search_token_dialog_bookmark_token1_button = '.mt-6 > .grid > :nth-child(1) > div'
let validate_search_token_dialog_bookmark_token2_button = '.mt-6 > .grid > :nth-child(2) > div'
let validate_search_token_dialog_remove_bookmark__button = '.mt-6 > .flex'
let validate_close_select_token_dialog_button = '[role="dialog"]'
let validate_null_token1_and_token2 = '.bg-gray-100'
let validate_not_found_liquidity = '.bg-gray-100 > p'
let validate_found_liquidity = '#panel1d-header'
let validate_liquidity_name = '.line-clamp-1'
let validate_click_manage_pool = '.grid-cols-3 > .text-center'
let validate_click_manage_pool_poolname = '.line-clamp-1'


//element
let element_setting_button = '.grid-cols-3 > .flex > :nth-child(1)'
let element_slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let element_slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let element_slippage_1_button = ':nth-child(3) > .font-semibold'
let element_slippage_textbox = ':nth-child(4) > .flex'
let element_tx_deadline_textbox = '.justify-between > .bg-input-primary'
let element_close_setting_button = '.px-4 > .items-center > .w-5' //xpath
let element_history_button = '.grid > .flex > :nth-child(2)'
let element_select_token1 = ':nth-child(1) > #token-undefined > .w-full'
let element_select_token2 = ':nth-child(2) > #token-undefined > .w-full'

export class Find_Liquidity {
    //setup before test
    connect_wallet() {

        cy.setupMetamask(
            Cypress.env('secret_word'),
            {
                networkName: Cypress.env('network_name'),
                rpcUrl: Cypress.env('rpc_url'),
                chainId: Cypress.env('chain_id'),
                symbol: Cypress.env('symbole'),
                blockExplorer: Cypress.env('blockExpolorer'),
                isTestnet: true
            },
            Cypress.env('password')
        ).then(setupFinished => {
            expect(setupFinished).to.be.true;

            this.click_connect_wallet()
            cy.acceptMetamaskAccess()
            cy.wait(1000)
        });
    }

    click_connect_wallet() {
        cy.get(connect_wallet_button).click()
        cy.get(metamask_button).click()
    }

    click_liquidity_menu_btn() {
        cy.get(liquidity_menu_button).click()
    }

    click_find_liquidity_btn() {
        cy.get(find_liquidity).click()
    }

    click_add_liquidity_btn() {
        cy.get(addLiquidity_button).click()
    }

    click_your_liquidity_btn() {
        cy.get(your_liquidity_button).click()
    }

    click_back_btn() {
        cy.get(back_button).click()
    }

    click_remove_liquidity() {
        cy.get(remove_liquidity_button).click()
    }

    click_setting_btn() {
        cy.get(setting_button).click()
    }

    click_close_setting_btn() {
        cy.get(close_setting_button).click()
    }
    click_slippage_01_btn() {
        cy.get(slippage_01_button).click()
    }

    click_slippage_05_btn() {
        cy.get(slippage_05_button).click()
    }

    click_slippage_1_btn() {
        cy.get(slippage_1_button).click()
    }

    click_slippage(message: string) {
        cy.get(slippage_button).contains(message).click()
    }

    enter_slippage_textbox(message: string) {
        cy.get(slippage_textbox).type(message, { delay: 0 })
    }

    clear_slippage_textbox() {
        cy.get(slippage_textbox).clear()
    }

    enter_tx_deadline_textbox(message: string) {
        cy.get(tx_deadline_textbox).type(message, { delay: 0 })
    }

    clear_tx_deadline_textbox() {
        cy.get(tx_deadline_textbox).clear()
    }

    click_select_token1_btn() {
        cy.get(select_token1_button).click()
    }

    click_select_token2_btn() {
        cy.get(select_token2_button).click()
    }

    enter_search_token(message: string) {
        cy.get(select_token_dialog_search_textbox).type(message, { delay: 0 })
    }

    clear_search_token() {
        cy.get(select_token_dialog_search_textbox).clear()
    }

    click_bookmark_token_btn() {
        cy.get(select_token_dialog_bookmark_token_1_button).click()
    }

    click_token_from_dialog_token_list(message: string) {
        cy.get(select_token_dialog_token_button).contains(message).click()
    }

    click_token_from_dialog_bookmark(message: string) {
        cy.get(select_token_dialog_bookmark_box).contains(message).click()
    }

    click_close_select_token_dialog_btn() {
        cy.get(select_token_dialog_close_button).click()
    }

    click_manage_pool_btn() {
        cy.get(manage_pool_btn).click()
    }

    click_supply_btn() {
        cy.get(supply_button).click()
    }

    add_bookmark(message: string) {
        //clear search 
        this.clear_search_token()
        //enter search token [address]
        this.enter_search_token(message)
        //click bookmark
        cy.wait(200)
        this.click_bookmark_token_btn()
        cy.wait(200)
    }

    remove_bookmark(message: string) {
        //clear search 
        this.clear_search_token()
        //enter search token [address]
        this.enter_search_token(message)
        //click bookmark
        this.click_bookmark_token_btn()
    }

    go_to_remove_liquidity_page(slippage: string) {
        cy.wait(500)
        //click open setting dialog
        this.click_setting_btn()
        if (parseFloat(slippage) <= 1.0 && parseFloat(slippage) > 0.0) {
            //click slippage button
            this.click_slippage(slippage)
        } else {
            //clear slippage textbox
            this.clear_slippage_textbox()
            //enter slippage 
            this.enter_slippage_textbox(slippage)
            //set slippage
        }

        //close setting dialog
        this.click_close_setting_btn()

        cy.wait(2000)
        //click open detail your liquidity
        this.click_your_liquidity_btn()

        //click remove liquidity
        this.click_remove_liquidity()
    }


    //assert
    validate_click_setting_btn(message: string) {
        cy.get(validate_setting_button).should('have.text', message)
    }

    validate_click_slippage_01_btn() {
        cy.get(validate_slippage_01_button).should('have.attr', 'class').and('contain', 'bg-text-base2 text-white')
    }

    validate_click_slippage_05_btn() {
        cy.get(validate_slippage_05_button).should('have.attr', 'class').and('contain', 'bg-text-base2 text-white')
    }

    validate_click_slippage_1_btn() {
        cy.get(validate_slippage_1_button).should('have.attr', 'class').and('contain', 'bg-text-base2 text-white')
    }

    validate_slippage_textbox(message: string, value: string) {
        switch (message) {
            case 'Character':
                cy.get(validate_slippage_textbox).should('be.empty')
                break
            case 'Symbol':
                cy.get(validate_slippage_textbox).should('be.empty')
                break
            case 'Negative':
                cy.get(validate_slippage_textbox).should('be.empty')
                break
            case '4 Decimal':
                cy.get(validate_slippage_textbox)
                    .should('have.attr', 'value')
                    .and('contain', value)

                cy.get(validate_slippage_textbox_class)
                    .should('have.attr', 'class')
                    .and('contain', 'bg-text-base2 text-white')
                break
            case 'Maximum':
                cy.get(validate_slippage_textbox)
                    .should('have.attr', 'value')
                    .and('contain', value)
                cy.get(validate_slippage_textbox_class)
                    .should('have.attr', 'class')
                break
        }
    }


    validate_tx_deadline_default(message: string) {
        cy.get(tx_deadline_textbox).should('have.attr', 'value').and('equal', message)
    }

    validate_tx_deadline_textbox(message: string) {
        switch (message) {
            case 'Less than 20':
                cy.get(validate_tx_deadline_textbox).should('have.text', 'The minimum tx deadline is 20 mins')
                break
            case 'character':
                cy.get(tx_deadline_textbox).should('have.attr', 'value').and('equal', '0')
                break
            case 'symbol':
                cy.get(tx_deadline_textbox).should('have.attr', 'value').and('equal', '0')
                break
            case 'negative number':
                cy.get(tx_deadline_textbox).should('have.attr', 'value').and('equal', '20')
                break
            case '4 decimal places':
                cy.get(tx_deadline_textbox).should('have.attr', 'value').and('equal', '20')
                break
        }
    }

    validate_click_close_setting_btn() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_close_setting_button).length).to.equal(0)
        })
    }

    validate_click_select_token_btn() {
        cy.get(validate_select_token_dialog).then(($dialog) => {
            expect($dialog.length).to.equal(1)
        })
    }

    validate_search_token_textbox(message: string) {
        switch (message) {
            case 'null':
                cy.get(validate_select_token_dialog_search_textbox).then(($token) => {
                    expect($token.find('> div').length).to.equal(3)
                })
                break
            case 'valid':
                cy.get(validate_select_token_dialog_search_textbox).then(($token) => {
                    expect($token.find('> div').length).to.equal(1)
                })
                break
            case 'invalid':
                cy.get(validate_select_token_dialog_search_textbox).then(($token) => {
                    expect($token.find('> div').length).to.equal(0)
                })
                break
        }
    }

    validate_click_bookmark_token_btn(token1: string, token2: string) {
        cy.get(validate_search_token_dialog_bookmark_token1_button).should('have.text', token1)
        cy.get(validate_search_token_dialog_bookmark_token2_button).should('have.text', token2)
    }

    validate_click_remove_bookmark_token_btn(message: string) {
        cy.get(validate_search_token_dialog_remove_bookmark__button).should('have.text', message)
    }

    validate_click_close_select_token_dialog_btn() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_close_select_token_dialog_button).length).to.equal(0)
        })
    }

    validate_select_token_1_from_dialog_token_list(message: string) {
        cy.get('.bg-gray-100 > .flex ').then(($token) => {
            expect($token.eq(0).find('> #token-' + message).length).to.equal(1)
        })
    }

    validate_select_token_1_from_dialog_bookmark(message: string) {
        cy.get('.bg-gray-100 > .flex ').then(($token) => {
            expect($token.eq(0).find('> #token-' + message).length).to.equal(1)
        })
    }

    validate_select_token_2_from_dialog_token_list(message: string) {
        cy.get('.bg-gray-100 > .flex ').then(($token) => {
            expect($token.eq(1).find('> #token-' + message).length).to.equal(1)
        })
    }

    validate_select_token_2_from_dialog_bookmark(message: string) {
        cy.get('.bg-gray-100 > .flex ').then(($token) => {
            expect($token.eq(1).find('> #token-' + message).length).to.equal(1)
        })
    }

    validate_null_token1_and_token2() {
        cy.get(validate_null_token1_and_token2).should('contain', 'Select a token to find your liquidity.')
    }

    validate_not_found_liquidity() {
        cy.get(validate_not_found_liquidity).should('have.text', 'No liquidity found..')
    }

    validate_found_liquidity(token1: string, token2: string) {
        cy.get(validate_found_liquidity).then((data) => {
            expect(data.length).to.equal(1)
        })

        cy.get(validate_liquidity_name).should('have.text', token1 + '/' + token2)
    }

    validate_click_manage_pool_btn(token1: string, token2: string) {
        cy.get(validate_click_manage_pool).should('have.text', 'Your liquidity')
        cy.get(validate_click_manage_pool_poolname).should('have.text', token1 + '/' + token2)
    }

    add_liquidity_pool(token1: string, token2: string, amount: string, slippage: string) {
        this.click_add_liquidity_btn()
        cy.wait(700)
        addLiquidity.add_liquidity_pool_success(token1, token2, amount, slippage)

        this.click_supply_btn()
        cy.wait(300)

        //click confirm
        addLiquidity.click_confirm_on_confirm_liquidity_dialog()

        cy.wait(3000)
        cy.confirmMetamaskTransaction()
        //assert
        cy.wait(25000)

        //close add liquidity success dialog
        addLiquidity.click_close_add_liquidity_success_dialog()
    }
}

export class ValidateFind_Liquidity_Element {
    validate_Setting_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_setting_button).length).to.equal(1)
        })
    }

    validate_Slippage_01_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_slippage_01_button).length).to.equal(1)
        })
    }

    validate_Slippage_05_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_slippage_05_button).length).to.equal(1)
        })
    }

    validate_Slippage_1_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_slippage_1_button).length).to.equal(1)
        })
    }

    validate_Slippage_textbox_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_slippage_textbox).length).to.equal(1)
        })
    }

    validate_Txdeadline_textbox_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_tx_deadline_textbox).length).to.equal(1)
        })
    }

    validate_Close_setting_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_close_setting_button).length).to.equal(1)
        })
    }

    validate_History_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_history_button).length).to.equal(1)
        })
    }

    validate_Select_token1_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token1).length).to.equal(1)
        })
    }

    validate_Select_token2_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token2).length).to.equal(1)
        })
    }
}