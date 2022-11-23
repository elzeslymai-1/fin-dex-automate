let liquidity_menu_button = '.text-text-active'
let connect_wallet_button = '.space-x-3 > :nth-child(1) > .relative'
let metamask_button = '.metamask-gradient > .absolute'
let setting_button = '.grid > .flex > :nth-child(1)'
let slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let slippage_1_button = ':nth-child(3) > .font-semibold'
let slippage_textbox = ':nth-child(4) > .flex'
let tx_deadline_textbox = '.justify-between > .bg-input-primary'
let close_setting_button = '.px-4 > .items-center > .w-5' //xpath
let history_button = '.grid > .flex > :nth-child(2)'
let yourLiquidity_box = '.bg-gray-100'
let find_other_lop_button = '.mt-2 > .MuiButtonBase-root > .text-xs'
let addLiquidity_button = '.MuiButtonBase-root > svg.w-5'
//assert
let validate_setting_button = '.text-xl'
let validate_slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let validate_slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let validate_slippage_1_button = ':nth-child(3) > .font-semibold'
let validate_slippage_textbox = ':nth-child(4) > .flex'
let validate_tx_deadline_textbox = '.text-red-500'
let validate_close_setting_button = '[role="dialog"]'
let validate_find_other_lp_button = '.text-2xl'
let validate_add_liquidity_button = '.text-2xl'
//element
let element_setting_button = '.grid > .flex > :nth-child(1)'
let element_slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let element_slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let element_slippage_1_button = ':nth-child(3) > .font-semibold'
let element_slippage_textbox = ':nth-child(4) > .flex'
let element_tx_deadline_textbox = '.justify-between > .bg-input-primary'
let element_close_setting_button = '.px-4 > .items-center > .w-5' //xpath
let element_history_button = '.grid > .flex > :nth-child(2)'
let element_yourLiquidity_box = '.bg-gray-100'
let element_find_other_lop_button = '.mt-2 > .MuiButtonBase-root > .text-xs'
let element_addLiquidity_button = '.MuiButtonBase-root > svg.w-5'


export class Liquidity {
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
        });
    }

    click_connect_wallet() {
        cy.get(connect_wallet_button).click()
        cy.get(metamask_button).click()
    }

    click_liquidity_menu_btn(){
        cy.get(liquidity_menu_button).click()
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

    click_history_btn() {
        cy.get(history_button).click()
    }

    click_find_other_lp_btn() {
        cy.get(find_other_lop_button).click()
    }

    click_add_liquidity_btn() {
        cy.get(addLiquidity_button).click()
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

    validate_slippage_textbox(message: string) {
        //cy.get(validate_slippage_textbox).should('have.text', message)
        cy.get(validate_slippage_textbox).should('have.attr', 'class').and('contain', 'bg-text-base2 text-white')
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
                cy.get(tx_deadline_textbox).should('have.attr', 'value').and('equal', 'NaN')
                break
            case 'symbol':
                cy.get(tx_deadline_textbox).should('have.attr', 'value').and('equal', 'NaN')
                break
            case 'negative number':
                cy.get(tx_deadline_textbox).should('have.attr', 'value').and('equal', 'NaN')
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

    validate_click_find_other_lp_btn(message : string) {
        cy.get(validate_find_other_lp_button).should('have.text', message)
    }

    validate_click_add_liquidity_btn(message : string) {
        cy.get(validate_add_liquidity_button).should('have.text', message)
    }
}

//validate element
export class ValidateLiquidity {
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
        // cy.xpath(element_close_setting_button).then(($showpassword) => {
        //     expect($showpassword.length).to.equal(1)
        // })
        cy.get('body').then(($body) => {
            expect($body.find(element_close_setting_button).length).to.equal(1)
        })
    }

    validate_History_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_history_button).length).to.equal(1)
        })
    }

    validate_Your_liquidity_box_element_no_wallet(message: string) {
        cy.get('body').then(($body) => {
            expect($body.find(element_yourLiquidity_box).length).to.equal(1)
        })
        cy.get(element_yourLiquidity_box).should('have.text', message)
    }

    validate_Find_other_lp_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_find_other_lop_button).length).to.equal(1)
        })
    }

    validate_Add_liquidity_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_addLiquidity_button).length).to.equal(1)
        })
    }
}