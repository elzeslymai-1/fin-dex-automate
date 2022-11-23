///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import {Swap_page} from "../../Page Model/Swap Page/swap_page"
const swap = new Swap_page()

describe('Login Page', () => {

    beforeEach(()=>{
        cy.viewport(1920, 1080)
    })
    context('Check Login ', () => {
        //Arrange
        before(() => {
            cy.viewport(1920, 1080)
            cy.visit('https://dev.fin-dex.finstable.co.th/swap')
        })
        //ACT
        it('setup metamask', () => {
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

                cy.get('.space-x-3 > :nth-child(1) > .relative').click()
                cy.get('.metamask-gradient > .absolute').click()
                //cy.acceptMetamaskAccess()
            });
        })
    })
    context('Swap KUSDC & Token',() => {
          
        //Swap KUSDC & KUB slippage 0.1%
        it('Swap KUSDC & KUB slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.clickkusdt()//click currency 1
            swap.clickcr_kusdc()//choose KUSDC
            swap.clickkusdt()//click currency 2
            swap.clickcr_kub()//choose KUB
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUB','KUSDC','KUB','100','1','99.9','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB','100','1','99.9','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button
            
            //cy.switchToMetamaskNotification()
            //cy.rejectMetamaskPermissionToSpend()
        })
    
        //Swap KUSDC & KUB slippage 0.5%
        it('Swap KUSDC & KUB slippage 0.5%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip2()//choose 0.5% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            

            //Assert1
            swap.validate_swappage1('KUSDC','KUB','KUSDC','KUB','100','1','99.5','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB','100','1','99.5','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button
        })
    
        //Swap KUSDC & KUB slippage 1.0%
        it('Swap KUSDC & KUB slippage 1.0%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip3()//choose 1.0% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUB','KUSDC','KUB','100','1','99','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB','100','1','99','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button
        })
    
        //Swap KUSDC & KUB slippage 100 %
        it('Swap KUSDC & KUB slippage 100 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('100')//input slippage 100%
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUB','KUSDC','KUB','100','1','0','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB','100','1','0','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button 
        })
    
        //Swap KUSDC & KUB slippage 120 %
        it('Swap KUSDC & KUB slippage 120 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('120')//input slippage 100%
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUB','KUSDC','KUB','100','1','-20','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB','100','1','-20','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    
        //Swap KUSDC & KUB slippage negative %
        it('Swap KUSDC & KUB slippage negative %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('-20')//input slippage -20%
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUB','KUSDC','KUB','100','1','120','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB','100','1','120','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    
        //Swap KUSDC & KUB slippage symbol %
        it('Swap KUSDC & KUB slippage symbol %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('xx')//input slippage xx%
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUB','KUSDC','KUB','100','1','NaN','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB','100','1','NaN','< 0.01%','0.25')
            //Assert3
            //swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        //Swap KUSDC & KUSDT slippage 0.1%
        it('Swap KUSDC & KUSDT slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.clickkub()//click currency 2
            swap.clickcr_kusdt()//choose KUSDT
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','99.965834','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','99.965834','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button
            
            //cy.switchToMetamaskNotification()
            //cy.rejectMetamaskPermissionToSpend()
        })
    
        //Swap KUSDC & KUSDT slippage 0.5%
        it('Swap KUSDC & KUSDT slippage 0.5%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip2()//choose 0.5% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            

            //Assert1
            swap.validate_swappage1('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','99.56557','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','99.56557','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button 
        })
    
        //Swap KUSDC & KUSDT slippage 1.0%
        it('Swap KUSDC & KUSDT slippage 1.0%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip3()//choose 1.0% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','99.065241','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','99.065241','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
    
        //Swap KUSDC & KUSDT slippage 100 %
        it('Swap KUSDC & KUSDT slippage 100 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('100')//choose 100% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','0','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','0','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
    
        //Swap KUSDC & KUSDT slippage 120 %
        it('Swap KUSDC & KUSDT slippage 120 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('120')//choose 120% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','-20.01318','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','-20.01318','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    
        //Swap KUSDC & KUSDT slippage negative %
        it('Swap KUSDC & KUSDT slippage negative %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('-20')//choose -20% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','120.07908','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','120.07908','< 0.01%','0.25')
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    
        //Swap KUSDC & KUSDT slippage symbol %
        it('Swap KUSDC & KUSDT slippage symbol %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('@@')//choose @@% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','NaN','< 0.01%','0.25') 
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUSDT','KUSDC','KUSDT','100.0659','0.999341','NaN','< 0.01%','0.25')
            //Assert3
            //swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })

        //Swap KUSDC & KUSDC slippage 0.1
        it('Swap KUSDC & KUSDC slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.clickkusdt()//click currency 2
            swap.clickcr_kusdc()//choose KUSDC
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','99.834165','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','99.834165','< 0.01%','0.25')    
            //Assert3
            //swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button
            
            //cy.switchToMetamaskNotification()
            //cy.rejectMetamaskPermissionToSpend()
        })
    })
    context('Swap KUSDT & Token',() => {
        //Swap KUSDT & KUSDC slippage 0.1%
        it('Swap KUSDT & KUSDC slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
        
            //Assert1
            swap.validate_swappage1('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','99.834165','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','99.834165','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button
            })
        
            //Swap KUSDT & KUSDC slippage 0.5%
            it('Swap KUSDT & KUSDC slippage 0.5%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip2()//choose 0.5% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','99.434429','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','99.434429','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
        
        //Swap KUSDT & KUSDC slippage 1.0%
        it('Swap KUSDT & KUSDC slippage 1.0%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip3()//choose 1.0% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','98.934759','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','98.934759','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        
        //Swap KUSDT & KUSDC slippage 100 %
        it('Swap KUSDT & KUSDC slippage 100 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('100')//choose 100% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','0','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','0','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        
        //Swap KUSDT & KUSDC slippage 120 %
        it('Swap KUSDT & KUSDC slippage 120 %',()=>{ 
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('120')//choose 120% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','-19.98682','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','-19.98682','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        
        //Swap KUSDT & KUSDC slippage negative %
        it('Swap KUSDT & KUSDC slippage negative %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('-20')//choose -20% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','119.92092','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','119.92092','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        
        //Swap KUSDT & KUSDC slippage symbol %
        it('Swap KUSDT & KUSDC slippage symbol %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('##')//choose ##% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
            
            //Assert1
            swap.validate_swappage1('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','NaN','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUSDC','KUSDT','KUSDC','99.9341','1.000659','NaN','< 0.01%','0.25')    
            //Assert3
            //swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        
        //Swap KUSDT & KUB slippage 0.1%
        it('Swap KUSDT & KUB slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.clickkusdc()//click kusdc
            swap.clickcr_kub()//choos kub
            swap.entercurrency1('100')//input currency1 100
        
            //Assert1
            swap.validate_swappage1('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','149.853896','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','149.853896','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button
        })
            
        
        //Swap KUSDT & KUB slippage 0.5%
        it('Swap KUSDT & KUB slippage 0.5%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip2()//choose 0.5% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
        
            //Assert1
            swap.validate_swappage1('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','149.25388','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','149.25388','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button 
        })
        
        //Swap KUSDT & KUB slippage 1.0%
        it('Swap KUSDT & KUB slippage 1.0%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip3()//choose 1.0% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
        
            //Assert1
            swap.validate_swappage1('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','148.503861','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','148.503861','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        
        //Swap KUSDT & KUB slippage 100 %
        it('Swap KUSDT & KUB slippage 100 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('100')//choose 100% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
        
            //Assert1
            swap.validate_swappage1('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','0','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','0','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
        
        //Swap KUSDT & KUB slippage 120 %
        it('Swap KUSDT & KUB slippage 120 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('120')//choose 100% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
        
            //Assert1
            swap.validate_swappage1('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','-30.00078','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','-30.00078','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        
        //Swap KUSDT & KUB slippage negative %
        it('Swap KUSDT & KUB slippage negative %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('-20')//choose -20% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
        
            //Assert1
            swap.validate_swappage1('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','180.004679','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','180.004679','< 0.01%','0.25')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
        
        //Swap KUSDT & KUB slippage symbol %
        it('Swap KUSDT & KUB slippage symbol %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('%%')//choose 100% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('100')//input currency1 100
        
            //Assert1
            swap.validate_swappage1('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','NaN','< 0.01%','0.25')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDT','KUB','KUSDT','KUB','150.0039','0.666649','NaN','< 0.01%','0.25')    
            //Assert3
            //swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })

        //Swap KUSDT & KUSDT slippage 0.1 %
        it('Swap KUSDT & KUSDT slippage 0.1 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.clickkub()//click currency2
            swap.clickcr_kusdt()//choose kub
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.665982','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.665982','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    })  
    context('Swap KUB & Token',() => {
        //Swap KUB & KUSDT slippage 0.1%
        it('Swap KUB & KUSDT slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.665982','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.665982','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button 
        })
    
        //Swap KUB & KUSDT slippage 0.5%
        it('Swap KUB & KUSDT slippage 0.5%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip2()//choose 0.5% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.663315','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.663315','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
    
        //Swap KUB & KUSDT slippage 1.0%
        it('Swap KUB & KUSDT slippage 1.0%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip3()//choose 1.0% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.659982','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.659982','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    
        //Swap KUB & KUSDT slippage 100 %
        it('Swap KUB & KUSDT slippage 100 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('100')//choose 100% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
    
        //Swap KUB & KUSDT slippage 120 %
        it('Swap KUB & KUSDT slippage 120 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('120')//choose 120% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','-0.13333','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','-0.13333','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    
        //Swap KUB & KUSDT slippage negative %
        it('Swap KUB & KUSDT slippage negative %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('-20')//choose -20% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.799978','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','0.799978','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button    
        })
    
        //Swap KUB & KUSDT slippage symbol %
        it('Swap KUB & KUSDT slippage symbol %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('zz')//choose zz% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','NaN','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDT','KUB','KUSDT','0.666649','1.500039','NaN','< 0.01%','0.0025')    
            //Assert3
            //swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
    
        //Swap KUB & KUSDC slippage 0.1%
        it('Swap KUB & KUSDC slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.clickkusdt()//click currency2
            swap.clickcr_kusdc()//choose kusdc
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDC','KUB','KUSDC','1','1','0.999','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDC','KUB','KUSDC','1','1','0.999','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button 
        })
    
        //Swap KUB & KUSDC slippage 0.5%
        it('Swap KUB & KUSDC slippage 0.5%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip2()//choose 0.5% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDC','KUB','KUSDC','1','1','0.995','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDC','KUB','KUSDC','1','1','0.995','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    
        //Swap KUB & KUSDC slippage 1.0%
        it('Swap KUB & KUSDC slippage 1.0%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip3()//choose 1.0% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDC','KUB','KUSDC','1','1','0.99','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDC','KUB','KUSDC','1','1','0.99','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
    
        //Swap KUB & KUSDC slippage 100 %
        it('Swap KUB & KUSDC slippage 100 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('100')//choose 100% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDC','KUB','KUSDC','1','1','0','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDC','KUB','KUSDC','1','1','0','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button   
        })
    
        //Swap KUB & KUSDC slippage 120 %
        it('Swap KUB & KUSDC slippage 120 %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('120')//choose 120% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDC','KUB','KUSDC','1','1','-0.2','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDC','KUB','KUSDC','1','1','-0.2','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
    
        //Swap KUB & KUSDC slippage negative %
        it('Swap KUB & KUSDC slippage negative %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('-20')//choose -20% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDC','KUB','KUSDC','1','1','1.2','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDC','KUB','KUSDC','1','1','1.2','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
    
        //Swap KUB & KUSDC slippage symbol %
        it('Swap KUB & KUSDC slippage symbol %',()=>{
            swap.clickswapsetting()//click setting button
            swap.enterslip4_textbox('DD')//choose DD% 
            swap.clickslipclose()//click close button
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUB','KUSDC','KUB','KUSDC','1','1','NaN','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUB','KUSDC','KUB','KUSDC','1','1','NaN','< 0.01%','0.0025')    
            //Assert3
            //swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button  
        })
        //Swap KUB & KUB slippage 0.1%
        it('Swap KUB & KUB slippage 0.1%',()=>{
            swap.clickswapsetting()//click setting button
            swap.clickslip1()//choose 0.1% 
            swap.clickslipclose()//click close button
            swap.clickkusdc()//click currency2
            swap.clickcr_kub()//choose kub
            swap.entercurrency1('1')//input currency1 
        
            //Assert1
            swap.validate_swappage1('KUSDC','KUB','KUSDC','KUB','1','1','0.999','< 0.01%','0.0025')
            //Asssert2
            swap.clickswap()//swap button
            swap.validate_cf_swap('KUSDC','KUB','KUSDC','KUB','1','1','0.999','< 0.01%','0.0025')    
            //Assert3
            swap.click_cfconfirm()//cf confirm button
            swap.click_cfclose()//cf close button 
        })
        
    })
    afterEach('',()=>{
        cy.wait(500)
    })
})

