DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id_aluno serial PRIMARY KEY,
    nome TEXT NOT NULL,
    idade INT NOT NULL,
    primeira_nota TEXT NOT NULL,
    segunda_nota TEXT NOT NULL,
    professor_nome TEXT NOT NULL,
    sala TEXT NOT NULL
);