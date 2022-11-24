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
            //cy.acceptMetamaskAccess()
        });
    })
    context('Check Element Header', () => {
        //ACT check account button
        it(`Check Account button`, () => {
          cy.get('.wallet-address-gradient > .flex > .font-semibold').click()
          //Asset
          cy.get('.mt-3 > .flex >').should('contain', 'f774ff4eb4e4a06').and('have.length',(3))
          .and('have.attr','src',).and('contain','metamas')//logo and account  
          cy.get('svg[class="w-5 cursor-pointer text-[#0D9EA6]"]').should('have.attr','xmlns')
          .and('contain','http://www.w3.org/2000/svg')// copy button
          cy.get(':nth-child(2) > .flex >span').should('have.text','History') // History button
          cy.get(':nth-child(4) > .flex > span').should('have.text','Setting')// Setting button
          cy.get('.pt-4 > .flex > span').should('have.text','Disconnect')//Disconnect button 
          cy.get('.w-5').eq(5).click() //close
        })
    
        //ACT check network button
        it(`check network button`, () => {
          cy.get('.bg-gray-network > .flex > .font-semibold').click();
          //Asset
          cy.get('.text-xl').should('have.text', 'Select network')//text select network
          cy.get('.grid > .justify-between>.space-x-6>').should('have.text','Bitkub Chain - Testnet')
          .and('have.length',(2)).and('have.attr','src').and('contain','bkc')//logo bkc and network
          cy.get('.grid > .justify-between>.w-8').and('have.attr','aria-hidden').and('contain','true')//logo correct
          cy.get('.bg-white > :nth-child(1) > .w-5').click()//close  
        })
    
        //ACT check language button
        it('check language button',()=>{
          cy.get('button[id="headlessui-menu-button-:r1:"]').click();
          //Assert
          cy.get('.hidden>span>img').should('have.attr','src').and('contain','language')//logo language
          cy.get('a[id="headlessui-menu-item-:r9:"]').should('have.text','English')//text english
          cy.get('a[id="headlessui-menu-item-:ra:"]').should('have.text','ไทย')//text thai
        })
    
        //ACT check mode window
        it('check mode window',()=>{
          //Assert
          cy.get('.MuiFormGroup-root>label>span>span>span').should('have.length',(2))
        })
    })
    context('Action Element Header',()=>{
        //ACT thai language
        it('thai language',()=>{
            cy.get('button[id="headlessui-menu-button-:r1:"]').click();
            cy.get('.absolute>.flex>').eq(1).click();
            //Assert
            cy.get('#swap-page > .text-2xl').should('contain','แลกเปลี่ยน')
            cy.get('.text-center').should('contain','แลกเปลี่ยน')
            cy.get('#approve-token-and-swap > :nth-child(2)').should('contain','แลกเปลี่ยน')
        }) 

        //ACT english language
        it('english language',()=>{
            cy.get('[style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > .w-8').click();
            cy.get('.absolute>.flex>').eq(0).click();
            //Assert
            cy.get('#swap-page > .text-2xl').should('contain','Swap')
            cy.get('.text-center').should('contain','Swap')
            cy.get('#approve-token-and-swap > :nth-child(2)').should('contain','Swap')
        }) 
    })  

    context('action window mode',() =>{
        //ACT bright mode
        it('bright mode',() => {
          //cy.get('span[class="MuiTouchRipple-root css-w0pj6f"]').check();
          //cy.get('span[class="MuiSwitch-track css-1ju1kxc"]').click()
        })
    })
        // after('Disconnect metamask', () => {
        //     cy.disconnectMetamaskWalletFromAllDapps()
        //     cy.visit('https://dev.fin-dex.finstable.co.th/swap')
        // })      
    })
})

    
    
  


   