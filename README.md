# finder-backend

API desenvolvida para receber uma entrada do usuário e mostrar uma lista de sugestões relacionadas.
Para acessar o link da API publicada no railway, [clique aqui](https://finder-backend-production.up.railway.app/search).

## Features
- [x] Validar dados fornecidos
- [x] Salvar uma string de texto (uma sugestão) em um banco de dados
- [x] Consultar sugestões

## Tecnologias 
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDb](https://www.mongodb.com/)

## Começando
> OBS: E NECESSARIO ESTÁ COM UM GERENCIADOR DE PACOTES SENDO O YARN OU NPM INSTALADO NA MÁQUINA

#### Instalando dependências
```
$ yarn
```
or
```
$ npm install
```

## Executando

### Projeto
> OBS: E NECESSARIO CONFIGURAR UM ARQUIVO .ENV COM A STRING DE CONEXAO COM O MONGODB, CONFORME O ENV.EXAMPLE
```
$ yarn dev
```
or
```
$ npm run dev
```

## Documentação
Para mais detalhes sobre as rotas do projeto, [clique aqui.](https://documenter.getpostman.com/view/15611768/2s8Z72WC91)