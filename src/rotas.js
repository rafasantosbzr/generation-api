const express = require('express');
const { listarAlunos, cadastrarAluno, obterAluno, atualizarAluno, excluirAluno } = require('./controladores/alunos');
const rotas = express();

rotas.get('/', (req, res) => {
    res.send(
`
Página inicial do servidor.

GET /alunos
//faz uma listagem de todos os alunos cadastrados no sistema

POST /alunos
//faz o cadastro de um novo aluno

exemplo de request body json:
{
    "nome": "José",
    "idade": "30",
    "primeira_nota": "75,00",
    "segunda_nota": "80,00",
    "professor_nome": "Maria",
    "sala": "A"
}

GET /alunos/:id
//faz a busca de um aluno no sistema pelo ID do aluno

PUT /alunos/:id
//faz a atualização das informações de um aluno no sistema

DELETE /alunos/:id
//faz a exclusão do cadastro de um aluno no sistema pelo ID do aluno
`
);

})
//faz uma listagem de todos os alunos cadastrados no sistema
rotas.get('/alunos', listarAlunos);

//faz o cadastro de um novo aluno
rotas.post('/alunos', cadastrarAluno);

//faz a busca de um aluno no sistema pelo id do aluno
rotas.get('/alunos/:id', obterAluno);

//faz a atualização das informações de um aluno no sistema
rotas.put('/alunos/:id', atualizarAluno);

//faz a exclusão do cadastro de um aluno no sistema pelo id do aluno
rotas.delete('/alunos/:id', excluirAluno);

module.exports = rotas;