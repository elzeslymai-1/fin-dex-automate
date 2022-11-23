import { Liquidity, ValidateLiquidity } from "../../Page Model/Liquidity page/Liquidity_page";

const liquidity = new Liquidity()
const validateLiquidity = new ValidateLiquidity()

describe('Liquidity Page', () => {
    let base_url = 'https://dev.fin-dex.finstable.co.th/liquidity'

    context('Check Element Liquidity Page [Not Connect Wallet]', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })
        before(() => {
            cy.viewport(1920, 1080)
            cy.visit(base_url)
            cy.wait(700)
        })
        //ACT
        it('Check => Setting Button', () => {
            //assert
            validateLiquidity.validate_Setting_button_element()
        })

        //ACT
        it('Check => Slippage 0.1% Button', () => {
            //click open setting
            liquidity.click_setting_btn()

            //assert
            validateLiquidity.validate_Slippage_01_button_element()
        })

        //ACT
        it('Check => Slippage 0.5% Button', () => {
            //assert
            validateLiquidity.validate_Slippage_05_button_element()
        })

        //ACT
        it('Check => Slippage 1% Button', () => {
            //assert
            validateLiquidity.validate_Slippage_1_button_element()
        })

        //ACT
        it('Check => Slippage Textbox', () => {
            //assert
            validateLiquidity.validate_Slippage_textbox_element()
        })

        //ACT
        it('Check => Tx Deadline Textbox', () => {
            //assert
            validateLiquidity.validate_Txdeadline_textbox_element()
        })

        //ACT
        it('Check => Close Setting Button', () => {
            //assert
            validateLiquidity.validate_Close_setting_button_element()
        })

        //ACT
        it('Check => History Button', () => {
            //click close setting
            liquidity.click_close_setting_btn()

            //assert
            validateLiquidity.validate_History_button_element()
        })

        //ACT
        it('Check => Your Liquidity', () => {
            //assert
            validateLiquidity.validate_Your_liquidity_box_element_no_wallet('Connect to a wallet to view your liquidity.')
        })

        //ACT
        it('Check => Add Liquidity Button', () => {
            //assert
            validateLiquidity.validate_Add_liquidity_button_element()
        })

        afterEach(() => {
            cy.wait(100)
        })
    })

    context('Check Element Liquidity Page [Connect Connect Wallet]', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })
        before(() => {
            cy.viewport(1920, 1080)
            cy.visit(base_url)
            liquidity.connect_wallet()
            cy.wait(500)
        })
        //ACT
        it('Check => Setting Button', () => {
            validateLiquidity.validate_Setting_button_element()
        })

        //ACT
        it('Check => Slippage 0.1% Button', () => {
            //click open setting
            liquidity.click_setting_btn()

            //assert
            validateLiquidity.validate_Slippage_01_button_element()
        })

        //ACT
        it('Check => Slippage 0.5% Button', () => {
            //assert
            validateLiquidity.validate_Slippage_05_button_element()
        })

        //ACT
        it('Check => Slippage 1% Button', () => {
            //assert
            validateLiquidity.validate_Slippage_1_button_element()
        })

        //ACT
        it('Check => Slippage Textbox', () => {
            //assert
            validateLiquidity.validate_Slippage_textbox_element()
        })

        //ACT
        it('Check => Tx Deadline Textbox', () => {
            //assert
            validateLiquidity.validate_Txdeadline_textbox_element()
        })

        //ACT
        it('Check => Close Setting Button', () => {
            //assert
            validateLiquidity.validate_Close_setting_button_element()
        })

        //ACT
        it('Check => History Button', () => {
            //click close setting
            liquidity.click_close_setting_btn()

            //assert
            validateLiquidity.validate_History_button_element()
        })

        //ACT
        it('Check => Find Other LP Tokens Button', () => {
            cy.wait(500)
            //assert
            validateLiquidity.validate_Find_other_lp_button_element()
        })

        //ACT
        it('Check => Add Liquidity Button', () => {
            //assert
            validateLiquidity.validate_Add_liquidity_button_element()
        })

        afterEach(() => {
            cy.wait(100)
        })
    })

    context('All Liquidity Page Test', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })
        before(() => {
            cy.viewport(1920, 1080)
            cy.visit(base_url)
            liquidity.click_connect_wallet()
            cy.wait(500)
        })
        //ACT
        it('TC => Click Setting Button', () => {
            //click Setting
            liquidity.click_setting_btn()

            //assert
            liquidity.validate_click_setting_btn('Setting')
        })

        it('TC => Click Slippage 0.1% Button', () => {
            //click slippage 0.1%
            liquidity.click_slippage_01_btn()

            //assert
            liquidity.validate_click_slippage_01_btn()
        })

        it('TC => Click Slippage 0.5% Button', () => {
            //click slippage 0.5%
            liquidity.click_slippage_05_btn()

            //assert
            liquidity.validate_click_slippage_05_btn()
        })

        it('TC => Click Slippage 1% Button', () => {
            //click slippage 1%
            liquidity.click_slippage_1_btn()

            //assert
            liquidity.validate_click_slippage_1_btn()
        })

        it('TC => Input Slippage Textbox as Character', () => {
            //enter slippage textbox
            liquidity.enter_slippage_textbox('Ten')

            //assert
            liquidity.validate_slippage_textbox('error message')
        })

        it('TC => Input Slippage Textbox as Symbol', () => {
            //clear slippage textbox
            liquidity.clear_slippage_textbox()

            //enter slippage textbox
            liquidity.enter_slippage_textbox('!@#$')

            //assert
            liquidity.validate_slippage_textbox('error message')
        })

        it('TC => Input Slippage Textbox as negative Number', () => {
            //clear slippage textbox
            liquidity.clear_slippage_textbox()

            //enter slippage textbox
            liquidity.enter_slippage_textbox('-0.5')

            //assert
            liquidity.validate_slippage_textbox('error message')
        })

        it('TC => Input Slippage Textbox as 4 Decimal Places', () => {
            //clear slippage textbox
            liquidity.clear_slippage_textbox()

            //enter slippage textbox
            liquidity.enter_slippage_textbox('0.1234')

            //assert
            liquidity.validate_slippage_textbox('error message')
        })

        it('TC => Check Default Tx Deadline', () => {
            //assert
            liquidity.validate_tx_deadline_default('20')
        })

        it('TC => Input Tx Deadline Textbox Less Than 20 Min', () => {
            //clear tx deadline textbox
            liquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            liquidity.enter_tx_deadline_textbox('10')

            //assert
            liquidity.validate_tx_deadline_textbox('Less than 20')
        })

        it('TC => Input Tx Deadline Textbox as Character', () => {
            //clear tx deadline textbox
            liquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            liquidity.enter_tx_deadline_textbox('Ten')

            //assert
            liquidity.validate_tx_deadline_textbox('character')
        })

        it('TC => Input Tx Deadline Textbox as Symbol', () => {
            //clear tx deadline textbox
            liquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            liquidity.enter_tx_deadline_textbox('!@#$')

            //assert
            liquidity.validate_tx_deadline_textbox('symbol')
        })

        it('TC => Input Tx Deadline Textbox as Negative Number', () => {
            //clear tx deadline textbox
            liquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            liquidity.enter_tx_deadline_textbox('-20')

            //assert
            liquidity.validate_tx_deadline_textbox('negative number')
        })

        it('TC => Input Tx Deadline Textbox as 4 Decimal Places', () => {
            //clear tx deadline textbox
            liquidity.clear_tx_deadline_textbox()

            //enter tx deadline textbox
            liquidity.enter_tx_deadline_textbox('2.0')

            //assert
            liquidity.validate_tx_deadline_textbox('4 decimal places')
        })

        it('TC => Click Close Setting', () => {
            //click close setting
            liquidity.click_close_setting_btn()

            //assert
            liquidity.validate_click_close_setting_btn()
        })

        it.skip('TC => Click History Button', () => {
            //click close setting
            liquidity.click_close_setting_btn()
        })

        it('TC => Click Find Other LP Tokens', () => {
            //click close setting
            liquidity.click_find_other_lp_btn()

            //assert
            liquidity.validate_click_find_other_lp_btn('Import Pool')
        })

        it('TC => Click Add Liquidity', () => {
            //click liquidity menu
            liquidity.click_liquidity_menu_btn()
            //click close setting
            liquidity.click_add_liquidity_btn()

            //assert
            liquidity.validate_click_add_liquidity_btn('Add Liquidity')
        })




        afterEach(() => {
            cy.wait(300)
        })
    })

    after(() => {
        cy.disconnectMetamaskWalletFromAllDapps()
        cy.visit(base_url)
    })
})