

# API Cadastro Escolar - New Generation

<div align="center">
<img src="https://i.imgur.com/e4zQzBV.png">
</div>

## Descrição do projeto

Este projeto foi realizado como parte do processo seletivo para a concessão de bolsas de estudo para um curso de AWS.

A aplicação oferece ao usuário uma experiência abrangente, permitindo não apenas a inserção de novos alunos no sistema, mas também a visualização e manipulação do perfil desses alunos através de operações de CRUD.

No futuro, novas implementações serão feitas a fim de incorporar autenticação JWT e criptografia de senha com o Bcrypt ao sistema, garantindo uma maior segurança no manuseio e armazenamento das informações tratadas.


## Funcionalidades

* Listar Alunos
* Cadastrar Aluno
* Detalhar Perfil do Aluno
* Editar Perfil do Aluno
* Excluir Perfil do Aluno

## Como executar o projeto

Para a execução do projeto, é necessário instalar o [Node.js](https://nodejs.org/en) em sua máquina.

1) Faça um clone do projeto

```bash
git clone
```

2) Abra o diretório do projeto em seu IDE preferido:

```bash
cd generation-api
```

3) Instale as bibliotecas e dependências de desenvolvimento:

```bash
npm i
```

4) Inicie o servidor local:

```bash
npm run dev
```

## Endpoints

**LISTAR ALUNOS**

#### `GET` `/alunos`

Esta é a rota que será chamada quando o usuário quiser listar todos os alunos cadastrados.
_____________________________

**CADASTRAR ALUNO**

#### `POST` `/alunos`

Esta é a rota que será utilizada para cadastrar um novo aluno no sistema.

Os dados do novo usuário devem ser informados no corpo da requisição, conforme o exemplo abaixo:

    {
        "nome": "John Doe",
        "idade": 14,
        "primeira_nota": "75.00",
        "segunda_nota": "80.00",
        "professor_nome": "Mrs. Smith",
        "sala": "F"
    }
_____________________________   

**DETALHAR PERFIL DO ALUNO**

#### `GET` `/alunos:/id`

Esta é a rota que permite a visualização dos dados de um aluno a partir do número identificador de seu perfil a ser passado como parâmetro de rota.
_____________________________  

**EDITAR PERFIL DO ALUNO**

#### `PUT` `/alunos/:id`

Esta é a rota que permite a atualização dos dados de um aluno a partir do número identificador de seu perfil a ser passado como parâmetro de rota.

Os dados de usuário a serem atualizados devem ser informados no corpo da requisição, conforme o exemplo abaixo:

    {
        "nome": "Jane Doe",
        "idade": 16,
        "primeira_nota": "90.00",
        "segunda_nota": "100.00",
        "professor_nome": "Mr. Smith",
        "sala": "A"
    }
_____________________________  

**EXCLUIR PERFIL DO ALUNO**

#### `DELETE` `/alunos/:id`

Esta é a rota que será chamada quando for necessário excluir o perfil de um aluno cadastrado a partir do número identificador de seu perfil a ser passado como parâmetro de rota.


## Tecnologias Utilizadas

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,git,postgres,vscode&perline=3)](https://skillicons.dev)


## Autor

[Rafael Santos Bezerra](https://github.com/rafasantosbzr)

