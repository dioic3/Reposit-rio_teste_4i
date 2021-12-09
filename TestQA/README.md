# Segundo teste

Teste realizado no Cypress

Foi feito um projeto de automação com os seguintes cenários:

1.  Login válido.
2.  Login inválido.
3.  Realizar o cadastro.

Obs: Foi requerido utilizar o chrome para realizar o teste.

O código do teste de cypress está localizada na pasta de "TestQA":

![alt text](https://media.discordapp.net/attachments/902270296155906159/918609004446486588/unknown.png)

Clique nessa pasta e terá várias pastas:

![alt text](https://media.discordapp.net/attachments/902270296155906159/918614760923226132/unknown.png?width=1025&height=286)

Clique na pasta chamada "integration" e terá mais 2 pastas:

![alt text](https://media.discordapp.net/attachments/902270296155906159/918609196558188614/unknown.png?width=1025&height=179)

As pastas na imagem acima contém os códigos do teste, e está comentado de acordo com a minha lógica. Quando eu abro o arquivo no Visual Studio Code, você vai localizar esses arquivos da seguinte forma:

![alt text](https://media.discordapp.net/attachments/902270296155906159/918609868007567461/unknown.png)

A pasta "PageObjects" tem como objetivo separar os elementos e ações das páginas dos cenários de automação de testes, ou seja, é criado uma separação entre os testes e as interação com as telas da aplicação. 
As vantagens no uso do PageObjects são: 
1.  Facilidade na leitura e entendimento dos testes;

Um exemplo desse tópico seria quando eu estava fazendo o PageObjects de "Informações" e precisava procurar os "ids" respectivos na página de Cadastro.

![alt text](https://media.discordapp.net/attachments/902270296155906159/918618114994892820/unknown.png?width=1006&height=473)

Eu precisava criar um classe para manipular as informações de registro, ou seja, precisava fazer a chamada de uma ou mais funções para puxar as informações para realizar o cadastro.

2.  Reuso de código mais simplicado.

A pasta "teste" tem como objetivo realizar todas as ações do teste de automação, sendo assim realizar o login e o cadastro de informações.

# Mas Joyce, qual é a lógica do código?

Para entender como o código foi feito, é necessário entender para quais cenários o código do teste foi criado. O código foi feito em JavaScript para entender os cenários de Login válido, inválido e cadastro de conta no site.

Os arquivos de "PageObjects" são nomeados como Informações, Login e SingUp. Eles possuem as classes para realizar as ações necessárias de Login, Sing Up e Cadastro de conta.

![alt text](https://media.discordapp.net/attachments/902270296155906159/918630211011096646/unknown.png?width=705&height=346)

O código acima é um dos arquivos da pasta "PageObjects", e contém uma classe que realiza o Sing Up nesta parte do site usado para realizar o teste, veja a imagem abaixo:

![alt text](https://media.discordapp.net/attachments/902270296155906159/918631384539611146/unknown.png?width=854&height=351)

Sendo assim, pode-se dizer que a classe contem três "comandos":
1.  visit() -> visita o link da página;
2.  email_registro() -> armazena o e-mail salvo no arquivo do cypress.json e retorna dentro da função;
3.  button() -> serve para clicar no botão "Create an account".

![all text](https://media.discordapp.net/attachments/902270296155906159/918633886341271592/unknown.png)

Na imagem acima, esse código está localizado na pasta "Teste" e eu importo as classes "Sign Up" e "Informações" para o código fonte, e eu marquei em vermelho a função que entra com o e-mail no arquivo cypress.json e realiza o "Create an account".


