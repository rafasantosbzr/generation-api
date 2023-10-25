const express = require('express');
const { listarAlunos, cadastrarAluno, obterAluno, atualizarAluno, excluirAluno } = require('./controladores/alunos');
const rotas = express();

rotas.get('/', (req, res) => {
    res.send('Bem vindo ao servidor')
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