Passo a passo da criação do projeto

- Para iniciar o yarn
'''
yarn init -y
'''

- Adicionar no package.json
'''
"scripts": {
    "start": "node index.js",
  }
'''

- Adicionar o nodemon para gerenciar o reload do projeto sem precisar ficar derrubando e subindo o servidor
'''
yarn add -D nodemon
'''

- Alterar no package.json os scripts
'''
"scripts": {
    "start": "node index.js",
    "start-dev": "nodemon index.js"
  }
'''

- Para executar o programa com o nodemon (não precisa ficar terminando e subindo o servidor a toda modificação no código) basta digitar no terminal
'''
yarn start-dev
'''
Ou para usar o node (tem que ficar parando e subindo o servidor a cada modificação no código) digite:
'''
yarn start
'''

- Para adicionar o express
'''
yarn add express
'''

---- 

No terminal aberto na pasta de consumer 

- Para começar um novo projeto nele nós digitamos:
'''
yarn init -y
'''

- Para adicionar a biblioteca do fetch (faz requisições em outra api)
'''
yarn add node-fetch
'''