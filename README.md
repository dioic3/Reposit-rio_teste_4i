# Test-QA-4i

Teste realizado no Postman e Cypress

Olá, meu nome é Joyce!

Espero que todos estejam bem. Essa é a minha primeira vez colocando algum projeto no GitHub, e espero que esteja tudo organizado para o entendimento de vocês. Vale ressaltar que fiz o projeto conforme o que foi entendido por mim, portanto eu deixo em ênfase a importância da pesquisa e aprimoramento desse projeto.

Para o entendimento do primeiro teste, é necessário dar um contexto sobre o que são as APIs e sua importância para a área de desenvolvimento de softawares, aplicativos ou sistemas. Sendo assim, a API é um conjunto de normas que possibilita a comunicação entre plataformas através de padrões e protocolos definidos pelo seu criador ou empresa responsável. Como também, possuem um formato pré-definido de dados para o compartilhamento de informações entre os sistemas, como o XML ou o YAML. 

Nas aplicações Web, o mais utilizado é o JSON, mostrando que existe um padrão adicional chamado REST ou conhecido por outro termo “API RESTful”. Existe uma arquitetura composta de princípios e regras que permitem a padronização e a criação de projetos com interfaces definidas, conhecida como protocolo HTTP.

Primeiro teste:

O Postman é uma ferramenta de fácil utilização com uma rica interface, e pode ser utilizada para testar serviços RESTful (Web APIs) por meio do envio de requisições HTTP e da análise do seu retorno.

Foi feito um projeto de automação utilizando a API pública com os seguintes cenários:

1.	Criar um funcionário.
2.	Verificar se o empregado foi criado corretamente.
3.	Exclua o empregado.
Obs: Sempre validando o Status Code e a mensagem exibida no corpo do texto.
Para realizar o teste que eu fiz no Postman, recomendo que faça download do aplicativo no site (https://www.postman.com/downloads/), e depois acesse no meu repositório uma pasta “Teste employee”. Na pasta contém a collection criada por mim e um relatório do teste.

Para realizar o teste, siga esses passos:

1.	Abra o “request” com o nome “Criar um funcionário”.
Detalhe sobre o script na aba Testes: Esse script testa o status code, o corpo do texto, a mensagem que contém no corpo do texto e as informações que estão sendo criadas.
2.	Assim que abrir o request “Criar um funcionário”, clique no botão “Send”. 
Detalhe importante: há uma variável global chamada “id” que salva o valor do id do funcionário para que seja deletado.
3.	Realizando o teste para criar o funcionário, abra o request com o nome “Deletar funcionário” e verifique se o valor do id do funcionário está salvo na variável global “id”.
4.	Verificando se está salvo, aperte no botão “Send” para deletar o funcionário.
Detalhe importante: O script criado no request “Deletar funcionário” verifica o status code, o corpo do texto, a mensagem que contém no corpo do texto e a mensagem de sucesso. Também o id criado no request “Criar funcionário” é salvo na variável global.

O arquivo na pasta chamada "relatório do teste" contém o relatório do teste, para verificar o resultado do teste basta fazer o download do arquivo.


