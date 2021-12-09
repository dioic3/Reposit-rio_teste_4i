# Segundo teste

Teste realizado no Cypress

Foi feito um projeto de automação com os seguintes cenários:

1.  Login válido.
2.  Login inválido.
3.  Realizar o cadastro.

Obs: Foi requerido utilizar o chrome para realizar o teste.

# Qual é a lógica do código?

1.	Abra o “request” com o nome “Criar um funcionário”.
Detalhe sobre o script na aba Testes: Esse script testa o status code, o corpo do texto, a mensagem que contém no corpo do texto e as informações que estão sendo criadas.
2.	Assim que abrir o request “Criar um funcionário”, clique no botão “Send”. 
Detalhe importante: há uma variável global chamada “id” que salva o valor do id do funcionário para que seja deletado.
3.	Realizando o teste para criar o funcionário, abra o request com o nome “Deletar funcionário” e verifique se o valor do id do funcionário está salvo na variável global “id”.
4.	Verificando se está salvo, aperte no botão “Send” para deletar o funcionário.
Detalhe importante: O script criado no request “Deletar funcionário” verifica o status code, o corpo do texto, a mensagem que contém no corpo do texto e a mensagem de sucesso. Também o id criado no request “Criar funcionário” é salvo na variável global.

O arquivo na pasta chamada "relatório do teste" contém o relatório do teste, para verificar o resultado do teste basta fazer o download do arquivo.


