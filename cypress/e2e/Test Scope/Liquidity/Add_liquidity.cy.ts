import { AddLiquidity, ValidateAddliquidity } from "../../Page Model/Liquidity page/Add_liquidity_page"

const addLiquidity = new AddLiquidity()
const validateAddliquidity = new ValidateAddliquidity()

let base_url = 'https://dev.fin-dex.finstable.co.th/liquidity'

describe('Check Element Add Liquidity Page', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })
    it('Check => Back Button', () => {
        //assert
        validateAddliquidity.validate_Setting_button_element()
    })

    //ACT
    it('Check => Setting Button', () => {
        //assert
        validateAddliquidity.validate_Setting_button_element()
    })

    //ACT
    it('Check => [Setting Dialog] Slippage 0.1% Button', () => {
        //click open setting
        addLiquidity.click_setting_btn()

        //assert
        validateAddliquidity.validate_Slippage_01_button_element()
    })

    //ACT
    it('Check => [Setting Dialog] Slippage 0.5% Button', () => {
        //assert
        validateAddliquidity.validate_Slippage_05_button_element()
    })

    //ACT
    it('Check => [Setting Dialog] Slippage 1% Button', () => {
        //assert
        validateAddliquidity.validate_Slippage_1_button_element()
    })

    //ACT
    it('Check => [Setting Dialog] Slippage Textbox', () => {
        //assert
        validateAddliquidity.validate_Slippage_textbox_element()
    })

    //ACT
    it('Check => [Setting Dialog] Tx Deadline Textbox', () => {
        //assert
        validateAddliquidity.validate_Txdeadline_textbox_element()
    })

    //ACT
    it('Check => [Setting Dialog] Close Setting Button', () => {
        //assert
        validateAddliquidity.validate_Close_setting_button_element()
    })

    //ACT
    it('Check => History Button', () => {
        //click close setting
        addLiquidity.click_close_setting_btn()

        //assert
        validateAddliquidity.validate_History_button_element()
    })

    //ACT
    it('Check => Select Token 1 Button', () => {
        //assert
        validateAddliquidity.validate_Token_1_button_element()
    })

    //ACT
    it('Check => Balance Token 1', () => {
        //assert
        validateAddliquidity.validate_Balance_token_1_element()
    })

    //ACT
    it('Check => Token 1 Textbox', () => {
        //assert
        validateAddliquidity.validate_Token_1__textbox_element()
    })

    //ACT
    it('Check => Select Token 2 Button', () => {
        //assert
        validateAddliquidity.validate_Token_2_button_element()
    })

    //ACT
    it('Check => Balance Token 2', () => {
        //assert
        validateAddliquidity.validate_Balance_token_2_element()
    })

    //ACT
    it('Check => Token 2 Textbox', () => {
        //assert
        validateAddliquidity.validate_Token_2__textbox_element()
    })

    //ACT
    it('Check => Price rate 1 box', () => {
        //assert
        validateAddliquidity.validate_Price_rate_1_box_element()
    })

    //ACT
    it('Check => Price rate 2 box', () => {
        //assert
        validateAddliquidity.validate_Price_rate_2_box_element()
    })

    //ACT
    it('Check => Share Pool box', () => {
        //assert
        validateAddliquidity.validate_Share_pool_element()
    })

    //ACT
    it.skip('Check => Enable Token 1 Button', () => {
        //enter token 1
        addLiquidity.enter_token_1_amount('10')
        //assert
        validateAddliquidity.validate_Enable_token_1_button_element()
    })

    //ACT
    it.skip('Check => Enable Token 2 Button', () => {
        //assert
        validateAddliquidity.validate_Enable_token_2_button_element()
    })

    //ACT
    it('Check => Approve Button', () => {
        //assert
        validateAddliquidity.validate_Approve_button_element()
    })

    //ACT
    it('Check => Select Token Dialog', () => {
        //click select token
        addLiquidity.click_select_token_1_dialog_btn()

        //assert
        validateAddliquidity.validate_Select_token_dialog_element()
    })

    //ACT
    it('Check => [Select Token Dialog] Search Textbox', () => {
        //assert
        validateAddliquidity.validate_Select_token_dialog_search_textbox_element()
    })

    //ACT
    it('Check => [Select Token Dialog] Bookmark', () => {
        //assert
        validateAddliquidity.validate_Select_token_dialog_bookmark_element()
    })

    //ACT
    it('Check => [Select Token Dialog] Token 1 Button', () => {
        //assert
        validateAddliquidity.validate_Select_token_dialog_token_1_button_element()
    })

    //ACT
    it('Check => [Select Token Dialog] Token 2 Button', () => {
        //assert
        validateAddliquidity.validate_Select_token_dialog_token_2_button_element()
    })

    //ACT
    it('Check => [Select Token Dialog] Token 3 Button', () => {
        //assert
        validateAddliquidity.validate_Select_token_dialog_token_3_button_element()
    })

    //ACT
    it('Check => [Select Token Dialog] Close Button', () => {
        //assert
        validateAddliquidity.validate_Select_token_dialog_close_button_element()
    })

    afterEach(() => {
        cy.wait(100)
    })
})


describe('Setting Dialog Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })

    //Setting Dialog Test
    context('Slippage Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        //ACT
        it('TC => Click Setting Button', () => {
            //click Setting
            addLiquidity.click_setting_btn()
            cy.wait(300)
            //assert
            addLiquidity.validate_click_setting_btn('Setting')
        })

        //ACT
        it('TC => Click Slippage 0.1% Button', () => {
            cy.wait(200)
            //click slippage 0.1%
            addLiquidity.click_slippage_01_btn()

            //assert
            addLiquidity.validate_click_slippage_01_btn()
        })

        //ACT
        it('TC => Click Slippage 0.5% Button', () => {
            //click slippage 0.5%
            addLiquidity.click_slippage_05_btn()

            //assert
            addLiquidity.validate_click_slippage_05_btn()
        })

        //ACT
        it('TC => Click Slippage 1% Button', () => {
            //click slippage 1%
            addLiquidity.click_slippage_1_btn()

            //assert
            addLiquidity.validate_click_slippage_1_btn()
        })

        //ACT
        it('TC => Input Slippage Textbox as Character', () => {
            //enter slippage textbox
            addLiquidity.enter_slippage_textbox('Ten')

            //assert
            addLiquidity.validate_slippage_textbox('error message')
        })

        //ACT
        it('TC => Input Slippage Textbox as Symbol', () => {
            //clear slippage textbox
            addLiquidity.clear_slippage_textbox()

            //enter slippage textbox
            addLiquidity.enter_slippage_textbox('!@#$')

            //assert
            addLiquidity.validate_slippage_textbox('error message')
        })

        //ACT
        it('TC => Input Slippage Textbox as negative Number', () => {
            //clear slippage textbox
            addLiquidity.clear_slippage_textbox()

            //enter slippage textbox
            addLiquidity.enter_slippage_textbox('-0.5')

            //assert
            addLiquidity.validate_slippage_textbox('error message')
        })

        //ACT
        it('TC => Input Slippage Textbox as 4 Decimal Places', () => {
            //clear slippage textbox
            addLiquidity.clear_slippage_textbox()

            //enter slippage textbox
            addLiquidity.enter_slippage_textbox('0.1234')

            //assert
            addLiquidity.validate_slippage_textbox('error message')
        })
    })

    context('Deadline Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        //ACT
        it('TC => Check Default Tx Deadline', () => {
            //assert
            addLiquidity.validate_tx_deadline_default('20')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox Less Than 20 Min', () => {
            //clear tx deadline textbox
            addLiquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            addLiquidity.enter_tx_deadline_textbox('10')

            //assert
            addLiquidity.validate_tx_deadline_textbox('Less than 20')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox as Character', () => {
            //clear tx deadline textbox
            addLiquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            addLiquidity.enter_tx_deadline_textbox('Ten')

            //assert
            addLiquidity.validate_tx_deadline_textbox('character')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox as Symbol', () => {
            //clear tx deadline textbox
            addLiquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            addLiquidity.enter_tx_deadline_textbox('!@#$')

            //assert
            addLiquidity.validate_tx_deadline_textbox('symbol')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox as Negative Number', () => {
            //clear tx deadline textbox
            addLiquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            addLiquidity.enter_tx_deadline_textbox('-20')

            //assert
            addLiquidity.validate_tx_deadline_textbox('negative number')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox as 4 Decimal Places', () => {
            //clear tx deadline textbox
            addLiquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            addLiquidity.enter_tx_deadline_textbox('2.0')

            //assert
            addLiquidity.validate_tx_deadline_textbox('4 decimal places')
        })

        //ACT
        it('TC => Click Close Setting', () => {
            //click close setting
            addLiquidity.click_close_setting_btn()

            //assert
            addLiquidity.validate_click_close_setting_btn()
        })
    })
    afterEach(() => {
        cy.wait(200)
    })
})


// History Dialog test
describe.skip('History Dialog Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })

    //ACT
    it('TC => Click History Button', () => {
        //click close setting
        addLiquidity.click_close_setting_btn()
    })

    afterEach(() => {
        cy.wait(200)
    })
})

//Select Token Dialog test
describe('Select Token Dialog Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })

    //ACT
    it('TC => Click Select Token', () => {
        //click close setting
        addLiquidity.click_select_token_1_dialog_btn()

        //assert
        addLiquidity.validate_click_select_token_btn()
    })

    //ACT
    it('TC => Null Search Token ', () => {
        //assert
        addLiquidity.validate_search_token_textbox('null')
    })

    //ACT
    it('TC => Search Token With Name', () => {
        //enter search token [name]
        addLiquidity.enter_search_token('KUSDT')

        //assert
        addLiquidity.validate_search_token_textbox('valid')
    })

    //ACT
    it('TC => Search Token With Name [Case Sensitive]', () => {
        //clear search 
        addLiquidity.clear_search_token()
        //enter search token [name]
        addLiquidity.enter_search_token('Kusdt')

        //assert
        addLiquidity.validate_search_token_textbox('valid')
    })

    //ACT
    it('TC => Search Token With Address', () => {
        //clear search 
        addLiquidity.clear_search_token()
        //enter search token [address]
        addLiquidity.enter_search_token('0x951e46f83c466C0512c55A0C1BDa536B26D52BAD')

        //assert
        addLiquidity.validate_search_token_textbox('valid')
    })

    //ACT
    it('TC => Search Token With Wrong Address', () => {
        //clear search 
        addLiquidity.clear_search_token()
        //enter search token [address]
        addLiquidity.enter_search_token('0x1861C5aa0')

        //assert
        addLiquidity.validate_search_token_textbox('invalid')
    })

    //ACT
    it('TC => Search Token With Thai Name', () => {
        //clear search 
        addLiquidity.clear_search_token()
        //enter search token [address]
        addLiquidity.enter_search_token('เคยูบี')

        //assert
        addLiquidity.validate_search_token_textbox('invalid')
    })

    //ACT
    it('TC => Click Bookmark Token', () => {
        //add bookmark
        addLiquidity.add_bookmark('KUSDT')

        //add bookmark
        addLiquidity.add_bookmark('KUSDC')

        //assert
        addLiquidity.validate_click_bookmark_token_btn('KUSDT', 'KUSDC')
    })

    //ACT
    it('TC => Remove Bookmark Token', () => {
        //remove bookmark
        addLiquidity.remove_bookmark('KUSDT')

        //remove bookmark
        addLiquidity.remove_bookmark('KUSDC')

        //assert
        addLiquidity.validate_click_remove_bookmark_token_btn('No bookmark')
    })

    //ACT
    it('TC => Close Select Token Dialog', () => {
        //click bookmark
        addLiquidity.click_close_select_token_dialog_btn()

        //assert
        addLiquidity.validate_click_close_select_token_dialog_btn()
    })
    afterEach(() => {
        cy.wait(200)
    })
})

// Token 1 test
describe('Token 1 Test', () => {
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })
    context('Select Token & Balance Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        it('TC => Select Token 1 From Dialog [Token list]', () => {
            //click open select token dialog
            addLiquidity.click_select_token_1_dialog_btn()
            //select token 1
            addLiquidity.click_token_from_dialog_token_list('KUSDT')
            cy.wait(700)
            //assert
            addLiquidity.validate_select_token_1_from_dialog_token_list('KUSDT')
        })

        it('TC => Select Token 1 From Dialog [Bookmark]', () => {
            //click open select token dialog
            addLiquidity.click_select_token_1_dialog_btn()
            //add Bookmark
            addLiquidity.add_bookmark('KUSDC')
            //click token from bookmark
            addLiquidity.click_token_from_dialog_bookmark('KUSDC')
            cy.wait(700)
            //assert
            addLiquidity.validate_select_token_1_from_dialog_bookmark('KUSDC')
        })

        it.skip('TC => Check Balance Token[1]', () => {
            //click open select token dialog
            addLiquidity.click_select_token_1_dialog_btn()
            //select token 1
            addLiquidity.click_token_from_dialog_token_list('KUSDC')
            cy.wait(700)
            //assert
            addLiquidity.validate_balance_token_1('KUSDC')
        })
    })

    context('Token 1 Input Amount Textbox ', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        it('Input Amount as Number', () => {
            //input token  as number
            addLiquidity.enter_token_1_amount('10')

            //assert
            addLiquidity.validate_amount_textbox_token1('10')
        })

        it('Input Amount as Decimal', () => {
            //clear input token amount
            addLiquidity.clear_token_1_amount()

            //input token  as decimal
            addLiquidity.enter_token_1_amount('.945')

            //assert
            addLiquidity.validate_amount_textbox_token1('.945')
        })

        it.skip('Input Amount as Negative Number', () => {
            //clear input token amount
            addLiquidity.clear_token_1_amount()

            //input token  as negative number
            addLiquidity.enter_token_1_amount('-10')

            //assert
            addLiquidity.validate_amount_textbox_token1('10')
        })

        it('Input Amount as Charactor', () => {
            //clear input token amount
            addLiquidity.clear_token_1_amount()

            //input token  as charactor
            addLiquidity.enter_token_1_amount('Ten')

            //assert
            addLiquidity.validate_amount_textbox_token1('')
        })

        it('Input Amount as Thai Charactor', () => {
            //clear input token amount
            addLiquidity.clear_token_1_amount()

            //input token  as thai charactor
            addLiquidity.enter_token_1_amount('สิบ')

            //assert
            addLiquidity.validate_amount_textbox_token1('')
        })

        it('Input Amount as Symbol', () => {
            //clear input token amount
            addLiquidity.clear_token_1_amount()

            //input token  as symbol
            addLiquidity.enter_token_1_amount('#$%')

            //assert
            addLiquidity.validate_amount_textbox_token1('')
        })
    })

    afterEach(() => {
        cy.wait(200)
    })

})

describe('Token 2 Test', () => {
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })
    context('Select Token & Balance Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        it('TC => Select Token 2 From Dialog [Token list]', () => {

            //click open select token dialog
            addLiquidity.click_select_token_2_dialog_btn()
            //select token 2
            addLiquidity.click_token_from_dialog_token_list('KUB')
            cy.wait(700)
            //assert
            addLiquidity.validate_select_token_2_from_dialog_token_list('KUB')
        })

        it('TC => Select Token 2 From Dialog [Bookmark]', () => {

            //click open select token dialog
            addLiquidity.click_select_token_2_dialog_btn()
            //add Bookmark
            addLiquidity.add_bookmark('KUSDT')

            //click token from bookmark
            addLiquidity.click_token_from_dialog_bookmark('KUSDT')
            cy.wait(700)
            //assert
            addLiquidity.validate_select_token_2_from_dialog_bookmark('KUSDT')
        })

        it.skip('TC => Check Balance Token[2]', () => {
            //click open select token dialog
            addLiquidity.click_select_token_2_dialog_btn()
            //select token 1
            addLiquidity.click_token_from_dialog_token_list('KUSDT')
            cy.wait(700)
            //assert
            addLiquidity.validate_balance_token_2('KUSDT')
        })
    })

    context('Token 2 Input Amount Textbox ', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        it('Input Amount as Number', () => {
            //input token  as number
            addLiquidity.enter_token_2_amount('10')

            //assert
            addLiquidity.validate_amount_textbox_token2('10')
        })

        it('Input Amount as Decimal', () => {
            //clear input token amount
            addLiquidity.clear_token_2_amount()

            //input token  as decimal
            addLiquidity.enter_token_2_amount('.945')

            //assert
            addLiquidity.validate_amount_textbox_token2('.945')
        })

        it.skip('Input Amount as Negative Number', () => {
            //clear input token amount
            addLiquidity.clear_token_2_amount()

            //input token  as negative number
            addLiquidity.enter_token_2_amount('-10')

            //assert
            addLiquidity.validate_amount_textbox_token2('10')
        })

        it('Input Amount as Charactor', () => {
            //clear input token amount
            addLiquidity.clear_token_2_amount()

            //input token  as charactor
            addLiquidity.enter_token_2_amount('Ten')

            //assert
            addLiquidity.validate_amount_textbox_token2('')
        })

        it('Input Amount as Thai Charactor', () => {
            //clear input token amount
            addLiquidity.clear_token_2_amount()

            //input token  as thai charactor
            addLiquidity.enter_token_2_amount('สิบ')

            //assert
            addLiquidity.validate_amount_textbox_token2('')
        })

        it('Input Amount as Symbol', () => {
            //clear input token amount
            addLiquidity.clear_token_2_amount()

            //input token  as symbol
            addLiquidity.enter_token_2_amount('#$%')

            //assert
            addLiquidity.validate_amount_textbox_token2('')
        })
    })
    afterEach(() => {
        cy.wait(200)
    })
})

describe('Check Rate Prices And Pool Share Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })

    it.skip('Check rate => KUSDC & KUSDT', () => {
        //input token detail
        addLiquidity.enter_liquidity_detail('KUSDC', 'KUSDT', '10')

        //assert
        addLiquidity.validate_price_rate()
    })

    it('Check rate => KUSDC & KUB', () => {
        //input token detail
        addLiquidity.enter_liquidity_detail('KUSDC', 'KUB', '10')

        //assert
        addLiquidity.validate_price_rate()
    })

    it('Check rate => KUB & KUSDT', () => {
        //input token detail
        addLiquidity.enter_liquidity_detail('KUB', 'KUSDT', '10')

        //assert
        addLiquidity.validate_price_rate()
    })

    it('Check rate => KUB & KUSDC', () => {
        //input token detail
        addLiquidity.enter_liquidity_detail('KUB', 'KUSDC', '10')

        //assert
        addLiquidity.validate_price_rate()
    })

    it.skip('Check rate => KUSDT & KUSDC', () => {
        //input token detail
        addLiquidity.enter_liquidity_detail('KUSDT', 'KUSDC', '10')

        //assert
        addLiquidity.validate_price_rate()
    })

    it('Check rate => KUSDT & KUB', () => {
        //input token detail
        addLiquidity.enter_liquidity_detail('KUSDT', 'KUB', '10')

        //assert
        addLiquidity.validate_price_rate()
    })

    afterEach(() => {
        cy.wait(200)
    })
})


describe('Confirm Liquidity Dialog', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)

        //addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })

    it('Open Confirm Lequidity Dialog', () => {
        //input token detail
        addLiquidity.enter_liquidity_detail('KUSDT', 'KUSDC', '100')

        //click open dialog
        addLiquidity.click_supply_btn()

        //assert
        addLiquidity.validate_open_confirm_liquidity_dialog()
    })

    it('Check Detail => Confirm Liquidity ', () => {
        cy.wait(500)
        //click close dialog
        addLiquidity.click_close_confirm_liquidity_dialog()

        //input token detail
        addLiquidity.enter_liquidity_detail('KUSDT', 'KUSDC', '100')
        //click open dialog
        addLiquidity.click_supply_btn()

        //assert
        addLiquidity.validate_confirm_liquidity_dialog('KUSDT', 'KUSDC')
    })

    it('Close Confirm Lequidity Dialog', () => {
        //click close dialog
        addLiquidity.click_close_confirm_liquidity_dialog()

        //assert
        addLiquidity.validate_close_confirm_liquidity_dialog()
    })

    it('Click Confirm', () => {
        cy.visit(base_url)
        //addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)

        addLiquidity.enter_liquidity_detail('KUSDT', 'KUSDC', '100')
        //click open dialog
        addLiquidity.click_supply_btn()
        cy.wait(1000)

        //click confirm to add liquidity
        addLiquidity.click_reject_on_confirm_liquidity_dialog()
        cy.wait(3000)
        cy.rejectMetamaskTransaction()

        //assert
        addLiquidity.validate_click_confirm_on_confirm_liquidity_dialog('user rejected transaction')
    })

    afterEach(() => {
        cy.wait(200)
    })
})


describe('Add Liquidity Flow Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)

        //addLiquidity.connect_wallet()
        addLiquidity.click_connect_wallet()
        addLiquidity.click_add_liquidity_btn()
        cy.wait(700)
    })
    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //addLiquidity.connect_wallet()
    })

    it('Insuffecien Token 1 Balance',()=>{
        //input token detail
        addLiquidity.enter_liquidity_detail('KUB', 'KUSDT', '10')
        //Check enable token
        addLiquidity.eneble_token()
        //assert
        addLiquidity.validate_insufficien_balance()
    })

    it('Insuffecien Token 2 Balance',()=>{
        //input token detail
        addLiquidity.enter_liquidity_detail('KUSDC', 'KUB', '10')        
        //Check enable token
        addLiquidity.eneble_token()

        //assert
        addLiquidity.validate_insufficien_balance()
    })

    it('Reject Transaction on Metamask',()=>{
      
        // liquidity detail
        addLiquidity.add_liquidity_pool('KUSDC','KUSDT','100','90')
        cy.wait(3000)
        //confirm on metamask
        cy.rejectMetamaskTransaction()

        //assert
        addLiquidity.validate_reject_transaction('user rejected transaction')
    }) 

    it.skip('Add Liquidity With Lower Slippage',()=>{
        //liquidity detail
        addLiquidity.add_liquidity_pool('KUSDC','KUSDT','100','0%')
        cy.wait(3000)
        cy.confirmMetamaskTransaction()
        //assert
        cy.wait(25000)
        addLiquidity.validate_add_liquidity_success('Success')
    })

    it.skip('Add Liquidity Success With Slippage 0.1%',()=>{
        //liquidity detail
        addLiquidity.add_liquidity_pool('KUSDC','KUSDT','100','0.1%')
        cy.wait(3000)
        cy.confirmMetamaskTransaction()
        //assert
        cy.wait(25000)
        addLiquidity.validate_add_liquidity_success('Success')
    })

    it.skip('Add Liquidity Success With Slippage 0.5%',()=>{
        //liquidity detail
        addLiquidity.add_liquidity_pool('KUSDC','KUSDT','100','0.5%')
        cy.wait(3000)
        cy.confirmMetamaskTransaction()
        //assert
        cy.wait(25000)
        addLiquidity.validate_add_liquidity_success('Success')
    })

    it.skip('Add Liquidity Success With Slippage 1%',()=>{
        //liquidity detail
        addLiquidity.add_liquidity_pool('KUSDC','KUSDT','100','1.0%')
        cy.wait(3000)
        cy.confirmMetamaskTransaction()
        //assert
        cy.wait(25000)
        addLiquidity.validate_add_liquidity_success('Success')
    })

    it('Add Liquidity Success With Custom Slippage 90%',()=>{
        //liquidity detail
        addLiquidity.add_liquidity_pool('KUSDC','KUSDT','100','90')
        cy.wait(3000)
        cy.confirmMetamaskTransaction()
        //assert
        cy.wait(25000)
        addLiquidity.validate_add_liquidity_success('Success')
    })

    after(()=>{
        cy.wait(200)
    })
})

    // after(() => {
    //     //cy.disconnectMetamaskWalletFromAllDapps()
    //     //cy.visit(base_url)
    // })
