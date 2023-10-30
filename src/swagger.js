const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Sistema Escolar - Generation',
      description: 'Sistema de cadastro de alunos através de operações de CRUD'
    },
    host: 'localhost:3000'
  };
  
  const outputFile = './swagger-output.json';
  const routes = ['./src/rotas.js'];
  
  /* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */
  
  swaggerAutogen(outputFile, routes, doc);