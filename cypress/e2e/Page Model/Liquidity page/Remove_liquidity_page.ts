import { AddLiquidity } from "./Add_liquidity_page"
const addLiquidity = new AddLiquidity()

let liquidity_menu_button = '.text-text-active'
let connect_wallet_button = '.space-x-3 > :nth-child(1) > .relative'
let metamask_button = '.metamask-gradient > .absolute'
let addLiquidity_button = '.MuiButtonBase-root > svg.w-5'
let back_button = '.container > .flex > .w-full > .grid > div > .text-primary-cyan'
let your_liquidity_button = '#panel1d-header'
let remove_liquidity_button = '.grid-cols-1 > :nth-child(1) > .MuiButtonBase-root'
let setting_button = '.grid-cols-3 > .flex > :nth-child(1)'
let balance_box = '[id^="balance-"] > .ml-1'
let supply_button = '#approve-token-and-supply > .space-y-3 > .MuiButtonBase-root'
let slippage_button = '.grid-cols-1 > .flex-col > .grid'
let slippage_01_button = '.grid > :nth-child(1) > .font-semibold'
let slippage_05_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let slippage_1_button = '.grid > :nth-child(3) > .font-semibold'
let slippage_textbox = ':nth-child(4) > .flex'
let close_setting_button = '.px-4 > .items-center > .w-5' //xpath
let remove_percen_button = '.bg-gray-100.flex > .grid'
let remove_25_percen_button = '.bg-gray-100.flex > .grid > :nth-child(1)'
let remove_50_percen_button = '.bg-gray-100.flex > .grid > :nth-child(2)'
let remove_75_percen_button = '.bg-gray-100.flex > .grid > :nth-child(3)'
let remove_100_percen_button = '.bg-gray-100.flex > .grid > :nth-child(4)'
let enable_button = '.grid-cols-1 > button'
let remove_button = '.grid-cols-1 > button'
let confirm_remove_button = '.mt-10 > .MuiButtonBase-root'
let close_remove_liquidity_success_dialog_button = '.MuiPaper-root > .text-black > .flex-col > .MuiButtonBase-root'

//assert
let validate_remove_percen_button = '.text-2xl'
let validate_remove_25_percen_button = '.bg-gray-100.flex > .grid > :nth-child(1)'
let validate_remove_50_percen_button = '.bg-gray-100.flex > .grid > :nth-child(2)'
let validate_remove_75_percen_button = '.bg-gray-100.flex > .grid > :nth-child(3)'
let validate_remove_100_percen_button = '.bg-gray-100.flex > .grid > :nth-child(4)'
let validate_remove_slibar = '.MuiSlider-root > .MuiSlider-thumb > input'
let validate_token1_name = ':nth-child(4) > .bg-gray-100 > .flex-col > :nth-child(1) > .flex > span'
let validate_token2_name = ':nth-child(4) > .bg-gray-100 > .flex-col > :nth-child(2) > .flex > span'
let validate_token1_amount = ':nth-child(4) > .bg-gray-100 > .flex-col > :nth-child(1) > .flex-1'
let validate_token2_amount = ':nth-child(4) > .bg-gray-100 > .flex-col > :nth-child(2) > .flex-1'
let validate_slippage = '.px-4 > .justify-between > :nth-child(2)'
let validate_liquidity_pool_name = '.line-clamp-1'
let validate_liquidity_pool_sharepool = '.p-4 > .grid > :nth-child(2)'
let validate_liquidity_pool_token1_amount = '.p-4 > .grid > :nth-child(4)'
let validate_liquidity_pool_token2_amount = '.grid > :nth-child(6)'
let validate_enable_button = '.grid-cols-1 > button'
let validate_remove_button = '.grid-cols-1 > button'
let validate_notification = '#swal2-title'
let validate_confirm_remove_dialog_token1_name = ':nth-child(3) > .flex > .ml-4'
let validate_confirm_remove_dialog_token2_name = ':nth-child(5) > .flex > .ml-4'
let validate_confirm_remove_dialog_token1_amount = '.MuiPaper-root > .flex-col > :nth-child(1) > :nth-child(3) > :nth-child(2)'
let validate_confirm_remove_dialog_token2_amount = '.flex-col > :nth-child(1) > :nth-child(5) > :nth-child(2)'
let validate_remove_liquidity_success_dialog_message = '.absolute'
let validate_remove_liquidity_success_dialog = '.MuiPaper-root > .text-black'
let validate_close_remove_liquidity_success_dialog = '.MuiPaper-root > .text-black'
let validate_your_liquidity = '.bg-gray-100 > div > .MuiPaper-root'
let validate_your_liquidity_pool_token1_amount = '.MuiAccordionDetails-root > .grid > :nth-child(2)'
let validate_your_liquidity_pool_token2_amount = '.grid > :nth-child(4)'

//----------get value-----------//
//get from confirim add liquidity dialog
let get_token1_name = ':nth-child(3) > .flex > .ml-4'
let get_token2_name = ':nth-child(5) > .flex > .ml-4'
//get from your liquidity detail
let get_token1_amount = '.MuiAccordionDetails-root > .grid > :nth-child(2)'
let get_token2_amount = '.grid > :nth-child(4)'
let get_sharepool_val = '.grid > :nth-child(6)'
//get from remove liquidity recieve
let get_recive_token1_name = ':nth-child(4) > .bg-gray-100 > .flex-col > :nth-child(1) > .flex > span'
let get_recive_token2_name = ':nth-child(4) > .bg-gray-100 > .flex-col > :nth-child(2) > .flex > span'
let get_recive_token1_amount = ':nth-child(4) > .bg-gray-100 > .flex-col > :nth-child(1) > .flex-1'
let get_recive_token2_amount = ':nth-child(4) > .bg-gray-100 > .flex-col > :nth-child(2) > .flex-1'

//---------collect data----------//
//for check data at remove page
let balance_token1 = ''
let balance_token2 = ''
let token1_name = ''
let token2_name = ''
let token1_amount = ''
let token2_amount = ''
let share_pool_amount = ''
let slippage = ''
//for check data at confirm remove dialog
let remove_token1_name = ''
let remove_token2_name = ''
let remove_token1_amount = ''
let remove_token2_amount = ''

export class Remove_Liquidity {
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

    click_slippage(message: string) {
        cy.get(slippage_button).contains(message).click()
    }

    enter_slippage_textbox(message: string) {
        cy.get(slippage_textbox).type(message, { delay: 0 })
    }

    clear_slippage_textbox() {
        cy.get(slippage_textbox).clear()
    }

    click_remove_percen(message: string) {
        cy.get(remove_percen_button).contains(message).click()
        this.get_token_detail_from_remove_liquidity_recieve()
    }

    click_25_percen() {
        cy.get(remove_25_percen_button).click()
        this.get_token_detail_from_remove_liquidity_recieve()
    }

    click_50_percen() {
        cy.get(remove_50_percen_button).click()
        this.get_token_detail_from_remove_liquidity_recieve()
    }

    click_75_percen() {
        cy.get(remove_75_percen_button).click()
        this.get_token_detail_from_remove_liquidity_recieve()
    }

    click_100_percen() {
        cy.get(remove_100_percen_button).click()
        this.get_token_detail_from_remove_liquidity_recieve()
    }

    click_enable_btn() {
        cy.get(enable_button).eq(0).click()
    }

    click_remove_btn() {
        cy.get(remove_button).eq(1).click()
    }

    click_confirm_remove_btn() {
        cy.get(confirm_remove_button).click()
    }

    click_close_remove_liquidity_success_dialog() {
        cy.get(close_remove_liquidity_success_dialog_button).click()
    }

    click_supply_btn() {
        cy.get(supply_button).click()
    }

    go_to_remove_liquidity_page() {
        //get balance after add liquidity
        this.get_balance_after_add_liquidity()
        cy.wait(500)
        //click open setting dialog
        this.click_setting_btn()
        //clear slippage textbox
        this.clear_slippage_textbox()
        //enter slippage 
        this.enter_slippage_textbox('0.5')
        //set slippage
        this.set_slippage('0.5')
        //close setting dialog
        this.click_close_setting_btn()

        cy.wait(2000)
        //click open detail your liquidity
        this.click_your_liquidity_btn()

        //get token amount into variable
        this.get_token_amount_detail_from_your_liquidity_detail()

        //click remove liquidity
        this.click_remove_liquidity()
    }


    //assert
    validate_25_percen() {
        //check percen text
        this.validate_remove_percen('25%')
        //check percen slibar
        this.validate_remove_slibar('25')
        //check percen button
        cy.get(validate_remove_25_percen_button).should('have.attr', 'class').and('contain', 'css-13o36p3')

        //check amount token after select percen
        this.validate_token_detail('25')
    }

    validate_50_percen() {
        //check percen text
        this.validate_remove_percen('50%')
        //check percen slibar
        this.validate_remove_slibar('50')
        //check percen button
        cy.get(validate_remove_50_percen_button).should('have.attr', 'class').and('contain', 'css-13o36p3')

        //check amount token after select percen
        this.validate_token_detail('50')
    }

    validate_75_percen() {
        //check percen text
        this.validate_remove_percen('75%')
        //check percen slibar
        this.validate_remove_slibar('75')
        //check percen button
        cy.get(validate_remove_75_percen_button).should('have.attr', 'class').and('contain', 'css-13o36p3')

        //check amount token after select percen
        this.validate_token_detail('75')
    }

    validate_100_percen() {
        //check percen text
        this.validate_remove_percen('100%')
        //check percen slibar
        this.validate_remove_slibar('100')
        //check percen button
        cy.get(validate_remove_100_percen_button).should('have.attr', 'class').and('contain', 'css-13o36p3')

        //check amount token after select percen
        this.validate_token_detail('100')
    }

    validate_remove_percen(message: string) {
        cy.get(validate_remove_percen_button).should('have.text', message)
    }

    validate_remove_slibar(message: string) {
        cy.get(validate_remove_slibar).should('have.attr', 'value').and('equal', message)
    }

    validate_token_detail(percen: string) {
        cy.get(validate_token1_name).then((data) => {
            var token1_name_val = data.text()
            expect(token1_name_val).to.be.equal(token1_name)
        })

        cy.get(validate_token2_name).then((data) => {
            var token2_name_val = data.text()
            expect(token2_name_val).to.be.equal(token2_name)
        })

        cy.get(validate_token1_amount).then((data) => {
            var token1_amount_val = parseFloat(data.text())
            var expect_amount_val = (parseFloat(token1_amount) * parseFloat(percen)) / 100
            cy.log('Real data is : ' + expect_amount_val)
            expect(token1_amount_val).to.be.equal(token1_amount_val)
        })

        cy.get(validate_token2_amount).then((data) => {
            var token2_amount_val = parseFloat(data.text())
            var expect_amount_val = (parseFloat(token2_amount) * parseFloat(percen)) / 100
            cy.log('Real data is : ' + expect_amount_val)
            expect(token2_amount_val).to.be.equal(token2_amount_val)
        })
    }

    validate_slippage() {
        cy.get(validate_slippage).should('have.text', slippage + '%')
        cy.log(slippage)
    }

    validate_sharepool() {
        cy.get(validate_liquidity_pool_sharepool).then((data) => {
            expect(data.text()).to.be.equal(share_pool_amount)
        })
    }

    validate_liquidity_pool_name() {
        cy.get(validate_liquidity_pool_name).then((data) => {
            expect(data.text()).to.be.equal(token1_name + '/' + token2_name)
        })
    }

    validate_liquidity_pool_token1_amount() {
        cy.get(validate_liquidity_pool_token1_amount).then((data) => {
            expect(data.text()).to.be.equal(token1_amount)
        })
    }

    validate_liquidity_pool_token2_amount() {
        cy.get(validate_liquidity_pool_token2_amount).then((data) => {
            expect(data.text()).to.be.equal(token2_amount)
        })
    }

    validate_no_input_amount_remove() {
        cy.get(validate_enable_button).then((data) => {
            expect(data.eq(0)).to.be.disabled
        })

        cy.get(validate_remove_button).then((data) => {
            expect(data.eq(1).text()).to.be.equal('enter_an_amount')
        })
    }

    validate_notification(message: string) {
        cy.get(validate_notification).should('contain', message)
    }

    validate_confirm_remove_dialog() {
        //check token1 name
        cy.get(validate_confirm_remove_dialog_token1_name).then((data) => {
            var token1_name_val = data.text()
            expect(token1_name_val).to.be.equal(remove_token1_name)
        })
        //check token2 name
        cy.get(validate_confirm_remove_dialog_token2_name).then((data) => {
            var token2_name_val = data.text()
            expect(token2_name_val).to.be.equal(remove_token2_name)
        })
        //check token1 amount
        cy.get(validate_confirm_remove_dialog_token1_amount).then((data) => {
            var token1_amount_val = parseFloat(data.text())

            expect(token1_amount_val).to.be.equal(parseFloat(remove_token1_amount))
        })
        //check token2 amount
        cy.get(validate_confirm_remove_dialog_token2_amount).then((data) => {
            var token2_amount_val = parseFloat(data.text())

            expect(token2_amount_val).to.be.equal(parseFloat(remove_token2_amount))
        })
    }

    validate_remove_liquidity_success_dialog() {
        cy.get('body').then((data) => {
            expect(data.find(validate_remove_liquidity_success_dialog).length).to.be.equal(1)
        })
    }

    validate_close_remove_liquidity_success_dialog() {
        cy.get('body').then((data) => {
            expect(data.find(validate_close_remove_liquidity_success_dialog).length).to.be.equal(0)
        })
    }

    validate_remove_liquidity_success(percen: string) {
        //click add liquidity success dialog
        this.validate_remove_liquidity_success_dialog()

        //------check add liquidity success dialog message------//
        cy.get(validate_remove_liquidity_success_dialog_message).should('contain', 'success')

        //close add liquidity success dialog
        this.click_close_remove_liquidity_success_dialog()
        //---------check after close add liquidity success dialog---------//
        this.validate_close_remove_liquidity_success_dialog()
        cy.wait(4000)

        //--------------check your liquidity after remove-------------------//
        cy.get('body').then((data) => {
            if (percen == '100') {
                expect(data.find(validate_your_liquidity).length).to.be.equal(0)
            } else {
                expect(data.find(validate_your_liquidity).length).to.be.equal(1)

                //open your liquidity detail
                this.click_your_liquidity_btn()

                //-----check pool token 1 amount-------//
                cy.get(validate_your_liquidity_pool_token1_amount).then((data1) => {
                    var token1_value = parseFloat(data1.text())
                    var token1_remove_amount = ((parseFloat(token1_amount) * parseFloat(percen)) / 100)
                    var low_expect_token1_value = parseFloat(token1_amount) - (token1_remove_amount + ((token1_remove_amount * parseFloat(slippage)) / 100))
                    var high_expect_token1_value = parseFloat(token1_amount) - (token1_remove_amount - ((token1_remove_amount * parseFloat(slippage)) / 100))

                    expect(token1_value).to.be.within(low_expect_token1_value, high_expect_token1_value)
                })

                //------check pool token 2 amount---------/
                cy.get(validate_your_liquidity_pool_token2_amount).then((data2) => {
                    var token2_value = parseFloat(data2.text())
                    var token2_remove_amount = ((parseFloat(token2_amount) * parseFloat(percen)) / 100)
                    var low_expect_token2_value = parseFloat(token2_amount) - (token2_remove_amount + ((token2_remove_amount * parseFloat(slippage)) / 100))
                    var high_expect_token2_value = parseFloat(token2_amount) - (token2_remove_amount - ((token2_remove_amount * parseFloat(slippage)) / 100))

                    expect(token2_value).to.be.within(low_expect_token2_value, high_expect_token2_value)
                })
            }
        })

        //------------check balance after remove liquidity-----------------//
        //move to add liquidity page
        this.click_add_liquidity_btn()
        cy.wait(500)

        //click open select token dialog
        addLiquidity.click_select_token_1_dialog_btn()
        //select token 1
        cy.get('body').then((data) => {
            addLiquidity.click_token_from_dialog_token_list(remove_token1_name)
        })

        //click open select token dialog
        addLiquidity.click_select_token_2_dialog_btn()
        //select token 1
        cy.get('body').then((data) => {
            addLiquidity.click_token_from_dialog_token_list(remove_token2_name)
        })
        cy.wait(2500)

        cy.get(balance_box).then((data) => {
            //get balance after add liquidity
            //balance token1
            var accualt_balance_token1 = data.eq(0).text()
            var accualt_balance_token1_val = parseFloat(accualt_balance_token1.replace(/[^0-9\.]+/g, ''))
            var remove_token1_slippage = ((parseFloat(remove_token1_amount) * parseFloat(slippage)) / 100)
            var low_expect_balance_token1 = parseFloat(balance_token1) + (parseFloat(remove_token1_amount) - remove_token1_slippage)
            var high_expect_balance_token1 = parseFloat(balance_token1) + (parseFloat(remove_token1_amount) + remove_token1_slippage)

            //check balance1 after add liquidity
            expect(accualt_balance_token1_val).to.be.within(low_expect_balance_token1, high_expect_balance_token1)

            //balance token2
            var accualt_balance_token2 = data.eq(1).text()
            var accualt_balance_token2_val = parseFloat(accualt_balance_token2.replace(/[^0-9\.]+/g, ''))
            var remove_token2_slippage = ((parseFloat(remove_token2_amount) * parseFloat(slippage)) / 100)
            var low_expect_balance_token2 = parseFloat(balance_token2) + (parseFloat(remove_token2_amount) - remove_token2_slippage)
            var high_expect_balance_token2 = parseFloat(balance_token2) + (parseFloat(remove_token2_amount) + remove_token2_slippage)

            //check balance2 after add liquidity
            expect(accualt_balance_token2_val).to.be.within(low_expect_balance_token2, high_expect_balance_token2)
        })
    }

    remove_liquidity_pool(message: string) {
        //select 25%
        this.click_remove_percen(message)
        //click enable
        this.click_enable_btn()
        cy.wait(3000)
        //confirm on notification metamask and wait
        cy.confirmMetamaskPermissionToSpend()
        cy.wait(25000)
        //click remove button
        this.click_remove_btn()
        //click confirm remove button
        this.click_confirm_remove_btn()
        cy.wait(3000)
        //reject on notification metamask
        cy.confirmMetamaskPermissionToSpend()
        cy.wait(25000)
    }

    //export for another file to call this function
    call_remove_liquidity_pool() {
        cy.viewport(1920, 1080)
        cy.visit('https://dev.fin-dex.finstable.co.th/liquidity')

        //remove.connect_wallet()
        this.click_connect_wallet()
        cy.wait(1500)
        //setting slippage & go to remove liquidity page
        this.go_to_remove_liquidity_page()
        cy.wait(2500)
        //select 25%
        this.click_remove_percen('100')
        //click enable
        this.click_enable_btn()
        cy.wait(3000)
        //confirm on notification metamask and wait
        cy.confirmMetamaskPermissionToSpend()
        cy.wait(25000)
        //click remove button
        this.click_remove_btn()
        //click confirm remove button
        this.click_confirm_remove_btn()
        cy.wait(3000)
        //reject on notification metamask
        cy.confirmMetamaskPermissionToSpend()
        cy.wait(25000)
    }

    add_liquidity_pool(token1: string, token2: string, amount: string, slippage: string) {
        this.click_add_liquidity_btn()
        cy.wait(700)
        addLiquidity.add_liquidity_pool_success(token1, token2, amount, slippage)

        this.get_balance_before_add_liquidity()
        cy.wait(100)

        this.click_supply_btn()
        cy.wait(300)

        //get&set liquidity detail into variable
        this.get_token_name_detail_from_confirm_add_liquidity_dialog()
        this.set_slippage(slippage)

        //click confirm
        addLiquidity.click_confirm_on_confirm_liquidity_dialog()

        cy.wait(3000)
        cy.confirmMetamaskTransaction()
        //assert
        cy.wait(25000)

        //close add liquidity success dialog
        addLiquidity.click_close_add_liquidity_success_dialog()
    }

    get_token_name_detail_from_confirm_add_liquidity_dialog() {
        //get token 1 name
        cy.get(get_token1_name).then((data) => {
            this.set_token1_name(data.text())
        })

        //get token 2 name
        cy.get(get_token2_name).then((data) => {
            this.set_token2_name(data.text())
        })
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

    get_balance_after_add_liquidity() {
        this.click_add_liquidity_btn()
        cy.wait(500)

        //click open select token dialog
        addLiquidity.click_select_token_1_dialog_btn()
        //select token 1
        cy.get('body').then((data) => {
            addLiquidity.click_token_from_dialog_token_list(token1_name)
        })
        cy.wait(500)
        //click open select token dialog
        addLiquidity.click_select_token_2_dialog_btn()
        //select token 1
        cy.get('body').then((data) => {
            addLiquidity.click_token_from_dialog_token_list(token2_name)
        })

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

        this.click_back_btn()
    }

    get_token_amount_detail_from_your_liquidity_detail() {
        //get token 1 amount
        cy.get(get_token1_amount).then((data) => {
            this.set_token1_amount(data.text())
        })
        //get token 2 amount
        cy.get(get_token2_amount).then((data) => {
            this.set_token2_amount(data.text())
        })

        //get share pool
        cy.get(get_sharepool_val).then((data) => {
            this.set_sharepol_amount(data.text())
        })
    }

    get_token_detail_from_remove_liquidity_recieve() {
        //get recive token 1 name
        cy.get(get_recive_token1_name).then((data) => {
            this.set_remove_token1_name(data.text())
        })

        //get recive token 2 name
        cy.get(get_recive_token2_name).then((data) => {
            this.set_remove_token2_name(data.text())
        })

        //get recive token 1 amount
        cy.get(get_recive_token1_amount).then((data) => {
            this.set_remove_token1_amount(data.text())
        })
        //get recive token 2 amount
        cy.get(get_recive_token2_amount).then((data) => {
            this.set_remove_token2_amount(data.text())
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
    set_remove_token1_name(h: string) {
        remove_token1_name = h
    }
    set_remove_token2_name(i: string) {
        remove_token2_name = i
    }
    set_remove_token1_amount(j: string) {
        remove_token1_amount = j
    }
    set_remove_token2_amount(k: string) {
        remove_token2_amount = k
    }
    set_balance_token1(l: string) {
        balance_token1 = l
    }
    set_balance_token2(m: string) {
        balance_token2 = m
    }
}