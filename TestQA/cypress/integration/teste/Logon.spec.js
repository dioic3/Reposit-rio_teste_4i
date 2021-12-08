/// <reference types="cypress" />
//visita a pagina 

import Login from '../PageObjects/Login'
describe('Should test the login', function() {

    it('Teste de login', function() {
        const logon = new Login()
        logon.visit()
        logon.button()
        cy.get('#center_column > :nth-child(2) > p').should('contain', 'There is 1 error')
        cy.get('ol > li').should('contain', 'An email address required.')
    })

    //cenário pedido: Login invalido
    it('Login invalido', function() {
            const logon = new Login()
            logon.visit()
            logon.email_info(`${Cypress.env('emailinvalido')}`)
            logon.senha_info(`${Cypress.env('passwd')}`)
            logon.button()
            cy.get('ol > li').should('contain', 'Invalid email address.')
            cy.get('#center_column > :nth-child(2) > p').should('contain', 'There is 1 error')

        }) //teste de login valido
    it('Login valido', function() {
        const logon = new Login()
        logon.visit()
        logon.email_info(`${Cypress.env('email')}`)
        logon.senha_info(`${Cypress.env('passwd')}`)
        logon.button()
        cy.get('.info-account').should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    })





})