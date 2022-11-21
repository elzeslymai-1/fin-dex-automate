///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>

describe('Login Page', () => {


    context('Check Login ', () => {
        //Arrange
        before(() => {
            cy.viewport(1920, 1080)
            cy.visit('https://dev.fin-dex.finstable.co.th/swap')
        })
        beforeEach(()=>{
            cy.viewport(1920, 1080)
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
                cy.acceptMetamaskAccess()
            });
        })

        it('Disconnect metamask', () => {
            cy.disconnectMetamaskWalletFromAllDapps()
            cy.visit('https://dev.fin-dex.finstable.co.th/swap')
        })

        it('Setup BitkubNext', () => {
            cy.get('.space-x-3 > :nth-child(1) > .relative').click()
            cy.get('.bitkub-next-gradient > .absolute').click()
        })

        
    })
})