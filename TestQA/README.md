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

![alt text](https://media.discordapp.net/attachments/879829009515561040/918650280978046986/unknown.png)

A pasta "PageObjects" tem como objetivo separar os elementos e ações das páginas dos cenários de automação de testes, ou seja, é criado uma separação entre os testes e as interação com as telas da aplicação. 
As vantagens no uso do PageObjects são: 
1.  Facilidade na leitura e entendimento dos testes;

Um exemplo desse tópico seria quando eu estava fazendo o PageObjects de "Login" e precisava procurar os "ids" respectivos na página de login.

![alt text](https://media.discordapp.net/attachments/879829009515561040/918651113450922024/unknown.png?width=1025&height=451)

Eu precisava criar um classe para manipular as informações de login, ou seja, precisava fazer a chamada de uma ou mais funções para puxar as informações para realizar o login.

2.  Reuso de código mais simplicado.

A pasta "teste" tem como objetivo realizar todas as ações do teste de automação, sendo assim realizar o login.

# Mas Joyce, qual é a lógica do código?

Para entender como o código foi feito, é necessário entender para quais cenários o código do teste foi criado. O código foi feito em JavaScript para entender os cenários de Login válido e inválido no site.

O arquivos de "PageObjects" é nomeado como Login.js. Ele possue a classs para realizar as ações necessárias de Login.

![alt text](https://media.discordapp.net/attachments/876949125671833654/918651668218908752/unknown.png?width=954&height=473)

O código acima é um dos arquivos da pasta "PageObjects", e contém uma classe que realiza o Login no site.

Sendo assim, pode-se dizer que a classe contem quatro "comandos":
1.  visit() -> visita o link da página;
2.  email_info() -> armazena o e-mail salvo no arquivo do cypress.json e retorna dentro da função;
3.  senha_info() -> armazena a senha salva no arquivo do cypress.json e retorna dentro da função
4.  button() -> serve para clicar no botão "Sign in".

![all text](https://media.discordapp.net/attachments/876949125671833654/918652362481102889/unknown.png?width=907&height=473)

Na imagem acima, esse código está localizado na pasta "Teste" e eu importo a classe "Login" para o código fonte, e eu marquei em rosa a função que entra com o e-mail no arquivo cypress.json e realiza o "Sign up".

As coisas que mencionei na "lógica do código" só foi 1% do que foi feito, recomendo que baixo o código e execute para tirar as suas próprias conclusões.

# Resultados do Teste

O resultado do primeiro teste que contém os cenários: Login válido e inválido.

![alt text](https://media.discordapp.net/attachments/902270296155906159/918640319401197648/unknown.png?width=886&height=473)

Observação importante: No meu repositório contém um arquivo de vídeo do teste sendo realizado, e o nome do arquivo é "Vídeo Teste.mp4".

![alt text](https://media.discordapp.net/attachments/902270296155906159/918646442275520543/unknown.png)

Atenciosamente, Joyce.
