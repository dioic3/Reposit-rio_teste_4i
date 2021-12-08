/// <reference types="cypress" />
//informações de registro

class informações {

    gênero() {
        const gene = cy.get('[id=id_gender2]')
        gene.click()
        return this
    }
    first_name(name) {
        const nome = cy.get('[id=customer_firstname]')
        nome.clear()
        nome.type(name)
        return this
    }
    last_name(second) {
        const lastaname = cy.get('[id=customer_lastname]')
        lastaname.clear()
        lastaname.type(second)
        return this
    }
    password(passwd) {
        const senha = cy.get('[id=passwd]')
        senha.clear()
        senha.type(passwd)
        return this
    }
    company(empresa) {
        const comp = cy.get('[id=company]')
        comp.clear()
        comp.type(empresa)
        return this
    }
    address(endereço) {
        const end = cy.get('[id=address1]')
        end.clear()
        end.type(endereço)
        return this
    }
    address2(endereçodois) {
        const end2 = cy.get('[id=address2]')
        end2.clear()
        end2.type(endereçodois)
        return this
    }
    city(cidade) {
        const city1 = cy.get('[id=city]')
        city1.clear()
        city1.type(cidade)
        return this
    }
    state() {
        const state1 = cy.get('[id=id_state]')
        state1.select('Alaska')
        return this
    }
    postalcode(cep) {
        const cep1 = cy.get('[id=postcode]')
        cep1.clear()
        cep1.type(cep)
        return this
    }
    country() {
        const pais = cy.get('[id=id_country]')
        pais.select('United States')
        return this
    }
    phone(number) {
        const numero = cy.get('[id=phone_mobile]')
        numero.clear()
        numero.type(number)
        return this
    }
    button() {
        const botao = cy.get('[id=submitAccount]')
        botao.click()
    }
}
export default informações