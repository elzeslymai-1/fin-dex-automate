import { Find_Liquidity, ValidateFind_Liquidity_Element } from "../../Page Model/Liquidity page/Find_liquidity_page"
import { Remove_Liquidity } from "../../Page Model/Liquidity page/Remove_liquidity_page"

const find = new Find_Liquidity()
const element = new ValidateFind_Liquidity_Element()
const remove = new Remove_Liquidity()

let base_url = 'https://dev.fin-dex.finstable.co.th/liquidity'

describe('Find Liquidity Flow', () => {

    context('Check Element Find Liquidity', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            cy.visit(base_url)

            find.connect_wallet()
            cy.wait(500)

            //add liquidity
            find.add_liquidity_pool('KUSDC', 'KUSDT', '1000', '0.5')
            cy.wait(1000)

            //click find liquidity button
            find.click_find_liquidity_btn()
            cy.wait(500)
        })

        it('Check => Setting Button', () => {
            //assert
            element.validate_Setting_button_element()
        })

        //ACT
        it('Check => Slippage 0.1% Button', () => {
            //click open setting
            find.click_setting_btn()

            //assert
            element.validate_Slippage_01_button_element()
        })

        //ACT
        it('Check => Slippage 0.5% Button', () => {
            //assert
            element.validate_Slippage_05_button_element()
        })

        //ACT
        it('Check => Slippage 1% Button', () => {
            //assert
            element.validate_Slippage_1_button_element()
        })

        //ACT
        it('Check => Slippage Textbox', () => {
            //assert
            element.validate_Slippage_textbox_element()
        })

        //ACT
        it('Check => Tx Deadline Textbox', () => {
            //assert
            element.validate_Txdeadline_textbox_element()
        })

        //ACT
        it('Check => Close Setting Button', () => {
            //assert
            element.validate_Close_setting_button_element()
        })

        //ACT
        it('Check => History Button', () => {
            //click close setting
            find.click_close_setting_btn()

            //assert
            element.validate_History_button_element()
        })

        it('Check => Select Token1 Button', () => {
            //assert
            element.validate_Select_token1_element()
        })

        it('Check => Select Token2 Button', () => {
            //assert
            element.validate_Select_token2_element()
        })

        afterEach(() => {
            cy.wait(200)
        })
    })
})

describe('Setting Dialog Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)

        //find.connect_wallet()
        find.click_connect_wallet()
        cy.wait(500)

        //click find liquidity button
        find.click_find_liquidity_btn()
        cy.wait(500)
    })

    //Setting Dialog Test
    context('Slippage Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        //ACT
        it('TC => Click Setting Button', () => {
            //click Setting
            find.click_setting_btn()
            cy.wait(300)
            //assert
            find.validate_click_setting_btn('Setting')
        })

        //ACT
        it('TC => Click Slippage 0.1% Button', () => {
            cy.wait(200)
            //click slippage 0.1%
            find.click_slippage_01_btn()

            //assert
            find.validate_click_slippage_01_btn()
        })

        //ACT
        it('TC => Click Slippage 0.5% Button', () => {
            //click slippage 0.5%
            find.click_slippage_05_btn()

            //assert
            find.validate_click_slippage_05_btn()
        })

        //ACT
        it('TC => Click Slippage 1% Button', () => {
            //click slippage 1%
            find.click_slippage_1_btn()

            //assert
            find.validate_click_slippage_1_btn()
        })

        //ACT
        it('TC => Input Slippage Textbox as Character', () => {
            //clear textbox
            find.clear_slippage_textbox()
            //enter slippage textbox
            find.enter_slippage_textbox('Ten')

            //assert
            find.validate_slippage_textbox('Character', '')
        })

        //ACT
        it('TC => Input Slippage Textbox as Symbol', () => {
            //clear slippage textbox
            find.clear_slippage_textbox()

            //enter slippage textbox
            find.enter_slippage_textbox('!@#$')

            //assert
            find.validate_slippage_textbox('Symbol', '')
        })

        //ACT
        it('TC => Input Slippage Textbox as Negative Number', () => {
            //clear slippage textbox
            find.clear_slippage_textbox()

            //enter slippage textbox
            find.enter_slippage_textbox('-0.5')

            //assert
            find.validate_slippage_textbox('Negative', '')
        })

        //ACT
        it('TC => Input Slippage Textbox as 4 Decimal Places', () => {
            //clear slippage textbox
            find.clear_slippage_textbox()

            //enter slippage textbox
            find.enter_slippage_textbox('0.1234')

            //assert
            find.validate_slippage_textbox('4 Decimal', '0.12')
        })

        //ACT
        it('TC => Input Slippage Textbox over 49', () => {
            //clear slippage textbox
            find.clear_slippage_textbox()

            //enter slippage textbox
            find.enter_slippage_textbox('100')

            //assert
            find.validate_slippage_textbox('Maximum', '49')
        })
    })

    context('Deadline Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        //ACT
        it('TC => Check Default Tx Deadline', () => {
            //assert
            find.validate_tx_deadline_default('20')
        })

        //ACT
        it.skip('TC => Input Tx Deadline Textbox Less Than 20 Min', () => {
            //clear tx deadline textbox
            find.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            find.enter_tx_deadline_textbox('10')

            //assert
            find.validate_tx_deadline_textbox('Less than 20')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox as Character', () => {
            //clear tx deadline textbox
            find.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            find.enter_tx_deadline_textbox('Ten')

            //assert
            find.validate_tx_deadline_textbox('character')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox as Symbol', () => {
            //clear tx deadline textbox
            find.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            find.enter_tx_deadline_textbox('!@#$')

            //assert
            find.validate_tx_deadline_textbox('symbol')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox as Negative Number', () => {
            //clear tx deadline textbox
            find.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            find.enter_tx_deadline_textbox('-20')

            //assert
            find.validate_tx_deadline_textbox('negative number')
        })

        //ACT
        it('TC => Input Tx Deadline Textbox as 4 Decimal Places', () => {
            //clear tx deadline textbox
            find.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            find.enter_tx_deadline_textbox('2.0')

            //assert
            find.validate_tx_deadline_textbox('4 decimal places')
        })

        //ACT
        it('TC => Click Close Setting', () => {
            //click close setting
            find.click_close_setting_btn()

            //assert
            find.validate_click_close_setting_btn()
        })
    })
    afterEach(() => {
        cy.wait(200)
    })
})

describe('Select Token1 Dialog', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //connect to metamask
        //find.connect_wallet()
        find.click_connect_wallet()
        cy.wait(500)

        //click find liquidity button
        find.click_find_liquidity_btn()
        cy.wait(500)

        //click select token1 btn
        find.click_select_token1_btn()
    })

    context('Action Select Token1 Dialog', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        //ACT
        it('TC => Click Select Token', () => {
            //assert
            find.validate_click_select_token_btn()
        })

        //ACT
        it('TC => Null Search Token ', () => {
            //assert
            find.validate_search_token_textbox('null')
        })

        //ACT
        it('TC => Search Token With Name', () => {
            //enter search token [name]
            find.enter_search_token('KUSDT')

            //assert
            find.validate_search_token_textbox('valid')
        })

        //ACT
        it('TC => Search Token With Name [Case Sensitive]', () => {
            //clear search 
            find.clear_search_token()
            //enter search token [name]
            find.enter_search_token('Kusdt')

            //assert
            find.validate_search_token_textbox('valid')
        })

        //ACT
        it('TC => Search Token With Address', () => {
            //clear search 
            find.clear_search_token()
            //enter search token [address]
            find.enter_search_token('0x951e46f83c466C0512c55A0C1BDa536B26D52BAD')

            //assert
            find.validate_search_token_textbox('valid')
        })

        //ACT
        it('TC => Search Token With Wrong Address', () => {
            //clear search 
            find.clear_search_token()
            //enter search token [address]
            find.enter_search_token('0x1861C5aa0')

            //assert
            find.validate_search_token_textbox('invalid')
        })

        //ACT
        it('TC => Search Token With Thai Name', () => {
            //clear search 
            find.clear_search_token()
            //enter search token [address]
            find.enter_search_token('เคยูบี')

            //assert
            find.validate_search_token_textbox('invalid')
        })

        //ACT
        it('TC => Click Bookmark Token', () => {
            //add bookmark
            find.add_bookmark('KUSDT')

            //add bookmark
            find.add_bookmark('KUSDC')

            //assert
            find.validate_click_bookmark_token_btn('KUSDT', 'KUSDC')
        })

        //ACT
        it('TC => Remove Bookmark Token', () => {
            //remove bookmark
            find.remove_bookmark('KUSDT')

            //remove bookmark
            find.remove_bookmark('KUSDC')

            //assert
            find.validate_click_remove_bookmark_token_btn('No bookmark')
        })

        //ACT
        it('TC => Close Select Token Dialog', () => {
            //click bookmark
            find.click_close_select_token_dialog_btn()

            //assert
            find.validate_click_close_select_token_dialog_btn()
        })
    })
})

describe('Select Token2 Dialog', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //connect to metamask
        //find.connect_wallet()
        find.click_connect_wallet()
        cy.wait(500)

        //click find liquidity button
        find.click_find_liquidity_btn()
        cy.wait(500)

        //click select token1 btn
        find.click_select_token2_btn()
    })

    context('Action Select Token2 Dialog', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        //ACT
        it('TC => Click Select Token', () => {
            //assert
            find.validate_click_select_token_btn()
        })

        //ACT
        it('TC => Null Search Token ', () => {
            //assert
            find.validate_search_token_textbox('null')
        })

        //ACT
        it('TC => Search Token With Name', () => {
            //enter search token [name]
            find.enter_search_token('KUSDT')

            //assert
            find.validate_search_token_textbox('valid')
        })

        //ACT
        it('TC => Search Token With Name [Case Sensitive]', () => {
            //clear search 
            find.clear_search_token()
            //enter search token [name]
            find.enter_search_token('Kusdt')

            //assert
            find.validate_search_token_textbox('valid')
        })

        //ACT
        it('TC => Search Token With Address', () => {
            //clear search 
            find.clear_search_token()
            //enter search token [address]
            find.enter_search_token('0x951e46f83c466C0512c55A0C1BDa536B26D52BAD')

            //assert
            find.validate_search_token_textbox('valid')
        })

        //ACT
        it('TC => Search Token With Wrong Address', () => {
            //clear search 
            find.clear_search_token()
            //enter search token [address]
            find.enter_search_token('0x1861C5aa0')

            //assert
            find.validate_search_token_textbox('invalid')
        })

        //ACT
        it('TC => Search Token With Thai Name', () => {
            //clear search 
            find.clear_search_token()
            //enter search token [address]
            find.enter_search_token('เคยูบี')

            //assert
            find.validate_search_token_textbox('invalid')
        })

        //ACT
        it('TC => Click Bookmark Token', () => {
            //add bookmark
            find.add_bookmark('KUSDT')

            //add bookmark
            find.add_bookmark('KUSDC')

            //assert
            find.validate_click_bookmark_token_btn('KUSDT', 'KUSDC')
        })

        //ACT
        it('TC => Remove Bookmark Token', () => {
            //remove bookmark
            find.remove_bookmark('KUSDT')

            //remove bookmark
            find.remove_bookmark('KUSDC')

            //assert
            find.validate_click_remove_bookmark_token_btn('No bookmark')
        })

        //ACT
        it('TC => Close Select Token Dialog', () => {
            //click bookmark
            find.click_close_select_token_dialog_btn()

            //assert
            find.validate_click_close_select_token_dialog_btn()
        })
    })
})


describe('Find Liquidity', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    before(() => {
        cy.viewport(1920, 1080)
        cy.visit(base_url)
        //connect to metamask
        //find.connect_wallet()
        find.click_connect_wallet()
        cy.wait(500)

        //click find liquidity button
        find.click_find_liquidity_btn()
        cy.wait(500)
    })

    context('Find Liquidity Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        it('Null Token1 & Token2', () => {
            find.validate_null_token1_and_token2()
        })

        it('TC => Select Token 1 From Dialog [Token list]', () => {
            //click open select token dialog
            find.click_select_token1_btn()
            //select token 1
            find.click_token_from_dialog_token_list('KUB')
            cy.wait(700)
            //assert
            find.validate_select_token_1_from_dialog_token_list('KUB')
        })

        it('TC => Select Token 1 From Dialog [Bookmark]', () => {
            //click open select token dialog
            find.click_select_token1_btn()
            //add Bookmark
            find.add_bookmark('KUSDC')
            //click token from bookmark
            find.click_token_from_dialog_bookmark('KUSDC')
            cy.wait(700)
            //assert
            find.validate_select_token_1_from_dialog_bookmark('KUSDC')
        })

        it('TC => Select Token 2 From Dialog [Token list]', () => {

            //click open select token dialog
            find.click_select_token2_btn()
            //select token 2
            find.click_token_from_dialog_token_list('KUB')
            cy.wait(700)
            //assert
            find.validate_select_token_2_from_dialog_token_list('KUB')
        })

        it('TC => Select Token 2 From Dialog [Bookmark]', () => {

            //click open select token dialog
            find.click_select_token2_btn()
            //add Bookmark
            find.add_bookmark('KUSDT')

            //click token from bookmark
            find.click_token_from_dialog_bookmark('KUSDT')
            cy.wait(700)
            //assert
            find.validate_select_token_2_from_dialog_bookmark('KUSDT')
        })

        it('Not Found Liquidity Pool', () => {
            //click open select token dialog
            find.click_select_token1_btn()
            //select token 1
            find.click_token_from_dialog_token_list('KUB')

            //click open select token dialog
            find.click_select_token2_btn()
            //select token 2
            find.click_token_from_dialog_token_list('KUSDC')

            cy.wait(2500)
            // assert
            find.validate_not_found_liquidity()
        })

        it('Found Liquidity Pool', () => {
            //click open select token dialog
            find.click_select_token1_btn()
            //select token 1
            find.click_token_from_dialog_token_list('KUSDC')

            //click open select token dialog
            find.click_select_token2_btn()
            //select token 2
            find.click_token_from_dialog_token_list('KUSDT')

            cy.wait(2500)
            // assert
            find.validate_found_liquidity('KUSDC', 'KUSDT')
        })

        it('Click Manage This Pools Button', () => {
            //click open select token dialog
            find.click_select_token1_btn()
            //select token 1
            find.click_token_from_dialog_token_list('KUSDC')

            //click open select token dialog
            find.click_select_token2_btn()
            //select token 2
            find.click_token_from_dialog_token_list('KUSDT')

            cy.wait(2500)
            find.click_manage_pool_btn()

            //assert
            cy.wait(4000)
            find.validate_click_manage_pool_btn('KUSDC', 'KUSDT')
        })

        after(() => {
            remove.call_remove_liquidity_pool()
            cy.wait(200)
            cy.disconnectMetamaskWalletFromAllDapps()
            cy.visit(base_url)
        })
    })
})