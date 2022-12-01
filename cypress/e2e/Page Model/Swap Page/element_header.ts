let account_button = '.wallet-address-gradient > .flex > .font-semibold'
let account_metamask = '.mt-3 > .flex >'
let account_history = ':nth-child(2) > .flex >span'
let account_setting = ':nth-child(4) > .flex > span'
let account_disconnect = '.pt-4 > .flex > span'
let account_close = '.w-5>path'
let network_button ='.bg-gray-network > .flex > .font-semibold'
let network_text_select = '.text-xl'
let network_text_network = '.grid > .justify-between>.space-x-6>'
let network_text_correct = '.grid > .justify-between>.w-8'
let network_close = '.bg-white > :nth-child(1) > .w-5'
let header_text_findex = ':nth-child(1) > picture > .h-14'
let header_text_findex1 = ':nth-child(1) > picture > .h-14'
let header_text_liquidity = '.flex > .border-transparent'
let header_text_swap = '.flex > .border-text-active'
let language_button = 'button[id="headlessui-menu-button-:r1:"]>.hidden'
let language_logo = '.hidden>span>img'
let language_eng = 'a[id="headlessui-menu-item-:r9:"]'
let language_thai = 'a[id="headlessui-menu-item-:ra:"]'
let language_action_thai = 'button[id="headlessui-menu-button-:r1:"]>.hidden'
let language_action_text1 = '#swap-page > .text-2xl'
let language_action_text2 = '.text-center'
let language_action_text3 = '#approve-token-and-swap > :nth-child(2)'
let mode_window_button = '[class="MuiFormGroup-root css-1h7anqn"]'
let launch_App_button = ':nth-child(2) > .max-w-5xl > .flex > :nth-child(3) > .MuiButtonBase-root'


export class element_header {
    clickaccount_button(){
        cy.get(account_button).click()
    }
    clickaccount_close(){
        cy.get(account_close).eq(3).click()
    }
    clicknetwork_button(){
        cy.get(network_button).click()
    }
    clicknetwork_close(){
        cy.get(network_close).click()
    }
    clicklanguage_button(){
        cy.get(language_button).click()
    }
    clicklanguage_action_eng(){
        cy.get(language_action_thai).click()
        cy.get('.absolute>.flex>').eq(0).click()
    }
    clicklanguage_action_thai(){
        cy.get(language_action_thai).click()
        cy.get('.absolute>.flex>').eq(1).click()
    }
    clickheader_text_findex(){
        cy.get(header_text_findex1).dblclick()
    }
    clickheader_text_swap(){
        cy.get(header_text_swap).click()
    }
    clickheader_text_liquidity(){
        cy.get(header_text_liquidity).click()
    }
    clickmode_window_button(){
        cy.get(mode_window_button).dblclick()
    }
    validate_header_text_findex(){
        cy.get(header_text_findex).should('have.attr','src')
        .and('include','/assets/logo/fin-dex-light-logo.png')
    }
    validate_header_text_swap(swap:string){
        cy.get(header_text_swap).should('have.text',swap).and('have.attr','href')
        .and('include','swap')
    }
    validate_header_text_liquidity(liquidity:string){
        cy.get(header_text_liquidity).should('have.text',liquidity).and('have.attr','href')
        .and('include','liquidity')
    }
    validateaccount_filter_element(meta: string,history:string,setting:string,disconnect:string) {
        cy.get(account_metamask).should('contain','0x05008d7d4bdb7...f774ff4eb4e4a06').and('have.length',(3))
        .and('have.attr','src',).and('include',meta)//logo and account  
        cy.get('.w-5 > path').eq(4).should('have.length',(1))// copy button
        cy.get(account_history).should('have.text',history).and('have.length',(1)) // History button
        cy.get(account_setting ).should('have.text',setting).and('have.length',(1))// Setting button
        cy.get(account_disconnect).should('have.text',disconnect).and('have.length',(1))//Disconnect button 
    }     

    validatenetwork_filter_element(select:string,network:string,logo:string,ok:string){
        cy.get(network_text_select).should('have.text', select)//text select network
        cy.get(network_text_network).should('have.text',network)
        .and('have.length',(2)).and('have.attr','src').and('include',logo)//logo bkc and network
        cy.get(network_text_correct).and('have.attr','aria-hidden').and('include',ok)//logo correct 
    }   

    validatelanguage_filter_element(language:string,eng:string,thai:string){
        cy.get(language_logo).should('have.attr','src').and('include','language')//logo language
        cy.get(language_eng).should('have.text',eng)//text english
        cy.get(language_thai).should('have.text',thai)//text thai
    }
    
    validatemode_window(){
        cy.get(mode_window_button).should('have.length',(1))
    }

    validateaction_language(language:string,language1:string,language2:string){
        cy.get(language_action_text1).should('contain',language)
        cy.get(language_action_text2).should('contain',language1)
        cy.get(language_action_text3).should('contain',language2)
    }
   
}



