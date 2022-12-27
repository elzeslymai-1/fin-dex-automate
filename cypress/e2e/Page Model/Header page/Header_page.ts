let account_button = '.wallet-address-gradient > .flex > .font-semibold'
let connect_wallet_button = '.space-x-3 > :nth-child(1) > .relative'
let metamask_button = '.metamask-gradient > .absolute'
let account_metamask = '.mt-3 > .flex >'
let account_history = ':nth-child(2) > .flex >span'
let account_setting = ':nth-child(4) > .flex > span'
let account_disconnect = '.pt-4 > .flex > span'
let account_close = '.MuiPaper-root > .text-text-base > .flex > svg.w-5'
let network_button = '.bg-gray-network > .flex > .font-semibold'
let network_text_select = '.text-xl'
let network_text_network = '.grid > .justify-between>.space-x-6>'
let network_text_correct = '.grid > .justify-between>.w-8'
let network_close = '.bg-white > :nth-child(1) > .w-5'
let header_text_findex = ':nth-child(1) > picture > .h-14'
let header_text_findex1 = ':nth-child(1) > picture > .h-14'
let header_text_liquidity = '.flex > .justify-center > .items-center'
let header_text_swap = '.flex > .justify-center > .items-center'
let language_button = 'button[id="headlessui-menu-button-:r1:"]>.hidden'
let language_logo = '.hidden>span>img'
let language_eng = 'a[id="headlessui-menu-item-:r9:"]'
let language_thai = 'a[id="headlessui-menu-item-:ra:"]'
let language_action_thai = 'button[id="headlessui-menu-button-:r1:"]'
let language_action_text1 = '#swap-page > .text-2xl'
let language_action_text2 = '.text-center'
let language_action_text3 = '#approve-token-and-swap > :nth-child(2)'
let mode_window_button = '[class="MuiFormGroup-root css-1h7anqn"]'
let launch_App_button = ':nth-child(2) > .max-w-5xl > .flex > :nth-child(3) > .MuiButtonBase-root'
let setting_button = '.grid-cols-3 > .flex > :nth-child(1)'
let close_setting_button = '.px-4 > .items-center > .w-5' 
let addLiquidity_button = '.MuiButtonBase-root > svg.w-5'
let select_token__button = '[id^="token-"] > .flex'
let select_token_dialog_close_button = '.flex-col > .items-center > .w-5'
let find_liquidity_button = '.mt-2 > .MuiButtonBase-root'

//Thai language => Liquidity page
let liquidity_th_header_swap_menu = '.border-transparent'
let liquidity_th_header_liquidity_menu = '.text-text-active'
let liquidity_th_header_select_network = '.text-xl'
let liquidity_th_header_account_menu = '.text-text-base > .flex > .text-lg'
let liquidity_th_header_history_menu = ':nth-child(2) > .flex > span'
let liquidity_th_header_setting_menu = ':nth-child(4) > .flex > span'
let liquidity_th_header_disconnect_menu = '.pt-4 > .flex > span'
let liquidity_th_liquidity_name = '.grid > .text-center'
let liquidity_th_setting_dialog_setting_name = '.text-xl'
let liquidity_th_setting_dialog_slippage_name = '.grid-cols-1 > .flex-col > :nth-child(1)'
let liquidity_th_setting_dialog_deadline_name = '.grid-cols-1 > .justify-between > div'
let liquidity_th_find_liquidity_button = '.mt-2 > .MuiButtonBase-root'
let liquidity_th_add_liquidity_button = '.MuiButtonBase-root > span.text-lg'

//Thai language => Add Liquidity page
let add_liquidity_th_header_swap_menu = '.border-transparent'
let add_liquidity_th_header_liquidity_menu = '.text-text-active'
let add_liquidity_th_header_select_network = '.text-xl'
let add_liquidity_th_header_account_menu = '.text-text-base > .flex > .text-lg'
let add_liquidity_th_header_history_menu = ':nth-child(2) > .flex > span'
let add_liquidity_th_header_setting_menu = ':nth-child(4) > .flex > span'
let add_liquidity_th_header_disconnect_menu = '.pt-4 > .flex > span'
let add_liquidity_th_setting_dialog_setting_name = '.text-xl'
let add_liquidity_th_setting_dialog_slippage_name = '.grid-cols-1 > .flex-col > :nth-child(1)'
let add_liquidity_th_setting_dialog_deadline_name = '.grid-cols-1 > .justify-between > div'
let add_liquidity_th_add_liquidity_page_name = '.text-2xl'
let add_liquidity_th_add_liquidity_name = '.text-center'
let add_liquidity_th_select_token_dialog_name = '.text-xl'
let add_liquidity_th_input_token_placeholder = '.border-none'
let add_liquidity_th_no_bookmark = '.mt-6 > .flex'
let add_liquidity_th_balance_token1 = '[id^="balance-"] > .ml-1'
let add_liquidity_th_balance_token2 = '[id^="balance-"] > .ml-1'
let add_liquidity_th_price_rate_and_sharepool = '.text-lg.font-semibold'
let add_liquidity_th_price_rate_name1 = '[class^=max-w-] > .space-x-2'
let add_liquidity_th_price_rate_name2 = '[class^=max-w-] > .space-x-2'
let add_liquidity_th_share_pool = '.justify-between > .text-lg'
let add_liquidity_th_supply = '#approve-token-and-supply > .space-y-3 > .MuiButtonBase-root'

// confirm add liquidity dialog
let confirm_liquidity_dialog_th_confirm_name = '.MuiPaper-root > .flex-col > div > .items-center > .text-xl'
let confirm_liquidity_dialog_th_price_rate_and_sharepool = '.mt-8'
let confirm_liquidity_dialog_th_price_rate_name1 = ':nth-child(1) > .flex-col > :nth-child(1) > .space-x-1 > :nth-child(2)'
let confirm_liquidity_dialog_th_price_rate_name2 = ':nth-child(2) > .space-x-1 > :nth-child(2)'
let confirm_liquidity_dialog_th_sharepool = '.MuiPaper-root > .flex-col > div > .space-y-2 > .items-center > .space-x-1.text-xl'
let confirm_liquidity_dialog_th_confirm_button = '.mt-10 > .MuiButtonBase-root'

//wait confirm transection dialog & success
let wait_confirm_dialog_th_downloading = '.text-black > .flex > .text-base' //กำลังโหลด...
let wait_confirm_dialog_th_wait_confirmation = '.text-xl' //รอการยืนยัน
let wait_confirm_dialog_th_wait_transection = '.text-black > .flex > .text-lg' //โปรดรอสักครู่ ธุรกรรมของคุณกำลังดำเนินการ...

let success_dialog_th_success = '.absolute' //สำเร็จ
let success_dialog_th_transection = '.flex-col > .cursor-pointer' //ดูใน Block explorer
let success_dialog_th_transection_success = '.flex-col > .text-base' //ธุรกรรมเสร็จสิ้น
let success_dialog_th_close_button = '.flex-col > .MuiButtonBase-root > .font-bold' //ปิด

//Thai language => Find Liquidity page
let find_liquidity_th_header_swap_menu = '.border-transparent'
let find_liquidity_th_header_liquidity_menu = '.text-text-active'
let find_liquidity_th_header_select_network = '.text-xl'
let find_liquidity_th_header_account_menu = '.text-text-base > .flex > .text-lg'
let find_liquidity_th_header_history_menu = '.text-text-base > .grid-cols-1 > .py-4 > .items-center  > span'
let find_liquidity_th_header_setting_menu = '.text-text-base > .grid-cols-1 > .py-4 > .items-center  > span'
let find_liquidity_th_header_disconnect_menu = '.pt-4 > .flex > span'
let find_liquidity_th_setting_dialog_setting_name = '.text-xl'
let find_liquidity_th_setting_dialog_slippage_name = '.grid-cols-1 > .flex-col > :nth-child(1)'
let find_liquidity_th_setting_dialog_deadline_name = '.grid-cols-1 > .justify-between > div'
let find_liquidity_th_find_liquidity_page_name = '.text-2xl'
let find_liquidity_th_find_liquidity_name = '.grid > .text-center'
let find_liquidity_th_select_token1_button = '.bg-gray-100 > :nth-child(1)'
let find_liquidity_th_select_token2_button = '.bg-gray-100 > :nth-child(2)'
let find_liquidity_th_select_token_to_find_liquidty_wording = '.bg-gray-100'
let find_liquidity_th_select_token_dialog_name = '.text-xl'
let find_liquidity_th_input_token_placeholder = '.border-none'
let find_liquidity_th_no_bookmark = '.mt-6 > .flex'

export class Header {

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
            cy.wait(1000)
        });
    }

    click_connect_wallet() {
        cy.get(connect_wallet_button).click()
        cy.get(metamask_button).click()
    }
    clickaccount_button() {
        cy.get(account_button).click()
    }
    clickaccount_close() {
        cy.get(account_close).click()
    }
    clicknetwork_button() {
        cy.get(network_button).click()
    }
    clicknetwork_close() {
        cy.get(network_close).click()
    }
    clicklanguage_button() {
        cy.get(language_button).click()
    }
    clicklanguage_action_eng() {
        cy.get(language_action_thai).click()
        cy.get('.absolute>.flex>').eq(0).click()
    }
    clicklanguage_action_thai() {
        cy.get(language_action_thai).click()
        cy.get('.absolute>.flex>').eq(1).click()
    }
    clickheader_text_findex() {
        cy.get(header_text_findex1).dblclick()
    }
    clickheader_text_swap() {
        cy.get(header_text_swap).eq(0).click()
    }
    clickheader_text_liquidity() {
        cy.get(header_text_liquidity).eq(1).click()
    }
    clickmode_window_button() {
        cy.get(mode_window_button).dblclick()
    }

    click_setting_button(){
        cy.get(setting_button).click()
    }

    click_setting_close_button(){
        cy.get(close_setting_button).click()
    }

    click_add_liquidity_btn() {
        cy.get(addLiquidity_button).click()
    }

    click_select_token_1_dialog_btn() {
        cy.get(select_token__button).eq(0).click()
    }

    click_close_select_token_dialog_btn() {
        cy.get(select_token_dialog_close_button).click()
    }

    click_find_liquidity_btn() {
        cy.get(find_liquidity_button).click()
    }

    validate_header_text_findex() {
        cy.get(header_text_findex).should('have.attr', 'src')
            .and('include', '/assets/logo/fin-dex-light-logo.png')
    }
    validate_header_text_swap(swap: string) {
        cy.get(header_text_swap).eq(0).should('have.text', swap).and('have.attr', 'href')
            .and('include', 'swap')
    }
    validate_header_text_liquidity(liquidity: string) {
        cy.get(header_text_liquidity).eq(1).should('have.text', liquidity).and('have.attr', 'href')
            .and('include', 'liquidity')
    }
    validateaccount_filter_element(meta: string, history: string, setting: string, disconnect: string) {
        cy.get(account_metamask).should('contain', '0x').and('have.length', (3))
            .and('have.attr', 'src',).and('include', meta)//logo and account  
        cy.get('.w-5 > path').eq(4).should('have.length', (1))// copy button
        cy.get(account_history).should('have.text', history).and('have.length', (1)) // History button
        cy.get(account_setting).should('have.text', setting).and('have.length', (1))// Setting button
        cy.get(account_disconnect).should('have.text', disconnect).and('have.length', (1))//Disconnect button 
    }

    validatenetwork_filter_element(select: string, network: string, logo: string, ok: string) {
        cy.get(network_text_select).should('have.text', select)//text select network
        cy.get(network_text_network).should('have.text', network)
            .and('have.length', (2)).and('have.attr', 'src').and('include', logo)//logo bkc and network
        cy.get(network_text_correct).and('have.attr', 'aria-hidden').and('include', ok)//logo correct 
    }

    validatelanguage_filter_element(language: string, eng: string, thai: string) {
        cy.get(language_logo).should('have.attr', 'src').and('include', 'language')//logo language
        cy.get(language_eng).should('have.text', eng)//text english
        cy.get(language_thai).should('have.text', thai)//text thai
    }

    validatemode_window() {
        cy.get(mode_window_button).should('have.length', (1))
    }

    validateaction_language(language: string, language1: string, language2: string) {
        cy.get(language_action_text1).should('contain', language)
        cy.get(language_action_text2).should('contain', language1)
        cy.get(language_action_text3).should('contain', language2)
    }

    validate_thai_language_at_liquiditypage(){
        //check header swap menu
        cy.get(liquidity_th_header_swap_menu).should('have.text', 'แลกเปลี่ยน')

        //check header liquidity menu
        cy.get(liquidity_th_header_liquidity_menu).should('have.text', 'สภาพคล่อง')

        //check select network dialog
        this.clicknetwork_button()
        cy.wait(200)
        cy.get(liquidity_th_header_select_network).should('have.text', 'เลือกเน็ตเวิร์ค')
        this.clicknetwork_close()
        cy.wait(200)

        //check header account menu dropdown
        this.clickaccount_button()
        cy.wait(200)
        cy.get(liquidity_th_header_account_menu).should('have.text', 'บัญชี')
        cy.get(liquidity_th_header_history_menu).should('have.text', 'ประวัติ')
        cy.get(liquidity_th_header_setting_menu).should('have.text', 'ตั้งค่า')
        cy.get(liquidity_th_header_disconnect_menu).should('have.text', 'ออกจากระบบ')
        this.clickaccount_close()
        cy.wait(200)

        //check liquidity page name
        cy.get(liquidity_th_liquidity_name).should('have.text', 'สภาพคล่องของคุณ')

        //check setting dialog setting name
        this.click_setting_button()
        cy.wait(200)
        cy.get(liquidity_th_setting_dialog_setting_name).should('have.text', 'ตั้งค่า')
        cy.get(liquidity_th_setting_dialog_slippage_name).should('have.text', 'ความคลาดเคลื่อนระหว่างราคา')
        cy.get(liquidity_th_setting_dialog_deadline_name).should('have.text', 'เวลาในการทำธุรกรรม (นาที)')
        this.click_setting_close_button()
        cy.wait(200)

        //check find liquidity button
        cy.get(liquidity_th_find_liquidity_button).should('have.text', 'ค้นหาโทเค็น LP อื่น ๆ')

        //check add liquidity_button
        cy.get(liquidity_th_add_liquidity_button).should('have.text', 'เพิ่มสภาพคล่อง')

    }

    validate_thai_language_at_add_liquiditypage(){
        //check header swap menu
        cy.get(add_liquidity_th_header_swap_menu).should('have.text', 'แลกเปลี่ยน')

        //check header liquidity menu
        cy.get(add_liquidity_th_header_liquidity_menu).should('have.text', 'สภาพคล่อง')

        //check select network dialog
        this.clicknetwork_button()
        cy.wait(200)
        cy.get(add_liquidity_th_header_select_network).should('have.text', 'เลือกเน็ตเวิร์ค')
        this.clicknetwork_close()
        cy.wait(200)

        //check header account menu dropdown
        this.clickaccount_button()
        cy.wait(200)
        cy.get(add_liquidity_th_header_account_menu).should('have.text', 'บัญชี')
        cy.get(add_liquidity_th_header_history_menu).should('have.text', 'ประวัติ')
        cy.get(add_liquidity_th_header_setting_menu).should('have.text', 'ตั้งค่า')
        cy.get(add_liquidity_th_header_disconnect_menu).should('have.text', 'ออกจากระบบ')
        this.clickaccount_close()
        cy.wait(200)

        //check add liquidity page name
        cy.get(add_liquidity_th_add_liquidity_page_name).should('have.text', 'เพิ่มสภาพคล่อง')

        //check add liquidity name
        cy.get(add_liquidity_th_add_liquidity_name).should('have.text', 'เพิ่มสภาพคล่อง')

        //check setting dialog setting name
        this.click_setting_button()
        cy.wait(200)
        cy.get(add_liquidity_th_setting_dialog_setting_name).should('have.text', 'ตั้งค่า')
        cy.get(add_liquidity_th_setting_dialog_slippage_name).should('have.text', 'ความคลาดเคลื่อนระหว่างราคา')
        cy.get(add_liquidity_th_setting_dialog_deadline_name).should('have.text', 'เวลาในการทำธุรกรรม (นาที)')
        this.click_setting_close_button()
        cy.wait(200)

        this.click_select_token_1_dialog_btn()
        cy.wait(200)
        //check select token dialog name
        cy.get(add_liquidity_th_select_token_dialog_name).should('have.text', 'เลือกสกุลเงิน')

        //check select token dialog input token name
        cy.get(add_liquidity_th_input_token_placeholder).should('have.attr', 'placeholder').and('equal', 'ค้นหาชื่อสกุลเงินหรือเลขที่อยู่...')

        //check select token dialog boomark
        cy.get(add_liquidity_th_no_bookmark).should('have.text', 'ไม่มีบุ๊คมาร์ค')
        this.click_close_select_token_dialog_btn()
        cy.wait(200)

        //check balance token1
        cy.get(add_liquidity_th_balance_token1).eq(0).should('contain', 'คงเหลือ')

        //check balance token2
        cy.get(add_liquidity_th_balance_token2).eq(1).should('contain', 'คงเหลือ')

        //check price rate and share pool
        cy.get(add_liquidity_th_price_rate_and_sharepool).should('have.text', 'ราคาและส่วนแบ่งเงินกลาง')

        //check price rate name 1
        //cy.get(add_liquidity_th_price_rate_name1).eq(0).should('contain', 'ต่อ')

        //check price rate name 2
        //cy.get(add_liquidity_th_price_rate_name2).eq(1).should('contain', 'ต่อ')

        //check sharepool
        cy.get(add_liquidity_th_share_pool).should('have.text', 'ส่วนแบ่งเงินกลาง')

        //check supply button
        cy.get(add_liquidity_th_supply).should('have.text', 'เพิ่มสภาพคล่อง')
    }

    validate_thai_language_at_conirm_liquiditypage_dialog(){
        //check confirm liquidity name
        cy.get(confirm_liquidity_dialog_th_confirm_name).should('have.text', 'ยืนยันสภาพคล่อง')
        
        //check price rate and share pool
        cy.get(confirm_liquidity_dialog_th_price_rate_and_sharepool).should('have.text', 'ราคาและส่วนแบ่งเงินกลาง')

        //check price rate name 1
        cy.get(confirm_liquidity_dialog_th_price_rate_name1).should('contain', 'ต่อ')

        //check price rate name 2
        cy.get(confirm_liquidity_dialog_th_price_rate_name2).should('contain', 'ต่อ')

        //check sharepool
        cy.get(confirm_liquidity_dialog_th_sharepool).should('have.text', 'ส่วนแบ่งเงินกลาง')

        //check supply button
        cy.get(confirm_liquidity_dialog_th_confirm_button).should('have.text', 'ยืนยัน')
    }

    validate_thai_language_at_wait_confirm_dialog(){
        cy.get(wait_confirm_dialog_th_downloading).should('have.text','กำลังโหลด...')
        cy.get(wait_confirm_dialog_th_wait_confirmation).should('have.text','รอการยืนยัน')
        cy.get(wait_confirm_dialog_th_wait_transection).should('have.text','โปรดรอสักครู่ ธุรกรรมของคุณกำลังดำเนินการ...')
    }

    validate_thai_language_at_success_dialog(){
        cy.get(success_dialog_th_success).should('have.text','สำเร็จ')
        cy.get(success_dialog_th_transection).should('have.text','ดูใน Block explorer')
        cy.get(success_dialog_th_transection_success).should('have.text','ธุรกรรมเสร็จสิ้น')
        cy.get(success_dialog_th_close_button).should('have.text','ปิด')
    }

    validate_thai_language_at_find_liquidity(){
        //check header swap menu
        cy.get(find_liquidity_th_header_swap_menu).should('have.text', 'แลกเปลี่ยน')

        //check header liquidity menu
        cy.get(find_liquidity_th_header_liquidity_menu).should('have.text', 'สภาพคล่อง')

        //check select network dialog
        this.clicknetwork_button()
        cy.wait(200)
        cy.get(find_liquidity_th_header_select_network).should('have.text', 'เลือกเน็ตเวิร์ค')
        this.clicknetwork_close()
        cy.wait(200)

        //check header account menu dropdown
        this.clickaccount_button()
        cy.wait(200)
        cy.get(find_liquidity_th_header_account_menu).should('have.text', 'บัญชี')
        cy.get(find_liquidity_th_header_history_menu).eq(0).should('have.text', 'ประวัติ')
        cy.get(find_liquidity_th_header_setting_menu).eq(1).should('have.text', 'ตั้งค่า')
        cy.get(find_liquidity_th_header_disconnect_menu).should('have.text', 'ออกจากระบบ')
        this.clickaccount_close()
        cy.wait(200)

        //check find liquidity page name
        cy.get(find_liquidity_th_find_liquidity_page_name).should('have.text', 'นำเข้า สภาพคล่อง')

        //check find liquidity name
        cy.get(find_liquidity_th_find_liquidity_name).should('have.text', 'นำเข้า สภาพคล่อง')

        //check setting dialog setting name
        this.click_setting_button()
        cy.wait(200)
        cy.get(find_liquidity_th_setting_dialog_setting_name).should('have.text', 'ตั้งค่า')
        cy.get(find_liquidity_th_setting_dialog_slippage_name).should('have.text', 'ความคลาดเคลื่อนระหว่างราคา')
        cy.get(find_liquidity_th_setting_dialog_deadline_name).should('have.text', 'เวลาในการทำธุรกรรม (นาที)')
        this.click_setting_close_button()
        cy.wait(200)

        //check select token1 button
        cy.get(find_liquidity_th_select_token1_button).should('have.text', 'เลือกสกุลเงิน')
        //check select token2 button
        cy.get(find_liquidity_th_select_token2_button).should('have.text', 'เลือกสกุลเงิน')
        //check select token to find liquidity wording
        cy.get(find_liquidity_th_select_token_to_find_liquidty_wording).should('contain', 'เลือกโทเค็นเพื่อค้นหาสภาพคล่องของคุณ')
    }

}



