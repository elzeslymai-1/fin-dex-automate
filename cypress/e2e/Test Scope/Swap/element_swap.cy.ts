import {Element_swap_page} from "../../Page Model/Swap Page/element_swap_page"

const element_swap = new Element_swap_page()
describe('Login Page', () => {

    beforeEach(()=>{
        cy.viewport(1920, 1080)
    })
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://dev.fin-dex.finstable.co.th/swap')
        element_swap.connect_wallet()
        //element_swap.click_connect_wallet()
        cy.wait(700)
    })
    context('Check Element Page', () => {
        //ACT check element page
        it('check element page',()=>{
            //Assert
            element_swap.validate_text_swap('Swap')//text swap  
        })

        //ACT check element setting
        it('check element setting',()=>{
            //Assert
            element_swap.validate_logo_setting()//logo setting  
        })

        //ACT check setting button
        it('check setting button',() => {
            element_swap.clickswapsetting()//setting button
            
            //Assert
            element_swap.validate_page_setting('Setting','Slippage Tolerance','0.1%','0.5%','1.0%',' %','Tx deadling (mins)','20')//page setting
            element_swap.clickslipclose()//close button
        })

        //ACT check element history
        it('check element history',()=>{
            //Assert
            element_swap.validate_logo_history()//logo history 
        })

        //ACT check history button
        it.skip('check history button',()=>{
            //Assert
            element_swap.validate_logo_history()//logo history 
        })
  
        //ACT check element currency1
        it(`check element currency1`, () => {
            //Asset
            element_swap.validate_currency1('KUSDT','Balance','0.0')
        })

        //ACT check element change button
        it(`check element change button`, () => {
            //Asset
            element_swap.validate_change_button()
        })
        
        //ACT check element currency2
        it(`check element currency2`, () => {
            //Asset
            element_swap.validate_currency2('KUSDC','Balance','0.0')
        })

        //ACT check text price
        it(`check text price`, () => {
            //Asset
            element_swap.validate_text_price('Price :')
        })

        //ACT check text price detail
        it('check text price detail', () => {
            element_swap.validate_text_price_detail('KUSDT','per','KUSDC')
        })

        //ACT check swap button
        it('check swap button', () => {
            element_swap.validate_swap_button('Swap')
        })
    })
    context(`Check Input`, () => {
        context('Check search input currency1',() => {
            //search input number
            it('Search input number',() => {
                element_swap.clickkusdt_button()
                element_swap.entercurrency1('123456')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input decimal
            it('Search input decimal',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('123.456')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input negative number
            it('Search input negative number',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('-123456')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input charector
            it('Search input charector',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('first')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input คัพ
            it('Search input คัพ',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('คัพ')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input symbol
            it('Search input symbol',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('@#$%&')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input KUB token lowercase
            it('Search input kub lowercase',() => {
                //lowercase
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('kub')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //search input KUB Capital Letter & lowercase
            it('Search input kub capital letter & lowercase',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('Kub')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //search input KUB Capital Letter
            it('Search input kub capital letter',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KUB')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input KUSDT token lowercase
            it('Search input kusdt lowercase',() => {
                //lowercase
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('kusdt')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdt capital letter & lowercase
            it('Search input kusdt capital letter & lowercase',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KuSDt')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdt capital letter 
            it('Search input kusdt capital letter',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KUSDT')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdc token lowercase
            it('Search input kusdc lowercase',() => {
                //lowercase
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('kusdc')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdc capital letter & lowercase
            it('Search input kusdc capital letter & lowercase',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KuSDc')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdc capital letter 
            it('Search input kusdc capital letter',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KUSDC')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })    
            //Search input some cherector token
            it('Search input some cherector token',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KU')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //bookmark kub
            it('Bookmark kub',() => {
                element_swap.entercurrencyclear()
                element_swap.clickbookmark_kub()
                //Assert
                element_swap.validatebookmark()
            })
            //bookmark kusdt
            it('Bookmark kusdt',() => {
                element_swap.clickbookmark_kub()
                element_swap.clickbookmark_kusdt()
                //Assert
                element_swap.validatebookmark()
            })
            //bookmark kusdc
            it('Bookmark kusdc',() => {
                element_swap.clickbookmark_kusdt()
                element_swap.clickbookmark_kusdc()
                //Assert
                element_swap.validatebookmark()
            })
            //bookmark kub kusdt kusdc
            it('Bookmark kub kusdt kusdc',() => {
                element_swap.clickbookmark_kusdt()
                element_swap.clickbookmark_kub()
                //Assert
                element_swap.validatebookmark()
                //close
                element_swap.clickcrclose_button()
            })
        })
        context('Check search input currency2',() => {
            //search input number
            it('Search input number',() => {
                element_swap.clickkusdc_button()
                element_swap.entercurrency1('123456')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input decimal
            it('Search input decimal',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('123.456')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input negative number
            it('Search input negative number',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('-123456')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input charector
            it('Search input charector',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('first')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input คัพ
            it('Search input คัพ',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('คัพ')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input symbol
            it('Search input symbol',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('@#$%&')
                //Assert
                element_swap.validatefail_search_currency1()
            })
            //search input KUB token lowercase
            it('Search input kub lowercase',() => {
                //lowercase
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('kub')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //search input KUB Capital Letter & lowercase
            it('Search input kub capital letter & lowercase',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('Kub')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //search input KUB Capital Letter
            it('Search input kub capital letter',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KUB')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input KUSDT token lowercase
            it('Search input kusdt lowercase',() => {
                //lowercase
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('kusdt')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdt capital letter & lowercase
            it('Search input kusdt capital letter & lowercase',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KuSDt')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdt capital letter 
            it('Search input kusdt capital letter',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KUSDT')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdc token lowercase
            it('Search input kusdc lowercase',() => {
                //lowercase
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('kusdc')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdc capital letter & lowercase
            it('Search input kusdc capital letter & lowercase',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KuSDc')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //Search input kusdc capital letter 
            it('Search input kusdc capital letter',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KUSDC')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })    
            //Search input some cherector token
            it('Search input some cherector token',() => {
                element_swap.entercurrencyclear()
                element_swap.entercurrency1('KU')
                //Assert
                element_swap.validatesuccess_search_currency1()
            })
            //bookmark kub
            it('Bookmark kub',() => {
                element_swap.entercurrencyclear()
                element_swap.clickbookmark_kub()
                //Assert
                element_swap.validatebookmark()
            })
            //bookmark kusdt
            it('Bookmark kusdt',() => {
                element_swap.clickbookmark_kub()
                element_swap.clickbookmark_kusdt()
                //Assert
                element_swap.validatebookmark()
            })
            //bookmark kusdc
            it('Bookmark kusdc',() => {
                element_swap.clickbookmark_kusdt()
                element_swap.clickbookmark_kusdc()
                //Assert
                element_swap.validatebookmark()
            })
            //bookmark kub kusdt kusdc
            it('Bookmark kub kusdt kusdc',() => {
                element_swap.clickbookmark_kusdt()
                element_swap.clickbookmark_kub()
                //Assert
                element_swap.validatebookmark()
                //close
                element_swap.clickcrclose_button()
            })
        })
        context('Check input currency1',() => {
            //Check input number
            it('Check input number',() => {
                element_swap.entertextbox_currency1('1000')
                //Assert
                element_swap.validate_cf_swap()
            })
            //Check input decimal
            it('Check input decimal',() => {
                element_swap.entertextbox_currency1clear()
                element_swap.entertextbox_currency1('.456')
                //Assert
                element_swap.validate_cf_swap()
            })
            //Check input negative
            it('Check input negative',() => {
                element_swap.entertextbox_currency1clear()
                element_swap.entertextbox_currency1('-1000')
                //Assert
                element_swap.validate_cf_swap()
            })
            //Check input charector
            it('Check input charector',() => {
                element_swap.entertextbox_currency1clear()
                element_swap.entertextbox_currency1('first')
                //Assert
                cy.get('#approve-token-and-swap > :nth-child(2)').should('be.visible')
            })
            //Check input thai charector
            it('Check input thai charector',() => {
                element_swap.entertextbox_currency1clear()
                element_swap.entertextbox_currency1('คัพ')
                //Assert
                cy.get('#approve-token-and-swap > :nth-child(2)').should('be.visible')
            })
            //Check input symbol
            it('Check input symbol',() => {
                element_swap.entertextbox_currency1clear()
                element_swap.entertextbox_currency1('@@@')
                //Assert
                cy.get('#approve-token-and-swap > :nth-child(2)').should('be.visible')
            })
        })
        context('Check input currency2',() => {
            //Check input number
            it('Check input number',() => {
                element_swap.entertextbox_currency2('1000')
                //Assert
                element_swap.validate_cf_swap()
            })
            //Check input decimal
            it('Check input decimal',() => {
                element_swap.entertextbox_currency2clear()
                element_swap.entertextbox_currency2('.456')
                //Assert
                element_swap.validate_cf_swap()
            })
            //Check input negative
            it('Check input negative',() => {
                element_swap.entertextbox_currency2clear()
                element_swap.entertextbox_currency2('-1000')
                //Assert
                element_swap.validate_cf_swap()
            })
            //Check input charector
            it('Check input charector',() => {
                element_swap.entertextbox_currency2clear()
                element_swap.entertextbox_currency2('first')
                //Assert
                cy.get('#approve-token-and-swap > :nth-child(2)').should('be.visible')
            })
            //Check input thai charector
            it('Check input thai charector',() => {
                element_swap.entertextbox_currency2clear()
                element_swap.entertextbox_currency2('คัพ')
                //Assert
                cy.get('#approve-token-and-swap > :nth-child(2)').should('be.visible')
            })
            //Check input symbol
            it('Check input symbol',() => {
                element_swap.entertextbox_currency2clear()
                element_swap.entertextbox_currency2('@@@')
                //Assert
                cy.get('#approve-token-and-swap > :nth-child(2)').should('be.visible')
            })
        })
        context('Check select currency1 & currency2',() => {
            //select kusdt & kusdc
            it('select kusdt & kusdc',()=>{
                //Assert
                element_swap.validate_text_price_detail('KUSDT','per','KUSDC')
            })
            //select kusdt & kub
            it('select kusdt & kub',()=>{
                element_swap.clickkusdc_button()
                element_swap.select_currency_token('KUB')
                //Assert
                element_swap.validate_text_price_detail('KUSDT','per','KUB')
            })
            // //select kusdt & kusdt
            // it('select kusdt & kusdt',()=>{
            //     element_swap.clickkub_button()
            //     element_swap.select_currency_token('KUSDT')
            //     //Assert
            //     element_swap.validate_text_price_detail('KUB','per','KUSDT')
            // })
            // //select kub & kusdt
            // it('select kub & kusdt',()=>{
            //     //Assert
            //     element_swap.validate_text_price_detail('KUB','per','KUSDT')
            // })
            // //select kub & kusdc
            // it('select kub & kusdc',()=>{
            //     element_swap.clickkusdt_button()
            //     element_swap.select_currency_token('KUSDC')
            //     //Assert
            //     element_swap.validate_text_price_detail('KUB','per','KUSDC')
            // })
            // //select kub & kub
            // it('select kub & kub',()=>{
            //     element_swap.clickkusdc_button()
            //     element_swap.select_currency_token('KUB')
            //     //Assert
            //     element_swap.validate_text_price_detail('KUSDC','per','KUB')
            // })
            // //select kusdc & kub
            // it('select kusdc & kub',()=>{
            //     //Assert
            //     element_swap.validate_text_price_detail('KUSDC','per','KUB')
            // })
            // //select kusdc & kusdt
            // it('select kub & kub',()=>{
            //     element_swap.clickkub_button()
            //     element_swap.select_currency_token('KUSDT')
            //     //Assert
            //     element_swap.validate_text_price_detail('KUSDC','per','KUSDT')
            // })
            // //select kusdc & kusdc
            // it('select kusdc & kusdc',()=>{
            //     element_swap.clickkusdt_button()
            //     element_swap.select_currency_token('KUSDC')
            //     //Assert
            //     element_swap.validate_text_price_detail('KUSDT','per','KUSDC')
            // })
            // afterEach('',()=>{
            //     cy.wait(500)
            // })
        })
    })      
    context.skip('Check Element Graph Page',() => {
        //ACT check token graph
        it(`check graph currency`, () => {
        
            element_swap.validate_graph_logo_currency1('usdt')
            element_swap.validate_graph_currency1('KUSDT/KUSDC')
            element_swap.validate_graph_logo_currency2('usdc')
            element_swap.validate_graph_currency2('KUSDT/KUSDC')
        })
        //ACT check tranframe button
        it('check tranframe button',() => {   
            element_swap.validate_tranframe1('1W')
            element_swap.validate_tranframe2('1M')
            element_swap.validate_tranframe3('1Y')
        }) 
        //check graph price currency
        it('check graph price currency',() => {
            element_swap.validate_graph_price()
            element_swap.validate_graph_currency2('KUSDT/KUSDC')
        })
        // //check graph button
        // it('check graph button',() => { 
        //     element_swap.validate_graph_line()
        //     element_swap.validate_graph_chart()   
        // })
    })
    after('Disconnect metamask', () => {
        cy.disconnectMetamaskWalletFromAllDapps()
        cy.visit('https://dev.fin-dex.finstable.co.th/swap')
    })
})
