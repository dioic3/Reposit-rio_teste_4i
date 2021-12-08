/// <reference types="cypress" />
//ações necessárias para realizar o login
class Login {
    //eu preciso visitar a pagina
    //clicar no botão de "Sign up"
    //colocar as credenciais
    visit() {
            cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        }
        //salvando as informações do e-mail nessa função
    email_info(email) {
        const em = cy.get('[id=email]')
            //em.clear()
        em.type(email)
        return this // retorna a referência ao objeto que está chamando a função

    }
    senha_info(senha) { //estou uma parametro chamado senha
        const se = cy.get('[id = passwd]') //quando busquei qual era o id aceito
            //constava que era "id=passwd" 
            //outro detalhe para você -> "Joyce", quando você define const é criada uma variavel cujo o valor é fixo
        se.clear()
        se.type(senha)
        return this // vou retornar a referência que está na função
    }
    button() {
        const botão = cy.get('[id = SubmitLogin]')
        botão.click()
    }

}
export default Login //observação importante do que você pesquisou: Cada arquivo é considerado um módulo e todas as variáveis e funções que ele 
// possui são acessíveis dentro do arquivo ou "módulo" declarado por você, ao menos que você importe