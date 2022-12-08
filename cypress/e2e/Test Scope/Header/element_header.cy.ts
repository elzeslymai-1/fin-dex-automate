import { element_header } from "../../Page Model/Swap Page/element_header"
const header = new element_header()
describe('Login Page', () => {
    beforeEach(() => {
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

                header.click_connect_wallet()
                cy.acceptMetamaskAccess()
            });
        })
    })
    context('Check Element Header', () => {
        //Arrange
        before(() => {
            cy.viewport(1920, 1080)
            cy.visit('https://dev.fin-dex.finstable.co.th/swap')

            header.click_connect_wallet()
        })

        //ACT check header text findex
        it('check header text findex', () => {
            header.validate_header_text_findex()
        })

        //ACT check header text swap
        it('check header text swap', () => {
            header.validate_header_text_swap('Swap')
        })

        //ACT check header text liquidity
        it('check header text liquidity', () => {
            header.validate_header_text_liquidity('Liquidity')
        })

        //ACT check account button
        it(`Check Account button`, () => {
            header.clickaccount_button()
            //Asset
            header.validateaccount_filter_element('metamask', 'History', 'Setting', 'Disconnect')
            header.clickaccount_close() //close
        })

        //ACT check network button
        it(`check network button`, () => {
            header.clicknetwork_button()
            //Asset
            header.validatenetwork_filter_element('Select network', 'Bitkub Chain - Testnet', 'bkc', 'true')
            header.clicknetwork_close() // close 
        })

        //ACT check language button
        it('check language button', () => {
            header.clicklanguage_button()
            //Assert
            header.validatelanguage_filter_element('language', 'English', 'ไทย')
        })

        //ACT check mode window
        it('check mode window', () => {
            //Assert
            header.validatemode_window()
        })
    })
    context('Action Element Header', () => {
        //Arrange
        before(() => {
            cy.viewport(1920, 1080)
            cy.visit('https://dev.fin-dex.finstable.co.th/swap')

            header.click_connect_wallet()
        })

        //ACT thai language
        it('Thai language', () => {
            header.clicklanguage_action_thai()
            //Assert
            header.validateaction_language('แลกเปลี่ยน', 'แลกเปลี่ยน', 'แลกเปลี่ยน')
        })

        //ACT english language
        it('English language', () => {

            header.clicklanguage_action_eng()
            //Assert
            header.validateaction_language('Swap', 'Swap', 'Swap')
        })

        //ACT bright mode
        it('bright mode', () => {
            header.clickmode_window_button()
            //Assert
            header.validatemode_window()
        })

        //ACT header text swap
        it('header text swap', () => {
            header.clickheader_text_swap()
            //Asset
            cy.url().should('eq', 'https://dev.fin-dex.finstable.co.th/swap')
        })

        //ACT header text swap
        it('header text liquidity', () => {
            header.clickheader_text_liquidity()
            //Asset
            cy.url().should('eq', 'https://dev.fin-dex.finstable.co.th/liquidity')
        })

        //ACT header text findex
        it('header text findex', () => {
            header.clickheader_text_findex()
            //Asset
            cy.url().should('eq', 'https://dev.fin-dex.finstable.co.th/')
        })

    })
    after('Disconnect metamask', () => {
        cy.disconnectMetamaskWalletFromAllDapps()
        cy.visit('https://dev.fin-dex.finstable.co.th/swap')
    })
})








