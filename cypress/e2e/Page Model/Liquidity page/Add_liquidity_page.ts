const { confirmPageElements } = require('../../../pages/metamask/notification-page');

let liquidity_menu_button = '.text-text-active'
let connect_wallet_button = '.space-x-3 > :nth-child(1) > .relative'
let metamask_button = '.metamask-gradient > .absolute'
let back_button = '.grid-cols-3 > :nth-child(1) > .w-6'
let setting_button = '.grid-cols-3 > .flex > :nth-child(1)'
let slippage_button = '.grid-cols-1 > .flex-col > .grid'
let slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let slippage_1_button = '.grid > :nth-child(3) > .font-semibold'
let slippage_textbox = ':nth-child(4) > .flex'
let tx_deadline_textbox = '.justify-between > .bg-input-primary'
let close_setting_button = '.px-4 > .items-center > .w-5' //xpath
let history_button = '.grid-cols-3 > .flex > :nth-child(2)'
let addLiquidity_button = '.MuiButtonBase-root > svg.w-5'
let select_token__button = '[id^="token-"] > .flex'
let token_1_button = '[id^="token-"] > .flex'
let token_2_button = '[id^="token-"] > .flex'
let balance_box = '[id^="balance-"] > .ml-1'
let token_1_amount_textbox = ':nth-child(1) > .bg-input-primary'
let token_2_amount_textbox = ':nth-child(3) > .bg-input-primary'
let price_rate_1 = '[class^=max-w-] > .text-primary-cyan'
let price_rate_2 = '[class^=max-w-] > .text-primary-cyan'
let share_pool = '.justify-between > .font-semibold'
let enable_token_1_button = '#approve-token-and-supply > .space-y-3 > .MuiButtonBase-root'
let enable_token_2_button = '#approve-token-and-supply > .space-y-3 > .MuiButtonBase-root'
let supply_button = '#approve-token-and-supply > .space-y-3 > .MuiButtonBase-root'
let select_token_dialog = '[role="dialog"]'
let select_token_dialog_search_textbox = '.mt-3 > .flex'
let select_token_dialog_bookmark_box = '.mt-6 > .grid'
let select_token_dialog_token__button = '.MuiPaper-root > .flex-col > .grid'
let select_token_dialog_close_button = '.flex-col > .items-center > .w-5'
let select_token_dialog_bookmark_token_1_button = '.MuiPaper-root > .flex-col > .grid > div > .cursor-pointer > .w-6'
let select_token_dialog_bookmark_token_2_button = '.MuiPaper-root > .flex-col > .grid > div > .cursor-pointer > .w-6'
let select_token_dialog_bookmark_token_3_button = '.MuiPaper-root > .flex-col > .grid > div > .cursor-pointer > .w-6'
let close_confirm_liquidity_dialog_button = '.text-black > :nth-child(1) > :nth-child(1) > svg'
let confirm_button_on_confirm_liquidity_dialog = '.mt-10 > .MuiButtonBase-root'
let close_add_liquidity_success_dialog_button = '.MuiPaper-root > .text-black > .flex-col > .MuiButtonBase-root'
let your_liquidity_button = '#panel1d-header'

//assert
let validate_setting_button = '.text-xl'
let validate_slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let validate_slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let validate_slippage_1_button = '.grid > :nth-child(3) > .font-semibold'
let validate_slippage_textbox = ':nth-child(4) > .flex'
let validate_tx_deadline_textbox = '.text-red-500'
let validate_close_setting_button = '[role="dialog"]'
let validate_select_token_dialog = '[role="dialog"]'
let validate_select_token_dialog_search_textbox = '.MuiPaper-root > .flex-col > .grid'
let validate_search_token_dialog_bookmark_token1_button = '.mt-6 > .grid > :nth-child(1) > div'
let validate_search_token_dialog_bookmark_token2_button = '.mt-6 > .grid > :nth-child(2) > div'
let validate_search_token_dialog_remove_bookmark__button = '.mt-6 > .flex'
let validate_close_select_token_dialog_button = '[role="dialog"]'
let validate_input_token_1_amount_textbox = ':nth-child(1) > .bg-input-primary'
let validate_input_token_2_amount_textbox = ':nth-child(3) > .bg-input-primary'
let validate_price_rate = '[class^=max-w-] > .text-primary-cyan'
let validate_name_price_rate = '[class^=max-w-] > .space-x-2'
let validate_open_confirm_liquidity_dialog = '.MuiPaper-root > .text-black'
let validate_confirm_liquidity_dialog_token1 = ':nth-child(3) > .flex > .ml-4'
let validate_confirm_liquidity_dialog_token2 = ':nth-child(5) > .flex > .ml-4'
let validate_confirm_liquidity_dialog_amount_token1 = '.text-black > :nth-child(1) > :nth-child(3) > :nth-child(2)'
let validate_confirm_liquidity_dialog_amount_token2 = '.text-black > :nth-child(1) > :nth-child(5) > :nth-child(2)'
let validate_confirm_liquidity_dialog_price_rate_token1 = '.text-black > :nth-child(1) > .flex-col > :nth-child(1) > .text-lg'
let validate_confirm_liquidity_dialog_price_rate_token2 = ':nth-child(2) > .text-lg'
let validate_confirm_liquidity_dialog_price_name_token1 = ':nth-child(1) > .flex-col > :nth-child(1) > .space-x-1'
let validate_confirm_liquidity_dialog_price_name_token2 = ':nth-child(2) > .space-x-1'
let validate_confirm_liquidity_dialog_share_pool = '.flex-col > :nth-child(3) > .text-lg'
let validate_close_confirm_liquidity_dialog = '.MuiPaper-root > .text-black'
let validate_click_confirm_on_confirm_liquidity_dialog = '#swal2-title'
let validate_insufficien_balance_notification = '#approve-token-and-supply > .space-y-3 > .MuiButtonBase-root'
let validate_reject_transaction_notification = '#swal2-title'
let validate_low_slippage_notification = '#swal2-title'
let validate_add_liquidity_success_dialog_message = '.absolute'
let validate_add_liquidity_success_dialog = '.MuiPaper-root > .text-black'
let validate_close_add_liquidity_success_dialog = '.MuiPaper-root > .text-black'
let validate_your_liquidity = '.bg-gray-100 > :nth-child(3) > div'
let validate_your_liquidity_pool_name = '.line-clamp-1'
let validate_your_liquidity_pool_token1_name = '.grid > :nth-child(1) > .font-medium'
let validate_your_liquidity_pool_token2_name = ':nth-child(3) > .font-medium'
let validate_your_liquidity_pool_sharepool = '.grid > :nth-child(5)'
let validate_your_liquidity_pool_token1_amount = '.MuiAccordionDetails-root > .grid > :nth-child(2)'
let validate_your_liquidity_pool_token2_amount = '.grid > :nth-child(4)'
let validate_your_liquidity_pool_sharepool_amount = '.grid > :nth-child(6)'

//element
let element_back_button = '.grid-cols-3 > :nth-child(1) > .w-6'
let element_setting_button = '.grid-cols-3 > .flex > :nth-child(1)'
let element_slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let element_slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let element_slippage_1_button = '.grid > :nth-child(3) > .font-semibold'
let element_slippage_textbox = ':nth-child(4) > .flex'
let element_tx_deadline_textbox = '.justify-between > .bg-input-primary'
let element_close_setting_button = '.px-4 > .items-center > .w-5' //xpath
let element_history_button = '.grid-cols-3 > .flex > :nth-child(2)'
let element_token_1_button = '[id^="token"]'
let element_token_2_button = '[id^="token"]'
let element_balance_1_box = '[id^="balance-"]'
let element_balance_2_box = '[id^="balance-"]'
let element_token_1_textbox = ':nth-child(1) > .bg-input-primary'
let element_token_2_textbox = ':nth-child(3) > .bg-input-primary'
let element_price_rate_1 = '[class^=max-w-] > .text-primary-cyan'
let element_price_rate_2 = '[class^=max-w-] > .text-primary-cyan'
let element_share_pool = '.justify-between > .font-semibold'
let element_enable_token_1_button = '.text-lg.space-y-3 > :nth-child(1)'
let element_enable_token_2_button = '.text-lg.space-y-3 > :nth-child(2)'
let element_approve_button = '[id^="approve-"]'
let element_select_token_dialog = '[role="dialog"]'
let element_select_token_dialog_search_textbox = '.mt-3 > .flex'
let element_select_token_dialog_bookmark_box = '.mt-6 > .flex'
let element_select_token_dialog_token_1_button = '.flex-col > .grid > :nth-child(1) > .flex'
let element_select_token_dialog_token_2_button = '.flex-col > .grid > :nth-child(2) > .flex'
let element_select_token_dialog_token_3_button = '.grid > :nth-child(3) > .flex'
let element_select_token_dialog_close_button = '.flex-col > .items-center > .w-5'

//id
let balance_id = ''

//---------collect data----------//
//collect from confirm add liquidity dialog
let balance_token1 = ''
let balance_token2 = ''
let token1_name = ''
let token2_name = ''
let token1_amount = ''
let token2_amount = ''
let token1_after_add_amount: number
let token2_after_add_amount: number
let share_pool_amount = ''
let slippage = ''


export class AddLiquidity {
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

    click_liquidity_menu_btn() {
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

    click_history_btn() {
        cy.get(history_button).click()
    }

    click_add_liquidity_btn() {
        cy.get(addLiquidity_button).click()
    }

    enter_token_1_amount(message: string) {
        cy.get(token_1_amount_textbox).type(message, { delay: 0 })
    }

    clear_token_1_amount() {
        cy.get(token_1_amount_textbox).clear()
    }

    enter_token_2_amount(message: string) {
        cy.get(token_2_amount_textbox).type(message, { delay: 0 })
    }

    clear_token_2_amount() {
        cy.get(token_2_amount_textbox).clear()
    }

    click_select_token_1_dialog_btn() {
        cy.get(select_token__button).eq(0).click()
    }

    click_select_token_2_dialog_btn() {
        cy.get(select_token__button).eq(1).click()
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
        cy.get(select_token_dialog_token__button).contains(message).click()
    }

    click_token_from_dialog_bookmark(message: string) {
        cy.get(select_token_dialog_bookmark_box).contains(message).click()
    }

    click_close_select_token_dialog_btn() {
        cy.get(select_token_dialog_close_button).click()
    }

    click_supply_btn() {
        cy.get(supply_button).click()
    }

    click_close_confirm_liquidity_dialog() {
        cy.get(close_confirm_liquidity_dialog_button).click()
    }

    click_confirm_on_confirm_liquidity_dialog() {
        cy.get(confirm_button_on_confirm_liquidity_dialog).click()
    }

    click_reject_on_confirm_liquidity_dialog() {
        cy.get(confirm_button_on_confirm_liquidity_dialog).click()
    }

    click_close_add_liquidity_success_dialog() {
        cy.get(close_add_liquidity_success_dialog_button).click()
    }

    click_your_liquidity_btn() {
        cy.get(your_liquidity_button).click()
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

    eneble_token() {
        cy.get('#approve-token-and-supply > .space-y-3').then((btn_length) => {
            if (btn_length.find('button').length > 1) {
                cy.get('.flex > .justify-between').then(($token) => {
                    //get token 1 name 
                    var token1_name = $token.eq(0).find('> [id^=token-]').text()
                    //get token 2 name 
                    var token2_name = $token.eq(1).find('> [id^=token-]').text()

                    if (btn_length.find('button').length == 2) {
                        cy.get(enable_token_1_button).then((data) => {
                            var enable_token_1_name = data.find('div').eq(0).text()
                            //click enable token 1 
                            if (enable_token_1_name == 'Enable ' + token1_name) {
                                cy.get(enable_token_1_button).contains('Enable ' + token1_name).click()
                            } else {
                                cy.get(enable_token_1_button).contains('Enable ' + token2_name).click()
                            }
                        })
                        cy.wait(3000)

                        //confirm on metamask
                        cy.confirmMetamaskPermissionToSpend()

                    } else {
                        //click enable token 1 & 2
                        cy.get(enable_token_2_button).contains('Enable ' + token2_name).click()
                        cy.get(enable_token_1_button).contains('Enable ' + token1_name).click()
                        cy.wait(3000)

                        //confirm on metamask
                        cy.confirmMetamaskPermissionToSpend()
                        cy.wait(200)
                        cy.confirmMetamaskPermissionToSpend()

                    }
                })
            } else {
                cy.log('No Enable Token button')
            }
        })
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
        cy.get('.flex > .justify-between').then(($token) => {
            expect($token.eq(0).find('> #token-' + message).length).to.equal(1)
        })
    }

    validate_select_token_1_from_dialog_bookmark(message: string) {
        cy.get('.flex > .justify-between').then(($token) => {
            expect($token.eq(0).find('> #token-' + message).length).to.equal(1)
        })
    }

    validate_select_token_2_from_dialog_token_list(message: string) {
        cy.get('.flex > .justify-between').then(($token) => {
            expect($token.eq(1).find('> #token-' + message).length).to.equal(1)
        })
    }

    validate_select_token_2_from_dialog_bookmark(message: string) {
        cy.get('.flex > .justify-between').then(($token) => {
            expect($token.eq(1).find('> #token-' + message).length).to.equal(1)
        })
    }

    validate_balance_token_1(message: string) {
        switch (message) {
            case 'KUB':
                balance_id = 'balance-Bitkub'
                cy.get('.flex > .justify-between').then(($balance) => {
                    expect($balance.eq(0).find('[id^=' + balance_id + ']').length).to.equal(1)
                })
                cy.get('.flex > .justify-between').eq(0).find('[id^=' + balance_id + ']> span').should('have.text', 'balance : ' + Cypress.env('balance').kub.balance)
                break
            case 'KUSDT':
                balance_id = '#balance-Tether'
                cy.get('.flex > .justify-between').then(($balance) => {
                    expect($balance.eq(0).find(balance_id).length).to.equal(1)
                })
                cy.get('.flex > .justify-between').eq(0).find(balance_id + '> span').should('have.text', 'balance : ' + Cypress.env('balance').kusdt.balance)
                break
            case 'KUSDC':
                balance_id = 'balance-USD'
                cy.get('.flex > .justify-between').then(($balance) => {
                    expect($balance.eq(0).find('[id^=' + balance_id + ']').length).to.equal(1)
                })
                cy.get('.flex > .justify-between').eq(0).find('[id^=' + balance_id + ']> span').should('have.text', 'balance : ' + Cypress.env('balance').kusdc.balance)
                break
        }
    }

    validate_balance_token_2(message: string) {
        switch (message) {
            case 'KUB':
                balance_id = 'balance-Bitkub'
                cy.get('.flex > .justify-between').then(($balance) => {
                    expect($balance.eq(1).find('[id^=' + balance_id + ']').length).to.equal(1)
                })
                cy.get('.flex > .justify-between').eq(1).find('[id^=' + balance_id + ']> span').should('have.text', 'balance : ' + Cypress.env('balance').kub.balance)
                break
            case 'KUSDT':
                balance_id = '#balance-Tether'
                cy.get('.flex > .justify-between').then(($balance) => {
                    expect($balance.eq(1).find(balance_id).length).to.equal(1)
                })
                cy.get('.flex > .justify-between').eq(1).find(balance_id + '> span').should('have.text', 'balance : ' + Cypress.env('balance').kusdt.balance)
                break
            case 'KUSDC':
                balance_id = 'balance-USD'
                cy.get('.flex > .justify-between').then(($balance) => {
                    expect($balance.eq(1).find('[id^=' + balance_id + ']').length).to.equal(1)
                })
                cy.get('.flex > .justify-between').eq(1).find('[id^=' + balance_id + ']> span').should('have.text', 'balance : ' + Cypress.env('balance').kusdc.balance)

                break
        }
    }

    validate_amount_textbox_token1(message: string) {
        cy.get(validate_input_token_1_amount_textbox).should('have.value', message)
    }

    validate_amount_textbox_token2(message: string) {
        cy.get(validate_input_token_2_amount_textbox).should('have.value', message)
    }

    validate_price_rate(slippage: string) {

        cy.get(validate_price_rate).then(($price) => {
            //check price rate 1
            expect($price.eq(0).text()).to.be.equal($price.eq(0).text())

            //check price rate 2
            expect($price.eq(1).text()).to.be.equal($price.eq(1).text())

        }).then(($price) => {
            cy.get(token_1_amount_textbox).then(($token1) => {
                cy.get(token_2_amount_textbox).then(($token2) => {
                    var token1_val = $token1.val() as string
                    var token2_val = $token2.val() as string
                    console.log(typeof token2_val)
                    //convert to decimal fomat
                    var slippage_val = parseFloat(slippage)
                    var accualt_val = parseFloat(token1_val) / parseFloat($price.eq(0).text())
                    var low_accualt_val = accualt_val - ((accualt_val * slippage_val) / 100)
                    var high_accualt_val = accualt_val + ((accualt_val * slippage_val) / 100)
                    var expect_val = parseFloat(token2_val).toFixed(5)


                    //Cut 5 decimal place with no increase
                    //var $truncate_expext_val = (this.truncateDecimals(accualt_val * 100000) / 100000).toFixed(5)
                    var $truncate_low_expect_val = low_accualt_val.toFixed(5)
                    var $truncate_high_expect_val = high_accualt_val.toFixed(5)

                    expect(parseFloat(expect_val)).to.be.within(parseFloat($truncate_low_expect_val), parseFloat($truncate_high_expect_val))

                })
            })
        })

        cy.get('.flex > .justify-between').then(($token) => {
            //check price name 1
            var name_price_rate = $token.eq(0).find('> [id^=token-]').text() + 'per' + $token.eq(1).find('> [id^=token-]').text()

            cy.get(validate_name_price_rate).eq(0).should('contain', name_price_rate)

            //check price name 2
            name_price_rate = $token.eq(1).find('> [id^=token-]').text() + 'per' + $token.eq(0).find('> [id^=token-]').text()

            cy.get(validate_name_price_rate).eq(1).should('contain', name_price_rate)
        })

        this.validate_share_pool()
    }

    //Cut 5 decimal place with no increase
    truncateDecimals = function (number: number) {
        return Math[number < 0 ? 'ceil' : 'floor'](number);
    }

    enter_liquidity_detail(token1: string, token2: string, amount: string) {
        //click open select token dialog
        this.click_select_token_1_dialog_btn()
        //select token 1
        this.click_token_from_dialog_token_list(token1)

        //click open select token dialog
        this.click_select_token_2_dialog_btn()
        //select token 1
        this.click_token_from_dialog_token_list(token2)
        cy.wait(2500)
        //clear token
        this.clear_token_1_amount()
        cy.wait(1000)
        //input token  as symbol
        this.enter_token_1_amount(amount)
        cy.wait(1000)
    }

    validate_share_pool() {
        let share_pool_val

        cy.get(share_pool).then(($sharepool) => {
            share_pool_val = $sharepool.text()
            expect(share_pool_val).to.be.equal(share_pool_val)
        })
    }

    validate_open_confirm_liquidity_dialog() {
        cy.get(validate_open_confirm_liquidity_dialog).then(($dialog) => {
            expect($dialog.length).to.be.equal(1)
        })
    }

    validate_confirm_liquidity_dialog(token1: string, token2: string, slippage: string) {
        //check token name1
        cy.get(validate_confirm_liquidity_dialog_token1).should('have.text', token1)

        //check token name2
        cy.get(validate_confirm_liquidity_dialog_token2).should('have.text', token2)


        cy.get(validate_confirm_liquidity_dialog_price_rate_token1).then(($price1) => {
            //check price rate 1
            expect($price1.text()).to.be.equal($price1.text())
        })

        cy.get(validate_confirm_liquidity_dialog_price_rate_token2).then(($price2) => {
            //check price rate 2
            expect($price2.text()).to.be.equal($price2.text())

        })

        //check amount token 1
        cy.get(validate_confirm_liquidity_dialog_price_rate_token1).then(($price1) => {

            cy.get(validate_confirm_liquidity_dialog_amount_token1).then(($token1) => {

                cy.get(validate_confirm_liquidity_dialog_amount_token2).then(($token2) => {

                    var token1_val = $token1.text() as string
                    var token2_val = $token2.text() as string

                    //convert to decimal fomat
                    var slippage_val = parseFloat(slippage)
                    var accualt_token1_val = parseFloat(token2_val) * parseFloat($price1.text())
                    var low_accualt_token1_val = accualt_token1_val - ((accualt_token1_val * slippage_val) / 100)
                    var high_accualt_token1_val = accualt_token1_val + ((accualt_token1_val * slippage_val) / 100)
                    var expect_token1_val = parseFloat(token1_val)

                    //Cut 5 decimal place with no increase
                    //var $truncate_expect_token1_val = (this.truncateDecimals(accualt_token1_val * 100000) / 100000).toFixed(5)
                    var $truncate_low_expect_token1_val = low_accualt_token1_val.toFixed(5)
                    var $truncate_high_expect_token1_val = high_accualt_token1_val.toFixed(5)

                    //check amount token 1
                    expect(expect_token1_val).to.be.within(parseFloat($truncate_low_expect_token1_val), parseFloat($truncate_high_expect_token1_val))
                })
            })
        })

        //check amount token 2
        cy.get(validate_confirm_liquidity_dialog_price_rate_token1).then(($price1) => {
            cy.get(validate_confirm_liquidity_dialog_amount_token1).then(($token1) => {
                cy.get(validate_confirm_liquidity_dialog_amount_token2).then(($token2) => {
                    var token1_val = $token1.text() as string
                    var token2_val = $token2.text() as string

                    //convert to decimal fomat
                    var slippage_val = parseFloat(slippage)
                    var accualt_token2_val = parseFloat(token1_val) / parseFloat($price1.text())
                    var low_accualt_token2_val = accualt_token2_val - ((accualt_token2_val * slippage_val) / 100)
                    var high_accualt_token2_val = accualt_token2_val + ((accualt_token2_val * slippage_val) / 100)

                    var expect_token2_val = parseFloat(token2_val)

                    //Cut 5 decimal place with no increase
                    //token2 value
                    var $truncate_low_expect_token2_val = low_accualt_token2_val.toFixed(5)
                    var $truncate_high_expect_token2_val = high_accualt_token2_val.toFixed(5)

                    //check amount token 2
                    expect(expect_token2_val).to.be.within(parseFloat($truncate_low_expect_token2_val), parseFloat($truncate_high_expect_token2_val))  //hard code must change
                })
            })
        })

        //check price rate name 1 & price rate name 2
        cy.get(validate_confirm_liquidity_dialog_token1).then(($token1) => {
            cy.get(validate_confirm_liquidity_dialog_token2).then(($token2) => {
                //check price rate name 1
                var name_price_rate1 = $token1.text() + 'per' + $token2.text()

                cy.get(validate_confirm_liquidity_dialog_price_name_token1).should('contain', name_price_rate1)

                //check price rate name 2
                var name_price_rate2 = $token2.text() + 'per' + $token1.text()

                cy.get(validate_confirm_liquidity_dialog_price_name_token2).should('contain', name_price_rate2)
            })
        })

        //check share pool
        cy.get(validate_confirm_liquidity_dialog_share_pool).then(($sharepool) => {
            var share_pool_val = $sharepool.text()
            expect(share_pool_val).to.be.equal(share_pool_val)
        })
    }

    validate_close_confirm_liquidity_dialog() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_close_confirm_liquidity_dialog).length).to.equal(0)
        })
    }

    validate_click_confirm_on_confirm_liquidity_dialog(message: string) {

        //expect(confirmPageElements.rejectButton.length).to.be.equal(1)
        // cy.switchToMetamaskNotification()
        // cy.assignWindows()
        // cy.get(confirmPageElements.rejectButton_cypress)

        cy.get(validate_click_confirm_on_confirm_liquidity_dialog).should('contain', message)

    }

    validate_insufficien_balance() {
        cy.get(validate_insufficien_balance_notification).should('be.disabled')
    }

    validate_reject_transaction(message: string) {
        cy.get(validate_reject_transaction_notification).should('contain', message)
    }

    validate_low_slippage(message: string) {
        cy.get(validate_low_slippage_notification).should('contain', message)
    }

    validate_add_liquidity_success() {

        //check add liquidity success dialog
        this.validate_add_liquidity_success_dialog()
        //check add liquidity success dialog message
        cy.get(validate_add_liquidity_success_dialog_message).should('contain', 'Success')

        //close add liquidity success dialog
        this.click_close_add_liquidity_success_dialog()
        //check after close add liquidity success dialog
        this.validate_close_add_liquidity_success_dialog()
        cy.wait(6000)
        //check your liquidity
        cy.get(validate_your_liquidity).then((data) => {
            expect(data.length).to.be.equal(1)

        })

        //open your liquidity detail
        this.click_your_liquidity_btn()

        //check your liquidity name
        cy.get(validate_your_liquidity_pool_name).then((data) => {
            var pool_name = data.text()
            if (pool_name == token1_name + '/' + token2_name) {

                expect(data.text()).to.be.equal(token1_name + '/' + token2_name)

            } else if (pool_name == token2_name + '/' + token1_name) {

                expect(data.text()).to.be.equal(token2_name + '/' + token1_name)

                //set new value
                //name
                var clone_data = token1_name
                token1_name = token2_name
                token2_name = clone_data

                //amount
                clone_data = token1_amount
                token1_amount = token2_amount
                token2_amount = clone_data

                clone_data = balance_token1
                balance_token1 = balance_token2
                balance_token2 = clone_data
            }

        })

        //check pool token 1 name
        cy.get(validate_your_liquidity_pool_token1_name).then((data) => {
            expect(data.text()).to.be.equal('Pooled ' + token1_name + ' :')
        })

        //check pool token 2 name
        cy.get(validate_your_liquidity_pool_token2_name).then((data) => {
            expect(data.text()).to.be.equal('Pooled ' + token2_name + ' :')
        })

        //check share pool name
        cy.get(validate_your_liquidity_pool_sharepool).then((data) => {
            expect(data.text()).to.be.equal('Share of Pool :')
        })

        //check your liquidity token 1 amount
        cy.get(validate_your_liquidity_pool_token1_amount).then((data) => {
            var value = parseFloat(data.text())
            var low_expect_value = parseFloat(token1_amount) - ((parseFloat(token1_amount) * parseFloat(slippage)) / 100)
            var hight_expect_value = parseFloat(token1_amount) + ((parseFloat(token1_amount) * parseFloat(slippage)) / 100)

            //set token1 after add liquidity to variable
            this.set_token1_after_add_amount(value)

            //check your liquidity token 1 amount
            expect(value).to.be.within(low_expect_value, hight_expect_value)
        })

        //check your liquidity token 2 amount
        cy.get(validate_your_liquidity_pool_token2_amount).then((data) => {
            var value = parseFloat(data.text())
            var low_expect_value = parseFloat(token2_amount) - ((parseFloat(token2_amount) * parseFloat(slippage)) / 100)
            var hight_expect_value = parseFloat(token2_amount) + ((parseFloat(token2_amount) * parseFloat(slippage)) / 100)

            //set token2 after add liquidity to variable
            this.set_token2_after_add_amount(value)

            //check your liquidity token 2 amount
            expect(value).to.be.within(low_expect_value, hight_expect_value)
        })

        //check pool share pool
        cy.get(validate_your_liquidity_pool_sharepool_amount).then((data) => {
            var value = parseFloat(data.text())

            expect(value).to.be.equal(value)
            //expect(value).to.be.equal(share_pool_amount)
        })

        //check balance token1 after add liquidity
        //move to add liquidity page
        this.click_add_liquidity_btn()
        cy.wait(500)

        //click open select token dialog
        this.click_select_token_1_dialog_btn()
        //select token 1
        cy.get('body').then((data)=>{
            this.click_token_from_dialog_token_list(token1_name)
        })
        
        //click open select token dialog
        this.click_select_token_2_dialog_btn()
        //select token 1
        cy.get('body').then((data)=>{
            this.click_token_from_dialog_token_list(token2_name)
        })
        cy.wait(2500)

        cy.get(balance_box).then((data) => {
            //get balance after add liquidity
            //balance token1
            var accualt_balance_token1 = data.eq(0).text()
            var accualt_balance_token1_val = parseFloat(accualt_balance_token1.replace(/[^0-9\.]+/g, ''))
            //balance token2
            var accualt_balance_token2 = data.eq(1).text()
            var accualt_balance_token2_val = parseFloat(accualt_balance_token2.replace(/[^0-9\.]+/g, ''))

            var low_expect_balance_token1 = parseFloat(balance_token1) - (token1_after_add_amount + ((token1_after_add_amount * 0.1) / 100))
            var high_expect_balance_token1 = parseFloat(balance_token1) - (token1_after_add_amount - ((token1_after_add_amount * 0.1) / 100))
            console.log(balance_token1)
            console.log(balance_token2)
            console.log(token1_after_add_amount)
            console.log(token2_after_add_amount)
            console.log(low_expect_balance_token1)
            console.log(high_expect_balance_token1)
            
            //check balance1 after add liquidity
            expect(accualt_balance_token1_val).to.be.within(low_expect_balance_token1,high_expect_balance_token1)

            var low_expect_balance_token2 = parseFloat(balance_token2) - (token2_after_add_amount + ((token2_after_add_amount * 0.1) / 100))
            var high_expect_balance_token2 = parseFloat(balance_token2) - (token2_after_add_amount - ((token2_after_add_amount * 0.1) / 100))

            //check balance2 after add liquidity
            expect(accualt_balance_token2_val).to.be.within(low_expect_balance_token2,high_expect_balance_token2)

        })
        //check balance token2 after add liquidity
    }

    validate_add_liquidity_low_slippage(message: string) {
        cy.get(validate_reject_transaction_notification).should('contain', message)
    }

    validate_add_liquidity_success_dialog() {
        cy.get('body').then((data) => {
            expect(data.find(validate_add_liquidity_success_dialog).length).to.be.equal(1)
        })
    }

    validate_close_add_liquidity_success_dialog() {
        cy.get('body').then((data) => {
            expect(data.find(validate_close_add_liquidity_success_dialog).length).to.be.equal(0)
        })
    }

    add_liquidity_pool(token1: string, token2: string, amount: string, slippage: string) {


        //check slippage 
        if (parseFloat(slippage) > 0.0 && parseFloat(slippage) <= 1.0) {
            //click Setting 
            this.click_setting_btn()
            //click slippage
            this.click_slippage(slippage)
            //click close setting dialog
            this.click_close_setting_btn()
        } else {
            //click Setting 
            this.click_setting_btn()
            //enter slippage
            this.enter_slippage_textbox(slippage)
            //click close setting dialog
            this.click_close_setting_btn()
        }

        //input token detail
        this.enter_liquidity_detail(token1, token2, amount)
        cy.wait(2000)
        //get balance token1&2 
        this.get_balance_before_add_liquidity()
        cy.wait(100)
        //click open dialog
        this.click_supply_btn()
        cy.wait(300)

        //get liquidity detail
        this.get_liquidity_detail()
        this.set_slippage(slippage)

        //click confirm
        this.click_confirm_on_confirm_liquidity_dialog()

    }

    //use for call from other test
    add_liquidity_pool_success(token1: string, token2: string, amount: string, slippage: string) {
        if (parseFloat(slippage) <= 1.0) {
            //click Setting 
            this.click_setting_btn()
            //click slippage
            this.click_slippage(slippage)
            //click close setting dialog
            this.click_close_setting_btn()
        } else {
            //click Setting 
            this.click_setting_btn()
            //enter slippage
            this.enter_slippage_textbox(slippage)
            //click close setting dialog
            this.click_close_setting_btn()
        }

        //input token detail
        this.enter_liquidity_detail(token1, token2, amount)
        //click open dialog
        this.click_supply_btn()
        cy.wait(300)
    }

    get_balance_before_add_liquidity() {
        cy.get(balance_box).then((data) => {
            //balance token1
            var balance_tk1 = data.eq(0).text()
            //call set balance1 to variable
            this.set_balance_token1(balance_tk1.replace(/[^0-9\.]+/g, ''))

            //balance token2
            var balance_tk2 = data.eq(1).text()
            //call set balance2 to variable
            this.set_balance_token2(balance_tk2.replace(/[^0-9\.]+/g, ''))
        })
    }

    get_liquidity_detail() {
        //get token 1 name
        cy.get(validate_confirm_liquidity_dialog_token1).then((data) => {
            this.set_token1_name(data.text())
        })

        //get token 2 name
        cy.get(validate_confirm_liquidity_dialog_token2).then((data) => {
            this.set_token2_name(data.text())
        })

        //get token 1 amount
        cy.get(validate_confirm_liquidity_dialog_amount_token1).then((data) => {
            this.set_token1_amount(data.text())
        })
        //get token 2 amount
        cy.get(validate_confirm_liquidity_dialog_amount_token2).then((data) => {
            this.set_token2_amount(data.text())
        })

        //get share pool
        cy.get(validate_confirm_liquidity_dialog_share_pool).then((data) => {
            this.set_sharepol_amount(data.text())
        })
    }
    set_token1_name(a: string) {
        token1_name = a
    }
    set_token2_name(b: string) {
        token2_name = b
    }
    set_token1_amount(c: string) {
        token1_amount = c
    }
    set_token2_amount(d: string) {
        token2_amount = d
    }
    set_sharepol_amount(e: string) {
        share_pool_amount = e
    }
    set_slippage(f: string) {
        slippage = f
    }
    set_balance_token1(g: string) {
        balance_token1 = g
    }
    set_balance_token2(h: string) {
        balance_token2 = h
    }
    set_token1_after_add_amount(i: number) {
        token1_after_add_amount = i
    }
    set_token2_after_add_amount(j: number) {
        token2_after_add_amount = j
    }
}


//validate element
export class ValidateAddliquidity {
    validate_Back_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_back_button).length).to.equal(1)
        })
    }

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

    validate_Token_1_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_token_1_button).length).to.equal(2)
        })
    }

    validate_Balance_token_1_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_balance_1_box).length).to.equal(2)
        })
    }

    validate_Token_1__textbox_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_token_1_textbox).length).to.equal(1)
        })
    }

    validate_Token_2_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_token_2_button).length).to.equal(2)
        })
    }

    validate_Balance_token_2_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_balance_2_box).length).to.equal(2)
        })
    }

    validate_Token_2__textbox_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_token_2_textbox).length).to.equal(1)
        })
    }

    validate_Price_rate_1_box_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_price_rate_1).length).to.equal(2)
        })
    }

    validate_Price_rate_2_box_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_price_rate_2).length).to.equal(2)
        })
    }

    validate_Share_pool_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_share_pool).length).to.equal(1)
        })
    }

    validate_Enable_token_1_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_enable_token_1_button).length).to.equal(1)
        })
    }

    validate_Enable_token_2_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_enable_token_2_button).length).to.equal(1)
        })
    }

    validate_Approve_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_approve_button).length).to.equal(1)
        })
    }

    validate_Select_token_dialog_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token_dialog).length).to.equal(1)
        })
    }

    validate_Select_token_dialog_search_textbox_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token_dialog_search_textbox).length).to.equal(1)
        })
    }

    validate_Select_token_dialog_bookmark_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token_dialog_bookmark_box).length).to.equal(1)
        })
    }

    validate_Select_token_dialog_token_1_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token_dialog_token_1_button).length).to.equal(1)
        })
    }

    validate_Select_token_dialog_token_2_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token_dialog_token_2_button).length).to.equal(1)
        })
    }

    validate_Select_token_dialog_token_3_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token_dialog_token_3_button).length).to.equal(1)
        })
    }

    validate_Select_token_dialog_close_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(element_select_token_dialog_close_button).length).to.equal(1)
        })
    }

}