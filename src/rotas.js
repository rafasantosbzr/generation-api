const express = require('express');
const { listarAlunos, cadastrarAluno, obterAluno, atualizarAluno, excluirAluno } = require('./controladores/alunos');
const rotas = express();

rotas.get('/', (req, res) => {
    res.send(
`
Página inicial do servidor.
\n
\nGET /alunos
\n//faz uma listagem de todos os alunos cadastrados no sistema
\n
\nPOST /alunos
\n//faz o cadastro de um novo aluno
\n
\nexemplo de request body json:
\n{
    \n"nome": "José",
    \n"idade": "30",
    \n"primeira_nota": "75,00",
    \n"segunda_nota": "80,00",
    \n"professor_nome": "Maria",
    \n"sala": "A"
\n}
\n
\nGET /alunos/:id
\n//faz a busca de um aluno no sistema pelo ID do aluno
\n
\nPUT /alunos/:id
\n//faz a atualização das informações de um aluno no sistema
\n
\nDELETE /alunos/:id
\n//faz a exclusão do cadastro de um aluno no sistema pelo ID do aluno
\n`
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