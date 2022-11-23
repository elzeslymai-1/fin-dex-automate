//button
let swap_setting_button = '.grid > .flex > :nth-child(1)'
let slip1_button = '.grid > :nth-child(1) > .font-semibold'
let slip2_button = '.grid-cols-1 > .flex-col > .grid > :nth-child(2) > .font-semibold'
let slip3_button = '.grid > :nth-child(3) > .font-semibold'
let slip_close_button ='.flex-col>.items-center>.w-5'
let kub_button = '#token-KUB > .flex > .ml-1'
let kusdt_button = '#token-KUSDT > .flex > .ml-1'
let kusdc_button = '#token-KUSDC > .flex > .ml-1'
let currency_kub_button = '.grid > :nth-child(1) > .flex > .ml-4'
let currency_kusdt_button = ':nth-child(2) > .flex > .ml-4'
let currency_kusdc_button = ':nth-child(3) > .flex > .ml-4'
let swap_button = ':nth-child(2) > .MuiButtonBase-root'
let cf_confirm_button = '.mt-10 > .MuiButtonBase-root > .font-bold'
let cf_close_button = '.text-black > :nth-child(1) > :nth-child(1)>.w-5'

//textbox
let currency1 = ':nth-child(1) > .bg-input-primary'
let slip4_textbox = '.bg-transparent'

//validate
let validate_swap_token1 = '.mt-4 > .items-center > .text-base > :nth-child(1)'
let validate_swap_token2 = '.mt-4 > .items-center > .text-base > :nth-child(3)'
let validate_swap_grap_token1 = ':nth-child(4) > .text-sm > :nth-child(3)'
let validate_swap_grap_token2 = ':nth-child(4) > .text-sm > :nth-child(5)'
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

export class Swap_page {
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
    clickkub(){
        cy.get(kub_button).click()
    }
    clickkusdt(){
        cy.get(kusdt_button).click()
    }
    clickkusdc(){
        cy.get(kusdc_button).click()
    }
    clickcr_kub(){
        cy.get(currency_kub_button).click()
        cy.wait(1500)
    }
    clickcr_kusdt(){
        cy.get(currency_kusdt_button).click()
        cy.wait(1500)
    }
    clickcr_kusdc(){
        cy.get(currency_kusdc_button).click()
        cy.wait(1500)
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
        cy.wait(2000)
    }
    entercurrencyclear(){
        cy.get(currency1).click()
    }
    enterslip4_textbox(slip:string){
        cy.get(slip4_textbox).type(slip)
    }

    validate_swappage1(tk1: string, tk2:string, gtk1:string, gtk2:string, cy2:string, r:string, minre:string, pim:string, pfee:string){
        cy.get(validate_swap_token1).should('have.text',tk1)
        cy.get(validate_swap_token2).should('have.text',tk2)
        cy.get(validate_swap_grap_token1).should('have.text',gtk1)
        cy.get(validate_swap_grap_token2).should('have.text',gtk2)
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