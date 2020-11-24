/// <reference types="Cypress" />


describe('Validar Funcionalidades Unimed', () => {

    before(() => {

     cy.visit('https://www.unimed.coop.br/')
     cy.reload()
    

    })


    it('Acessar Guia Medico', () => {

        //Acessar o Guia Medico
        cy.get('#btnMenuResponsivo')
        .click()
        cy.get('#menuPrincipalItens > ul > :nth-child(2) > a')
        .click()
        
        //Pesquisar no RJ
        cy.get('#campo_pesquisa')
        .type('Rio de Janeiro')

        //Clicar no Botao Pesquisar
        cy.get('#btn_pesquisar')
        .click()

        //Marcar Radio Button
        cy.get('.margin-bottom > :nth-child(1) > input')
        .click()

        //Clicar no Botao Continuar
        cy.get('.btn-success')
        .click()

      
    })
    
    
    it('Validar que Exibiu as Especialidades', () => {

        cy.get('#resultado0 > .resultado-resumido > :nth-child(3) > #txt_especialidade')
        .should('contain', 'Especialidade')
     
    })

    it('Validar que Exibiu Rio de Janeiro', () => {

        cy.get('#resultado0 > .resultado-resumido > #txt_endereco > p')
        .should('contain', 'Rio de Janeiro')
     
    })

    it('Validar que NAO Exibe Sao Paulo na Pagina 1', () => {

        cy.get('#column-1')
        .should('not.to.be.equal', 'Sao Paulo')
        
    })

    it('Acessar pagina 2', () => {

        cy.get('.span12 > ul > :nth-child(4) > a')
        .click()
    })

    it('Validar que NAO Exibe Sao Paulo na Pagina 2', () => {

        cy.get('#column-1')
        .should('not.to.be.equal', 'Sao Paulo')
        
    })

    it('Acessar pagina 3', () => {

        cy.get('.span12 > ul > :nth-child(5) > a')
        .click()
    })

    it('Validar que NAO Exibe Sao Paulo na Pagina 3', () => {

        cy.get('#column-1')
        .should('not.to.be.equal', 'Sao Paulo')
        
    })

})
