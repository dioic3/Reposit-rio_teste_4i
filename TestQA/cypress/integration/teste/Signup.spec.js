/// <reference types="cypress" />

import informações from "../PageObjects/Informações";
import Signup from "../PageObjects/Signup";

describe("Teste para criar suas informações", function() {
    it("Sign up", function() {
        const logon = new Signup()
        logon.visit()
        logon.email_registro(`${Cypress.env('email')}`)
        logon.button()
    })
    it('Criando informações', function() {
        const account = new informações()
        account.gênero()
        account.first_name(`${Cypress.env('name')}`)
        account.last_name(`${Cypress.env('second')}`)
        account.password(`${Cypress.env('passwd')}`)
        account.company('AHOWWWW')
        account.address('Não sei o meu endereço, me ajude')
        account.address2('Apartamento 1')
        account.city('cidade')
        account.state()
        account.postalcode('0101001')
        account.country()
        account.phone('40028922')
        account.button()
    })

})