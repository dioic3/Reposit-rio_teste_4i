/// <reference types="cypress" />
//ações necessárias para realizar o Sign up da página
class Signup {
    //eu preciso visitar a pagina 
    //clicar no botão de "Sign up"
    //colocar as credenciais necessárias para realizar o registro
    visit() {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    }
    email_registro(email) {
        const register = cy.get('[id=email_create')
        register.clear()
        register.type(email) //lembre-se que o email é um resultado esperado da função
        return this
    }
    button() {
        const botão = cy.get('[id=SubmitCreate]')
        botão.click()
    }
}
export default Signup