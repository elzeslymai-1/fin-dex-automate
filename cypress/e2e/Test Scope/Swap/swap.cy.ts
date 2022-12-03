///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import {Swap_page,validateswap} from "../../Page Model/Swap Page/swap_page"
const swap = new Swap_page()
const validate_swap = new validateswap()
let base_url = 'https://dev.fin-dex.finstable.co.th/swap'
describe('Login Page', () => {

    beforeEach(()=>{
        cy.viewport(1920, 1080)
    })
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        swap.connect_wallet()
        //swap.click_connect_wallet()
        cy.wait(700)
    })
    context('Check input slippage',() => {
        //check input 0 deadline
        it('Check input 0 deadline',() => {
            swap.clickswapsetting()
            swap.entertextbox_deadlineclear()
            swap.entertextbox_deadline('0')
            //assert
            swap.validatefail_textbox_deadline('The minimum tx deadline is 20 mins')
        })
        //Check input number deadline
        it('Check input number deadline',() => {
            swap.entertextbox_deadlineclear()
            swap.entertextbox_deadline('30')
            //assert
            swap.validate_textbox_deadline('30')
        })
        //Check input negative deadline
        it('Check input negative deadline',() => {
            swap.entertextbox_deadlineclear()
            swap.entertextbox_deadline('-50')
            //assert
            swap.validate_textbox_deadline('NaN')
        })
        //Check input decimal deadline
        it('Check input decimal deadline',() => {
            swap.entertextbox_deadlineclear()
            swap.entertextbox_deadline('30.50')
            //assert
            swap.validate_textbox_deadline('3050')
        })
        //Check input charector deadline
        it('Check input charector deadline',() => {
            swap.entertextbox_deadlineclear()
            swap.entertextbox_deadline('xx')
            //assert
            swap.validate_textbox_deadline('NaN')
        })
        //Check input thai charector deadline
        it('Check input thai charector deadline',() => {
            swap.entertextbox_deadlineclear()
            swap.entertextbox_deadline('กก')
            //assert
            swap.validate_textbox_deadline('NaN')
        })
        //Check input symbol deadline'
        it('Check input symbol deadline',() => {
            swap.entertextbox_deadlineclear()
            swap.entertextbox_deadline('#@')
            //assert
            swap.validate_textbox_deadline('NaN')
            //close
            swap.clickslipclose()
        })
    })

    context('validate swap',() => {
        beforeEach(()=>{
            cy.viewport(1920, 1080)
            cy.visit('https://dev.fin-dex.finstable.co.th/swap')
            swap.click_connect_wallet()
        })
        //validate swap slippage 0.1%
        it('validate swap slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            cy.wait(1000)
            swap.entercurrency1('100')//input currency1 100
            cy.wait(1000)

            //Assert1
            validate_swap.valiadate_swap('KUSDT','KUSDC','KUSDT/KUSDC') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC')  
            swap.click_cfconfirm()//cf confirm button
            
            //Assert3
            cy.wait(500)
            cy.get('#swal2-title').should('have.text','INSUFFICIENT OUTPUT AMOUNT')
        })

        //validate swap slippage 0.5%
        it('validate swap slippage 0.5%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip2()//choose 0.5% 
            swap.clickslipclose()//click close button
            cy.wait(1000)
            swap.entercurrency1('20')//input currency1 
            cy.wait(2000)

            //Assert1
            validate_swap.valiadate_swap('KUSDT','KUSDC','KUSDT/KUSDC') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC')  
            swap.click_cfconfirm()//cf confirm button
            cy.confirmMetamaskTransaction({gasFee: 0.001019, gasLimit: 123321})
            cy.wait(25000)

            //Assert3
            swap.validate_text_success()
        })

        //validate swap slippage 1.0%
        it('validate swap slippage 1.0%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip3()//choose 1.0% 
            swap.clickslipclose()//click close button
            cy.wait(1000)
            swap.entercurrency1('20')//input currency1 
            
            //Assert1
            validate_swap.valiadate_swap('KUSDT','KUSDC','KUSDT/KUSDC') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC')  
            swap.click_cfconfirm()//cf confirm button
            cy.confirmMetamaskTransaction({gasFee: 0.001019, gasLimit: 123321})
            cy.wait(18000)

            //Assert3
            swap.validate_text_success()
        })

        //validate swap slippage 100%
        it('validate swap slippage 100%',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('100')
            swap.clickslipclose()//click close button
            cy.wait(1000)
            swap.entercurrency1('20')//input currency1 
            
            //Assert1
            validate_swap.valiadate_swap('KUSDT','KUSDC','KUSDT/KUSDC') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC')  
            swap.click_cfconfirm()//cf confirm button
            cy.confirmMetamaskTransaction({gasFee: 0.001019, gasLimit: 123321})
            cy.wait(25000)

            //Assert3
            swap.validate_text_success()

        })
        
        //validate swap slippage 120%
        it('validate swap slippage 120%',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('120')
            swap.clickslipclose()//click close button
            cy.wait(1000)
            swap.entercurrency1('20')//input currency1 
            
            //Assert1
            validate_swap.valiadate_swap('KUSDT','KUSDC','KUSDT/KUSDC') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC')  
            swap.click_cfconfirm()//cf confirm button

            //Assert3
            cy.wait(500)
            cy.get('#swal2-title').should('contain','INVALID_ARGUMENT')
        })

        //validate swap slippage -20%
        it('validate swap slippage -20%',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('-20')
            swap.clickslipclose()//click close button
            cy.wait(1000)
            swap.entercurrency1('20')//input currency1 
            
            //Assert1
            validate_swap.valiadate_swap('KUSDT','KUSDC','KUSDT/KUSDC') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC')  
            swap.click_cfconfirm()//cf confirm button

            //Assert3
            cy.wait(500)
            cy.get('#swal2-title').should('have.text','INSUFFICIENT OUTPUT AMOUNT')
        })

        //validate swap reject 
        it('validate swap reject',()=>{
            swap.clickswapsetting()//click setting button
            //swap.clickslip1()//choose 0.1% 
            swap.enterslip4_textbox('90')
            swap.clickslipclose()//click close button
            cy.wait(1000)
            swap.entercurrency1('100')//input currency1 100 
            swap.clickswap()//swap button
            swap.click_cfconfirm()//cf confirm button
            cy.rejectMetamaskTransaction()
        
            //Assert
            cy.get('#swal2-title').should('contain','user rejected transaction')
            
        })
    })
    context('Swap Token & Token',() => {
        beforeEach(()=>{
            cy.viewport(1920, 1080)
            cy.visit('https://dev.fin-dex.finstable.co.th/swap')
            swap.click_connect_wallet()
        })
        //validate value swap KUSDT & KUSDC
        it('validate value swap KUSDT & KUSDC',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('90')
            swap.clickslipclose()//click close button
            cy.wait(1000)
            swap.entercurrency1('100')//input currency1 100
            cy.wait(1000)

            //Assert1
            validate_swap.get_balance_from_currency_KUSDT()
            validate_swap.get_balance_from_currency_KUSDC()
            validate_swap.valiadate_swap('KUSDT','KUSDC','KUSDT/KUSDC') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC')  
            swap.click_cfconfirm()//cf confirm button
            cy.confirmMetamaskTransaction({gasFee: 0.001019, gasLimit: 123321})
            cy.wait(25000)

            //Assert3
            swap.validate_text_success()
            
            //Assert4
            validate_swap.validate_balance_KUSDT()
            validate_swap.validate_balance_KUSDC()
        })

        //validate value swap KUSDT & KUB
        it('validate value swap KUSDT & KUB',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('90')
            swap.clickslipclose()//click close button
            swap.clickkusdc()
            swap.select_currency_token('KUB')
            swap.entercurrency1('40')//input currency1 100
            cy.wait(1000)

            //Assert1
            validate_swap.get_balance_from_currency_KUSDT()
            validate_swap.get_balance_from_currency_KUB()
            validate_swap.valiadate_swap('KUSDT','KUB','KUSDT/KUB') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDT','KUB','KUSDT','KUB')  
            swap.click_cfconfirm()//cf confirm button
            cy.confirmMetamaskTransaction({gasFee: 0.001019, gasLimit: 123321})
            cy.wait(22000)

            //Assert3
            swap.validate_text_success()

            //Assert4
            validate_swap.validate_balance_KUSDT()
            validate_swap.validate_balance_KUB()
        })

        //validate value swap KUSDT & KUSDT
        it('validate value swap KUSDT & KUSDT',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('90')
            swap.clickslipclose()//click close button
            swap.clickkusdc()
            swap.select_currency_token('KUSDT')
            swap.entercurrency1('10')//input currency1 
            cy.wait(1000)

            //Assert1
            validate_swap.get_balance_from_currency_KUSDC()
            validate_swap.get_balance_from_currency_KUSDT()
            validate_swap.valiadate_swap('KUSDC','KUSDT','KUSDC/KUSDT') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDC','KUSDT','KUSDC','KUSDT')  
            swap.click_cfconfirm()//cf confirm button
            cy.confirmMetamaskTransaction({gasFee: 0.001019, gasLimit: 123321})
            cy.wait(25000)

            //Assert3
            swap.validate_text_success()

            //Assert4
            validate_swap.validate_balance_KUSDC()
            validate_swap.validate_balance_KUSDT()
        })

        //validate value swap KUSDC & KUB
        it('validate value swap KUSDC & KUB',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('90')
            swap.clickslipclose()//click close button
            swap.clickkusdc()
            swap.select_currency_token('KUSDT')
            swap.clickkusdt()
            swap.select_currency_token('KUB')
            swap.entercurrency1('40')//input currency1 
            
            
            //Assert1
            validate_swap.get_balance_from_currency_KUSDC()
            validate_swap.get_balance_from_currency_KUB()
            validate_swap.valiadate_swap('KUSDC','KUB','KUSDC/KUB') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB')  
            swap.click_cfconfirm()//cf confirm button
            cy.confirmMetamaskTransaction({gasFee: 0.001019, gasLimit: 123321})
            cy.wait(25000)

            //Assert3
            swap.validate_text_success()

            //Assert4
            validate_swap.validate_balance_KUSDC()
            validate_swap.validate_balance_KUB()
        })

        //validate value swap KUB & KUSDC 
        it.skip('validate value swap KUB & KUSDC',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('90')
            swap.clickslipclose()//click close button
            swap.clickkusdt()
            swap.select_currency_token('KUB')
            swap.entercurrency1('1')//input currency1 
            
            
            // //Assert1
            validate_swap.get_balance_from_currency_KUB()
            validate_swap.get_balance_from_currency_KUSDC()
            validate_swap.valiadate_swap('KUB','KUSDC','KUB/KUSDC') 
            swap.clickswap()//swap button
            
            //Assert2
            validate_swap.validate_cf_swap('KUB','KUSDC','KUB','KUSDC')  
            swap.click_cfconfirm()//cf confirm button
            cy.confirmMetamaskTransaction({gasFee: 0.001019, gasLimit: 123321})
            //cy.wait(22000)

            //Assert3
            swap.validate_text_success()

            //Assert4
            validate_swap.validate_balance_KUB()
            validate_swap.validate_balance_KUSDC()
        })        
    })
    after('Disconnect metamask', () => {
        cy.disconnectMetamaskWalletFromAllDapps()
        cy.visit('https://dev.fin-dex.finstable.co.th/swap')
    })
})

