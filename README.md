# Processo Seletivo Clubbi - Pessoa Desenvolvedora Frontend - Teste Técnico

Este repositório aborda as questões referentes ao desafio técnico proposto pela Clubbi para vaga de Dev Frontend

## 👩‍💻 Autora

<a href="https://github.com/lalanametala">
        <img src="https://avatars.githubusercontent.com/u/84039617?v=4" alt="Foto de Lalá Nametala no GitHub"/><br>

  [@Laís Nametala](https://github.com/lalanametala)
  
---
  
## :wrench: Dependências utilizadas

**Dependencies:** Docker, React, React Router, Redux Toolkit, Cypress e Material UI

**DevDependencies:** Vite, ESLint, StyleLint e Typescript 
  
 ---
 
   
## 👨‍💻 O que foi desenvolvido:
  
- Foi construída uma SPA (_single page application_) que consume as [API's dos Estudios Ghibli](https://ghibliapi.herokuapp.com/). 
  
- Foram implementadas três páginas de exibição de dados:
  - **Filmes**, que podem ser filtrados por nome e ordenados por: data de lançamento, tempo de duração, avaliação e em ordem alfabética dos títulos;
  - **Personagens**, que podem ser filtrados por nome e ordenados por: idade e em ordem alfabética dos nomes;
  - **Locais**, que podem ser filtrados por nome e ordenados por: água superficial e em ordem alfabética dos nomes;
 

![Preview](./clubbi2.gif)

 ---
  
## 📌 Instalação da aplicação
<h3>Para instalar a aplicação, siga os seguintes passos:</h3>

Pre-requisitos de sistema:
- Git
- Node

    
 Clone o repositório
  

```bash
  git clone git@github.com:lalanametala/frontend-test.git
```          
     
 
  Entre na pasta do repositório referente ao projeto
  
  ```bash
  cd frontend-test
  cd frontend-test-clubbi
```
  
Instale as dependências **[Caso existam]**

  ```bash
  npm install
```

Inicie a aplicação

  ```bash
  npm run dev
```

    
Execute os testes de ponta a ponta com:
    
          
   ```bash
  npm run cy
```

          
Execute os testes no navegador com: 
   
   
  ```bash
  npm run cy:open
```
  
---
## :whale: Rodando a aplicação no Docker
<h3>Para instalar a aplicação e utilizá-la via Docker, siga os seguintes passos:</h3>

    
 Clone o repositório caso não o tenha feito ainda
  

```bash
  git clone git@github.com:lalanametala/frontend-test.git
```          
   
 
  Entre na pasta do repositório referente ao projeto
  
  ```bash
  cd frontend-test
  cd frontend-test-clubbi
```
  
Instale as dependências **[Caso existam]**

  ```bash
  npm install
```


Execute a composição dos containers Docker

  ```bash
  docker-compose up -d
```
    
Para acessar a aplicação, navegue até 

  ```bash
  http://localhost:3000
```
    
#### Para executar os testes de ponta a ponta, execute os seguintes passos:
   
Abra um terminal do container do Cypress com:

   ```bash
  docker exec -it frontend-test-clubbi_cypress_1 bash
```
          
No terminal do container Cypress inicie a aplicação com: 
      
  ```bash
  npm run dev
```
    
Sem fechar o terminal anterior, em um novo terminal, acompanhe os testes de ponta a ponta com:
    
  ```bash
  docker logs --tail 1000 -f frontend-test-clubbi_cypress_1 
```

    
---


