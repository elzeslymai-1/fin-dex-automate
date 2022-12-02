//button
let connect_wallet_button = '.space-x-3 > :nth-child(1) > .relative'
let metamask_button = '.metamask-gradient > .absolute'
let swap_setting_button = '.grid > .flex > :nth-child(1)'
let slip_close_button ='.flex-col>.items-center>.w-5'
let kub_button = '#token-KUB > .flex > .ml-1'
let kusdt_button = '#token-KUSDT > .flex > .ml-1'
let kusdc_button = '#token-KUSDC > .flex > .ml-1'
let currency_kub_button = '.grid > :nth-child(1) > .flex > .ml-4'
let currency_kusdt_button = ':nth-child(2) > .flex > .ml-4'
let currency_kusdc_button = ':nth-child(3) > .flex > .ml-4'
let swap_button = ':nth-child(2) > .MuiButtonBase-root'
let bookmark_button = 'div[class="cursor-pointer"]'
let cr_close_button = 'svg[class="w-5 text-gray-500 cursor-pointer"]'
let select_currency_token = '.MuiPaper-root > .flex-col > .grid'

//textbox
let currency1 = '.mt-3 > .flex'
let textbox_currency1 = ':nth-child(1) > .p-4 > .bg-input-primary'
let textbox_currency2 = ':nth-child(3) > .p-4 > .bg-input-primary'
let textbox_deadline = '.grid-cols-1 > .justify-between > .bg-input-primary'
let textbox_deadline1 = '.grid-cols-1 > .justify-between > .bg-input-primary'

//validate
let validate_text_swap = '#swap-page>'
let validate_logo_setting = '.grid > .flex > :nth-child(1)>'
let validate_logo_history = '.grid > .flex > :nth-child(2)>'
let validate_text_setting = '.text-xl'
let validate_text_slippage = '.grid-cols-1 > .flex-col > :nth-child(1)'
let validate_num_slippage1 = '.grid > :nth-child(1) > .font-semibold'
let validate_num_slippage2 = '.grid > :nth-child(2) > .font-semibold'
let validate_num_slippage3 = '.grid > :nth-child(3) > .font-semibold'
let validate_num_slippage4 = ':nth-child(4) > .flex'
let validate_text_deadline = '.grid-cols-1 > .justify-between > div'
let validate_textbox_deadline = '.grid-cols-1 > .justify-between > .bg-input-primary'
let validate_logo_kusdt = '#token-KUSDT > .flex > .w-6'
let validate_text_kusdt = '#token-KUSDT > .flex > .ml-1'
let validate_balance1 = '#balance-Tether > .ml-1'
let validate_textbox_currency1 = ':nth-child(1) > .p-4 > .bg-input-primary'
let validate_logo_kusdc = '#token-KUSDC>.flex>.w-6'
let validate_text_kusdc = '#token-KUSDC > .flex > .ml-1'
let validate_balance2 = '[id="balance-USD Coin"] > .ml-1'
let validate_textbox_currency2 = ':nth-child(3) > .p-4 > .bg-input-primary'
let validate_text_price = '.text-sm > .text-primary-cyan'
let validate_text_price_detail1 = '.mt-12 > :nth-child(4) > .text-sm > :nth-child(2)'
let validate_text_price_detail2 = '.mt-12 > :nth-child(4) > .text-sm > :nth-child(3)'
let validate_text_price_detail3 = '.mt-12 > :nth-child(4) > .text-sm > :nth-child(4)'
let validate_text_price_detail4 = '.mt-12 > :nth-child(4) > .text-sm > :nth-child(5)'
let validate_search_currency1 = 'div[class="grid grid-cols-1 gap-7 px-3"]'
let validate_bookmark = 'div[class="grid grid-cols-2 md:grid-cols-4 gap-3"]'
let validate_change_button = '.mt-12 > .justify-center>svg>'
let validate_deadline = '.grid-cols-1 > .text-red-500'
let validate_graph_currency1 = '.items-center.space-x-1 > div.dark\:text-white'
let validate_graph_logo_currency1 = '[alt="Tether"]'
let validate_graph_currency2 = '.w-\[512px\] > .justify-between > .flex > :nth-child(2)'
let validate_graph_logo_currency2 = '[alt="USD Coin"]'
let validate_tranframe1 = '.flex-1 > .justify-end > :nth-child(2)'
let validate_tranframe2 = '.flex-1 > .justify-end > :nth-child(3)'
let validate_tranframe3 = '.flex-1 > .justify-end > :nth-child(4)'
let validate_graph_price = '.text-4xl'
let validate_graph_cr1 = '.mt-4 > .items-center > .text-base > :nth-child(1)'
let validate_graph_cr2 = '.mt-4 > .items-center > .text-base > :nth-child(3)'
let validate_graph_line = '.bg-primary-cyan>.w-5>'
let validate_graph_chart = '.text-primary-cyan>.w-5>'


export class Element_swap_page {
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
    clickswapsetting(){
        cy.get(swap_setting_button).click()
    }
    clickslipclose(){
        cy.get(slip_close_button).click()
    }
    clickkub_button(){
        cy.get(kub_button).click()
    }
    clickkusdt_button(){
        cy.get(kusdt_button).click()
    }
    clickkusdc_button(){
        cy.get(kusdc_button).click()
    }
    clickbookmark_kub(){
        cy.get(bookmark_button).eq(0).click()
    }
    clickbookmark_kusdt(){
        cy.get(bookmark_button).eq(1).click()
    }
    clickbookmark_kusdc(){
        cy.get(bookmark_button).eq(2).click()
    }
    clickcrclose_button(){
        cy.get(cr_close_button).click()
    }
    entercurrency1(num:string){
        cy.get(currency1).type(num)
    }
    entercurrencyclear(){
        cy.get(currency1).clear()
    }
    entertextbox_currency1(num:string){
        cy.get(textbox_currency1).type(num)
    }
    entertextbox_currency1clear(){
        cy.get(textbox_currency1).clear()
    }
    entertextbox_currency2(num:string){
        cy.get(textbox_currency2).type(num)
    }
    entertextbox_currency2clear(){
        cy.get(textbox_currency2).clear()
    }
    entertextbox_deadline(num:string){
        cy.get(textbox_deadline).type(num)
    }
    entertextbox_deadlineclear(){
        cy.get(textbox_deadline).clear()
    }
    validate_textbox_deadline(swap:string){
        cy.get(textbox_deadline1).should('have.value',swap)
    }
    validatefail_textbox_deadline(swap:string){
        cy.get(validate_deadline).should('have.text',swap)
    }
    validate_text_swap(swap:string){
        cy.get(validate_text_swap).should('have.text',swap)
    }
    validate_logo_setting(){
        cy.get(validate_logo_setting).should('have.attr','width','16').and('have.attr','height','16')
    }
    validate_logo_history(){
        cy.get(validate_logo_history).should('have.attr','width','16').and('have.attr','height','16')
    }
    validate_change_button(){
        cy.get(validate_change_button).should('have.attr','d').and('contain','M16.707')
    }
    validate_text_price(text:string){
        cy.get(validate_text_price).should('have.text',text)
    }
    validate_swap_button(swap:string){
        cy.get(swap_button).should('have.text',swap)
    }
    validatefail_search_currency1(){
        cy.get(validate_search_currency1).should('not.be.visible')
    }
    validatesuccess_search_currency1(){
        cy.get(validate_search_currency1).should('be.visible')
    }
    validatebookmark(){
        cy.get(validate_bookmark).should('be.visible')
    }
    validate_textbox_currency1(num:string){
        cy.get(textbox_currency1).should('have.value',num)
    }
    validate_textbox_currency2(num:string){
        cy.get(textbox_currency2).should('have.value',num)
    }
    validate_graph_currency1(swap:string){
        cy.get(validate_graph_currency1).should('have.text',swap)
    }
    validate_graph_logo_currency1(swap:string){
        cy.get(validate_graph_logo_currency1).should('have.attr','src').and('include',swap)
    }
    validate_graph_currency2(swap:string){
        cy.get(validate_graph_currency2).should('have.text',swap)
    }
    validate_graph_logo_currency2(swap:string){
        cy.get(validate_graph_logo_currency2).should('have.attr','src').and('include',swap)
    }
    validate_tranframe1(swap:string){
        cy.get(validate_tranframe1).should('have.text',swap)
    }
    validate_tranframe2(swap:string){
        cy.get(validate_tranframe2).should('have.text',swap)
    }
    validate_tranframe3(swap:string){
        cy.get(validate_tranframe3).should('have.text',swap)
    }
    validate_graph_price(){
        cy.get('.text-4xl').then(($pricegrap) => {
            expect($pricegrap.text()).to.be.equal($pricegrap.text())
        })
        
    }
    validate_graph_cr1(swap:string){
        cy.get(validate_graph_cr1).should('have.text',swap)
    }
    validate_graph_cr2(swap:string){
        cy.get(validate_graph_cr2).should('have.text',swap)
    }
    validate_graph_line(){
        cy.get(validate_graph_line).should('have.attr','d').and('contain','M7')
    }
    validate_graph_chart(){
        cy.get(validate_graph_chart).should('have.attr','d').and('contain','M8')
    }
    select_currency_token(token:string){
        cy.wait(2000)
        cy.get(select_currency_token).contains(token).click()
        cy.wait(1000)
    }
    validate_currency1(token1:string, balance:string, num:string){
        cy.get(validate_logo_kusdt).should('have.attr','src','/assets/tokens/usdt.png')
        cy.get(validate_text_kusdt).should('have.text',token1)
        cy.get(validate_balance1).should('contain',balance)
        cy.get(validate_textbox_currency1).should('have.attr','placeholder',num)
    }
    validate_currency2(token1:string, balance:string, num:string){
        cy.get(validate_logo_kusdc).should('have.attr','src','/assets/tokens/usdc.png')
        cy.get(validate_text_kusdc).should('have.text',token1)
        cy.get(validate_balance2).should('contain',balance)
        cy.get(validate_textbox_currency2).should('have.attr','placeholder',num)
    }
    validate_text_price_detail( text2:string, text3:string, text4:string,){
        
        cy.get(validate_text_price_detail2).should('contain',text2)
        cy.get(validate_text_price_detail3).should('contain',text3)
        cy.get(validate_text_price_detail4).should('contain',text4)
    }
    validate_page_setting(swap:string, swap1:string, num1:string, num2:string, num3:string, num4:string, line:string, line1:string){
        cy.get(validate_text_setting).should('have.text',swap)
        cy.get(validate_text_slippage).should('have.text',swap1)
        cy.get(validate_num_slippage1).should('have.text',num1)
        cy.get(validate_num_slippage2).should('have.text',num2)
        cy.get(validate_num_slippage3).should('have.text',num3)
        cy.get(validate_num_slippage4).should('have.text',num4)
        cy.get(validate_text_deadline).should('have.text',line)
        cy.get(validate_textbox_deadline).should('have.value',line1)
    }
    validate_cf_swap(){
    cy.get('.mt-12 > :nth-child(4) > .text-sm > :nth-child(2)').then(($price) => {
        //check price rate 1
        expect($price.text()).to.be.equal($price.text())
        
    }).then(($price) => {
        
        cy.get(':nth-child(1) > .p-4 > .bg-input-primary').then(($token1) => {
            cy.get(':nth-child(3) > .p-4 > .bg-input-primary').then(($token2) => {
                var tokencf1_val = $token1.val() as string
                var tokencf2_val = $token2.val() as string
                
                //convert to decimal fomat
                var accualt_val = parseFloat(tokencf1_val) / parseFloat($price.text())
                var expect_val = parseFloat(tokencf2_val).toFixed(5)

                //Cut 5 decimal place with no increase
                var $truncate_expext_val = accualt_val.toFixed(5)
                
                expect($truncate_expext_val).to.be.equal($truncate_expext_val)
            })
        })
    })
    
    cy.get('div[id="minimum received"] > .font-semibold > :nth-child(1)').then(($received) => {
            expect($received.text()).to.be.equal($received.text())
        })
        
    cy.get('[id="price impact"] > .font-semibold > span').then(($price) => {
            expect($price.text()).to.be.equal($price.text())  
        }) 
        
    cy.get(':nth-child(1) > .p-4 > .bg-input-primary').then(($token1) => {
        cy.get('div[id="liquidity provider fee"] > .font-semibold > :nth-child(1)').then(($fee) => {
            var token1_cf_val = $token1.val() as string
            var fee_cf_val = $fee.text() as string
            console.log(token1_cf_val)
            //convert to decimal fomat
            var accualtcf_val = parseFloat(token1_cf_val) * 0.0025
            var expectcf_val = parseFloat(fee_cf_val).toFixed(5)
            console.log(accualtcf_val)
            console.log(expectcf_val)
            //Cut 5 decimal place with no increase
            var $truncate_expext_val = accualtcf_val.toFixed(5)
            
            expect($truncate_expext_val).to.be.equal(expectcf_val) 
        })
    })
}
}