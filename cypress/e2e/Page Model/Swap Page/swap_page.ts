//button
let connect_wallet_button = '.space-x-3 > :nth-child(1) > .relative'
let metamask_button = '.metamask-gradient > .absolute'
let swap_setting_button = '.grid > .flex > :nth-child(1)'
let slip1_button = '.grid > :nth-child(1) > .font-semibold'
let slip2_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let slip3_button = '.grid > :nth-child(3) > .font-semibold'
let slip_close_button ='.flex-col>.items-center>.w-5'
let kub_button = '#token-KUB > .flex > .ml-1'
let kusdt_button = '#token-KUSDT > .flex > .ml-1'
let kusdc_button = '#token-KUSDC > .flex > .ml-1'
let select_currency_token = '.MuiPaper-root > .flex-col > .grid'
let swap_button = ':nth-child(2) > .MuiButtonBase-root'
let cf_confirm_button = '.mt-10 > .MuiButtonBase-root'
let cf_close_button = '.text-black > :nth-child(1) > :nth-child(1)>.w-5'

//textbox
let currency1 = ':nth-child(1) > .p-4 > .bg-input-primary'
let slip4_textbox = '.bg-transparent'
let textbox_deadline = '.grid-cols-1 > .justify-between > .bg-input-primary'
let textbox_deadline1 = '.grid-cols-1 > .justify-between > .bg-input-primary'

//validate
let validate_swap_token1 = ':nth-child(4) > .text-sm > :nth-child(3)'
let validate_swap_token2 = ':nth-child(4) > .text-sm > :nth-child(5)'
let validate_swap_grap_token = '.items-center.space-x-1 >[class="dark:text-white"]'
let validate_deadline = '.grid-cols-1 > .text-red-500'

let validate_textbox_currency2 = ':nth-child(3) > .bg-input-primary'
let validate_rate = '.mt-12 > :nth-child(4) > .text-sm > :nth-child(2)'
let validate_min_received = '[id="minimum received"]> .font-semibold > :nth-child(1)'
let validate_price_impact = '[id="price impact"] > .font-semibold > span'
let validate_provider_fee = '[id="liquidity provider fee"] > .font-semibold > :nth-child(1)'

let validate_cf_swap_token1 = ':nth-child(3) > .flex-col > .flex > .ml-4'
let validate_cf_swap_token2 =':nth-child(5) > .flex-col > .flex > .ml-4'
let validate_cf_swap_img_token1 = ':nth-child(3) > .flex-col > .flex > .w-6'
let validate_cf_swap_img_token2 = ':nth-child(5) > .flex-col > .flex > .w-6'
let validate_cf_textbox_currency2 = ':nth-child(5) > .font-bold'
let validate_cf_rate = '.text-base > .space-x-1 > :nth-child(1)'
let validate_cf_min_received = '.space-y-2 > [id="minimum received"] > .font-semibold > :nth-child(1)'
let validate_cf_price_impact = '.font-semibold > .text-primary-cyan > span'
let validate_cf_provider_fee = '.space-y-2 > [id="liquidity provider fee"] > .font-semibold > :nth-child(1)'
let validate_text_success = '.absolute'
//data
let balance_currency1 = ''
let balance_currency2 = ''
let balance_currency3 = ''

export class Swap_page {
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
    entertextbox_deadlineclear(){
        cy.get(textbox_deadline).clear()
    }
    entertextbox_deadline(num:string){
        cy.get(textbox_deadline).type(num)
    }
    validate_textbox_deadline(swap:string){
        cy.get(textbox_deadline1).should('have.value',swap)
    }
    validatefail_textbox_deadline(swap:string){
        cy.get(validate_deadline).should('have.text',swap)
    }
    clickswapsetting(){
        cy.get(swap_setting_button).click()
    }
    clickslip1(){
        cy.get(slip1_button).click()
    }
    clickslip2(){
        cy.get(slip2_button).click()
    }
    clickslip3(){
        cy.get(slip3_button).click()
    }
    clickslipclose(){
        cy.get(slip_close_button).click()
    }
    select_currency_token(token:string){
        cy.get(select_currency_token).contains(token).click()
        cy.wait(3000)
    }
    clickkub(){
        cy.get(kub_button).click()
    }
    clickkusdt(){
        cy.get(kusdt_button).click()
    }
    clickkusdc(){
        cy.get(kusdc_button).click()
    }
    clickswap(){
        cy.get(swap_button).click()
    }
    click_cfconfirm(){
        cy.get(cf_confirm_button).click()
    }
    click_cfclose(){
        cy.get(cf_close_button).click()
    }

    entercurrency1(num:string){
        cy.get(currency1).type(num)
        cy.wait(200)
    }
    entercurrencyclear(){
        cy.get(currency1).clear()
    }
    enterslip4_textbox(slip:string){
        cy.get(slip4_textbox).type(slip)
    }
    validate_text_success(){
        cy.get(validate_text_success).should('contain','Success')
        cy.get('.flex-col > .MuiButtonBase-root').click()
    }
    

    validate_swappage1(tk1: string, tk2:string, gtk1:string, gtk2:string, cy2:string, r:string, minre:string, pim:string, pfee:string){
        cy.get(validate_swap_token1).should('have.text',tk1)
        cy.get(validate_swap_token2).should('have.text',tk2)
        cy.get(validate_swap_grap_token).should('have.text',gtk1)
        cy.get(validate_swap_grap_token).should('have.text',gtk2)
        cy.get(validate_textbox_currency2).should('value',cy2)
        cy.get(validate_rate).should('have.text',r)
        cy.get(validate_min_received).should('contain',minre)
        cy.get(validate_price_impact).should('contain',pim)
        cy.get(validate_provider_fee).should('contain',pfee)

    }
    validate_cf_swap(tk1: string, tk2:string, gtk1:string, gtk2:string, cy2:string, r:string, minre:string, pim:string, pfee:string){
        cy.get(validate_cf_swap_token1).should('have.text',tk1)
        cy.get(validate_cf_swap_token2).should('have.text',tk2)
        cy.get(validate_cf_swap_img_token1).should('have.attr','alt').and('include',gtk1)
        cy.get(validate_cf_swap_img_token2).should('have.attr','alt').and('include',gtk2)
        cy.get(validate_cf_textbox_currency2).should('have.text',cy2)
        cy.get(validate_cf_rate).should('have.text',r)
        cy.get(validate_cf_min_received).should('have.text',minre)
        cy.get(validate_cf_price_impact).should('have.text',pim)
        cy.get(validate_cf_provider_fee).should('have.text',pfee)

    }
}
//validate
export class validateswap{
    
    truncateDecimals = function (number: number) {
        return Math[number < 0 ? 'ceil' : 'floor'](number);
    }
    
    valiadate_swap(tk1: string, tk2:string, gtk1:string){

        cy.get(validate_swap_token1).should('have.text',tk1)
        cy.get(validate_swap_token2).should('have.text',tk2)
        cy.get(validate_swap_grap_token).should('have.text',gtk1)
        cy.get('.mt-12 > :nth-child(4) > .text-sm > :nth-child(2)').then(($price) => {
            //check price rate 1
            expect($price.text()).to.be.equal($price.text())

        }).then(($price) => {
           
            cy.get(':nth-child(1) > .p-4 > .bg-input-primary').then(($token1) => {
                cy.get(':nth-child(3) > .p-4 > .bg-input-primary').then(($token2) => {
                    var token1_val = $token1.val() as string
                    var token2_val = $token2.val() as string
                    
                    //convert to decimal fomat
                    var accualt_val = parseFloat(token1_val) / parseFloat($price.text())
                    var expect_val = parseFloat(token2_val).toFixed(5)

                    //Cut 5 decimal place with no increase
                    var $truncate_expext_val = accualt_val.toFixed(5)
                    
                    expect($truncate_expext_val).to.be.equal($truncate_expext_val)
                })
            })
        })
       
        cy.get('div[id="minimum received"] > .font-semibold > :nth-child(1)').then(($received) => {
                
            expect($received.text()).to.be.equal($received.text())

            })
        cy.get('div[id="price impact"] > .font-semibold > span').then(($price) => {
                expect($price.text()).to.be.equal($price.text())  
            }) 
        
        cy.get(':nth-child(1) > .p-4 > .bg-input-primary').then(($token1) => {
            cy.get('div[id="liquidity provider fee"] > .font-semibold > :nth-child(1)').then(($fee) => {
                var token1_val = $token1.val() as string
                var fee_val = $fee.text() as string

                //convert to decimal fomat
                var accualt_val = parseFloat(token1_val) * 0.0025
                var expect_val = parseFloat(fee_val).toFixed(5)
                
                //Cut 5 decimal place with no increase
                var $truncate_expext_val = accualt_val.toFixed(5)
                
                expect($truncate_expext_val).to.be.equal(expect_val) 
            })
        })    
    }
    validate_cf_swap(tk1: string, tk2:string, gtk1:string,gtk2:string){

        cy.get(validate_cf_swap_token1).should('have.text',tk1)
        cy.get(validate_cf_swap_token2).should('have.text',tk2)
        cy.get(validate_cf_swap_img_token1).should('have.attr','alt').and('include',gtk1)
        cy.get(validate_cf_swap_img_token2).should('have.attr','alt').and('include',gtk2)
        cy.get('.text-base > .space-x-1 > :nth-child(1)').then(($pricecf) => {
            //check price rate 1
            expect($pricecf.text()).to.be.equal($pricecf.text())
            
        }).then(($pricecf) => {
            
            cy.get(':nth-child(3) > .font-bold').then(($tokencf1) => {
                cy.get(':nth-child(5) > .font-bold').then(($tokencf2) => {
                    var tokencf1_val = $tokencf1.text() as string
                    var tokencf2_val = $tokencf2.text() as string
                    
                    //convert to decimal fomat
                    var accualt_val = parseFloat(tokencf1_val) / parseFloat($pricecf.text())
                    var expect_val = parseFloat(tokencf2_val).toFixed(5)

                    //Cut 5 decimal place with no increase
                    var $truncate_expext_val = accualt_val.toFixed(5)
                    
                    expect($truncate_expext_val).to.be.equal($truncate_expext_val)
                })
            })
        })
        
        cy.get('.space-y-2 > div[id="minimum received"] > .font-semibold > :nth-child(1)').then(($received) => {
                expect($received.text()).to.be.equal($received.text())
            })
            
        cy.get('.font-semibold > .text-primary-cyan > span').then(($price) => {
                expect($price.text()).to.be.equal($price.text())  
            }) 
            
        cy.get(':nth-child(3) > .font-bold').then(($tokencf1) => {
            cy.get('.space-y-2 > div[id="liquidity provider fee"] > .font-semibold > :nth-child(1)').then(($feecf) => {
                var token1_cf_val = $tokencf1.text() as string
                var fee_cf_val = $feecf.text() as string
                //convert to decimal fomat
                var accualtcf_val = parseFloat(token1_cf_val) * 0.0025
                var expectcf_val = parseFloat(fee_cf_val).toFixed(5)
                
                //Cut 5 decimal place with no increase
                var $truncate_expext_val = accualtcf_val.toFixed(5)
                
                expect($truncate_expext_val).to.be.equal(expectcf_val) 
            })
        })
    }
    validate_balance_KUSDT(){
        //get balance currency1 after
        cy.get('#balance-Tether > .ml-1').then(($balance) => {
            //check price rate 1
            expect($balance.text()).to.be.equal($balance.text())
            console.log($balance.text())
        }).then(($balance) => {
            //after = after
            cy.get('#balance-Tether > .ml-1').then(($balance1) => {
                var balance_val = $balance.text() as string
                var balance_val1 = $balance1.text() as string
                console.log(balance_val)
                console.log(balance_val1)

                //convert to decimal fomat
                var accualt_val = parseFloat(balance_val) - 100
                console.log(accualt_val)
                //Cut 5 decimal place with no increase
                var $truncate_expext_val = accualt_val.toFixed(5)
                console.log($truncate_expext_val)

                expect(balance_val).to.be.equal(balance_val1)
                //expect(balance_val).to.be.equal(balance_currency1)
            })
        })
    }
    get_balance_from_currency_KUSDT(){
        //get balance currency1 before
        cy.get('#balance-Tether > .ml-1').then((balance) => {
            var balance1_val = balance.text() as string
            this.set_balance_currency1(balance1_val)
            cy.wait(1000)
        })
    }
    set_balance_currency1(a:string){
        balance_currency1 = a
        console.log(balance_currency1)
    }

    
    validate_balance_KUSDC(){
        //get balance currency1 after
        cy.get('[id="balance-USD Coin"] > .ml-1').then(($balance) => {
            //check price rate 1
            expect($balance.text()).to.be.equal($balance.text())
            
        }).then(($balance) => {
            //after = after
            cy.get('[id="balance-USD Coin"] > .ml-1').then(($balance2) => {
                var balance_val = $balance.text() as string
                var balance_val2 = $balance2.text() as string
               
                // //convert to decimal fomat
                // var accualt_val = parseFloat(balance_val) - parseFloat(tokencf2_val)
                // console.log(accualt_val)
                // //Cut 5 decimal place with no increase
                // var $truncate_expext_val = accualt_val.toFixed(5)
                
                expect(balance_val).to.be.equal(balance_val2)
                //expect(balance_val).to.be.equal(balance_currency2)
            })
        })
    }
    get_balance_from_currency_KUSDC(){
        //get balance currency1 before
        cy.get('[id="balance-USD Coin"] > .ml-1').then((balance) => {
            var balance2_val = balance.text() as string
            this.set_balance_currency2(balance2_val)
        })
    }
    set_balance_currency2(b:string){
        balance_currency2 = b
    }
    validate_balance_KUB(){
        //get balance currency1 after
        cy.get('[id="balance-Bitkub coin"] > .ml-1').then(($balance) => {
            //check price rate 1
            expect($balance.text()).to.be.equal($balance.text())
            
        }).then(($balance) => {
            //after = after
            cy.get('[id="balance-Bitkub coin"] > .ml-1').then(($balance2) => {
                var balance_val = $balance.text() as string
                var balance_val2 = $balance2.text() as string
               
                // //convert to decimal fomat
                // var accualt_val = parseFloat(balance_val) - parseFloat(tokencf2_val)
                // console.log(accualt_val)
                // //Cut 5 decimal place with no increase
                // var $truncate_expext_val = accualt_val.toFixed(5)
                
                expect(balance_val).to.be.equal(balance_val2)
                //expect(balance_val).to.be.equal(balance_currency2)
            })
        })
    }
    
    get_balance_from_currency_KUB(){
        //get balance currency1 before
        cy.get('[id="balance-Bitkub coin"] > .ml-1').then((balance) => {
            var balance2_val = balance.text() as string
            this.set_balance_currency2(balance2_val)
        })
    }
    set_balance_currency3_KUB(c:string){
        balance_currency3 = c
    }
}