const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Sistema Escolar - Generation',
      description: 'Sistema de cadastro de alunos através de operações de CRUD'
    },
    host: 'localhost:3000'
  };
  
  const outputFile = './swagger-output.json';
  const routes = ['./src/index.js', './src/rotas.js'];
  
  
  swaggerAutogen(outputFile, routes, doc);