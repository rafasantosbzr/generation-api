DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id_aluno serial PRIMARY KEY,
    nome TEXT NOT NULL,
    idade INT NOT NULL,
    primeira_nota DECIMAL(3, 2) NOT NULL,
    segunda_nota DECIMAL(3, 2) NOT NULL,
    professor_nome TEXT NOT NULL,
    sala INT NOT NULL
);