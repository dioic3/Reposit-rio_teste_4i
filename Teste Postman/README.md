# Primeiro Teste

Teste realizado no Postman

Foi feito um projeto de automação utilizando a API pública com os seguintes cenários:

1.	Criar um funcionário.
2.	Verificar se o empregado foi criado corretamente.
3.	Exclua o empregado.
4.	
Obs: Sempre validando o Status Code e a mensagem exibida no corpo do texto.

Para realizar o teste que eu fiz no Postman, recomendo que faça download do aplicativo no site (https://www.postman.com/downloads/), e depois faça download do arquivos deixados por mim na pasta de Postman.

Para realizar o teste, siga esses passos:

1.	Abra o “request” com o nome “Criar um funcionário”.
Detalhe sobre o script na aba Testes: Esse script testa o status code, o corpo do texto, a mensagem que contém no corpo do texto e as informações que estão sendo criadas.
2.	Assim que abrir o request “Criar um funcionário”, clique no botão “Send”. 
![alt text](https://media.discordapp.net/attachments/902270296155906159/918594211232759888/unknown.png)

Na figura acima, é esperado esse resultado na aba Body.

![alt text](https://media.discordapp.net/attachments/902270296155906159/918594737248825344/unknown.png)

Detalhe importante: há uma variável global chamada “id” que salva o valor do id do funcionário para que seja deletado.

3.	Realizando o teste para criar o funcionário, abra o request com o nome “Deletar funcionário” e verifique se o valor do id do funcionário está salvo na variável global “id”.

![alt text](https://media.discordapp.net/attachments/902270296155906159/918595715477942412/unknown.png)

5.	Verificando se está salvo, aperte no botão “Send” para deletar o funcionário.

Detalhe importante: O script criado no request “Deletar funcionário” verifica o status code, o corpo do texto, a mensagem que contém no corpo do texto e a mensagem de sucesso. Também o id criado no request “Criar funcionário” é salvo na variável global.

Observação importante: Na pasta do "Teste Postan" existe o relatório do teste, para verificar o resultado do teste basta fazer o download do arquivo e abrir no próprio Postman, ou abrir no GitHub e analisar o código.

Atenciosamente, Joyce.


