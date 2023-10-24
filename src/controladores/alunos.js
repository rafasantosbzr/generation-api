const knex = require('../conexao');

//faz uma listagem de todos os alunos cadastrados no sistema
const listarAlunos = async (req, res) => {
    
    try {
        const alunos = await knex("alunos");
        
        return res.status(200).json(alunos);
    } catch (error) {
        return res.status(500).json('Erro interno do servidor');
    }
};

//faz o cadastro de um novo aluno no sistema inserindo todos os dados obrigatórios no corpo da requisição
const cadastrarAluno = async (req, res) => {
    const { nome, idade, primeira_nota, segunda_nota, professor_nome, sala } = req.body;

    if (!nome || !idade || !primeira_nota || !segunda_nota || !professor_nome || !sala) {
        return res.status(400).json('Todos os campos são obrigatórios');
    }

    try {
        const novoAluno = await knex('alunos').insert({
            nome,
            idade,
            primeira_nota,
            segunda_nota,
            professor_nome,
            sala
        }). returning('*');

        return res.status(201).json(novoAluno);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Erro interno do servidor')
    }
};

//faz a busca de um aluno no sistema a partir do id do aluno informado como parâmetro de rota
const obterAluno = async (req, res) => {
    const { id }  = req.params;

    try {
    const alunoLocalizado = await knex('alunos').where('id', id).returning('*');

    if(alunoLocalizado.length === 0){
        return res.status(404).json('Aluno não encontrado');
    }

    return res.status(200).json(alunoLocalizado[0]);
    } catch (error) {
    return res.status(500).json('Erro interno do servidor');
    }
}

//faz a atualização das informações de um aluno no sistema informando os campos a serem alterados no corpo da requisição
const atualizarAluno = async (req, res) => {
    const { id } = req.params;
    const { nome, idade, primeira_nota, segunda_nota, professor_nome, sala } = req.body;

    if (!nome && !idade && !primeira_nota && !segunda_nota && !professor_nome && !sala) {
        return res.status(404).json('Informe ao menos um campo para atualizaçao do cadastro do aluno');
    }

    try {
        const alunoLocalizado = await knex('alunos').where('id', id).returning('*');

    if(alunoLocalizado.length === 0){
        return res.status(404).json('Aluno não encontrado');
    }

    const body = {};
        const params = [];
        let n = 1;

        if (nome) {
            body.nome = nome;
            params.push(`nome = $${n}`);
            n++;
        }

        if (idade) {
            body.idade = idade;
            params.push(`idade = $${n}`);
            n++;
        }

        if (primeira_nota) {
            body.primeira_nota = primeira_nota;
            params.push(`primeira_nota = $${n}`);
            n++;
        }

        if (segunda_nota) {
            body.segunda_nota = segunda_nota;
            params.push(`segunda_nota = $${n}`);
            n++;
        }

        if (professor_nome) {
            body.professor_nome = professor_nome;
            params.push(`professor_nome = $${n}`);
            n++;
        }

        if (sala) {
            body.sala = sala;
            params.push(`sala = $${n}`);
            n++;
        }

        const valores = Object.values(body);
        valores.push(id);
        const alunoAtualizado = await knex('alunos').where('id', id).update(body);

        if (alunoAtualizado.length === 0) {
            return res.status(400).json('Falha na atualização das informações do cadastro do aluno');
        }

        return res.status(200).json('As informações do aluno foram atualizadas com sucesso');
    } catch (error) {
        return res.status(500).json('Erro interno do servidor');
    }
};

//faz a exclusão do cadastro de um aluno no sistema a partir do id do aluno informado como parâmetro de rota
const excluirAluno = async (req, res) => {
    const { id } = req.params;

    try {
        const alunoEncontrado = await knex('alunos').where('id', id).returning('*');

        if (alunoEncontrado.length === 0) {
            return res.status(404).json('Aluno não encontrado');
        }

        const alunoExcluido = await knex('alunos').delete().where('id', id).returning('*');

        if (alunoExcluido.length === 0) {
            return res.status(400).json('Falha na exclusão do cadastro do aluno');
        }

        return res.status(200).json('O cadastro do aluno foi excluído com sucesso');
    } catch (error) {
        return res.status(500).json('Erro interno do servidor');
    }
};

module.exports = {
    listarAlunos,
    cadastrarAluno,
    obterAluno,
    atualizarAluno,
    excluirAluno
};