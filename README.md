# Gerenciamento de Funcionários

Este projeto é um exercício para praticar o uso de classes e exceções em JavaScript. A aplicação permite o cadastro de gerentes e desenvolvedores, armazenando as informações em `localStorage` e exibindo-as em tabelas dinâmicas.

## Funcionalidades

- Cadastro de Gerentes
  - Nome
  - Idade
  - Departamento

- Cadastro de Desenvolvedores
  - Nome
  - Idade
  - Linguagem de programação

- Exibição das informações em tabelas
- Ações para apresentar e descrever o trabalho dos gerentes e desenvolvedores

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **index.html**: Contém a estrutura básica da aplicação, incluindo formulários para cadastro e tabelas para exibição dos dados.

2. **script.js**: Contém a lógica da aplicação, incluindo as definições de classes, métodos para manipulação de dados e eventos.

3. **styles.css** (opcional): Para estilização da aplicação (caso você adicione).

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/bobmw/gerenciamentoDeFuncionarios.git
   cd gerenciamentoDeFuncionarios
   ```

2. **Abra o arquivo `index.html` em um navegador.**

3. **Cadastre Gerentes e Desenvolvedores:**
   - Preencha os campos obrigatórios e clique no botão correspondente para cadastrar.

4. **Veja as tabelas:**
   - As informações cadastradas serão exibidas nas tabelas abaixo.

5. **Interaja com as tabelas:**
   - Clique nos botões "Apresentar", "Trabalhar" ou "Gerenciar" para ver as respectivas mensagens.

## Classes e Métodos

### Classes

- **Funcionario**
  - Método `seApresentar()`: Retorna uma apresentação do funcionário.
  - Método `trabalhar()`: Retorna uma mensagem indicando que o funcionário está trabalhando.

- **Gerente** (herda de `Funcionario`)
  - Método `gerenciar()`: Retorna uma mensagem indicando que o gerente está gerenciando seu departamento.

- **Desenvolvedor** (herda de `Funcionario`)
  - Método `programar()`: Retorna uma mensagem indicando que o desenvolvedor está programando na sua linguagem especificada.

### Exceções

A aplicação lança exceções para garantir que todos os campos obrigatórios sejam preenchidos antes do cadastro. Caso contrário, uma mensagem de erro será exibida.
