const express = require('express');
const controller = require('../controller/controller');
const routes = express.Router();

routes.get('/', controller.raiz );
routes.get('/alunos', controller.alunos);
routes.get('/alunos/:nome_alu', controller.getClassmatesNames);

module.exports = routes;





// const express = require('express');
// const mysql = require('mysql');

// const connection = mysql.createPool({  // conexão com o banco 

//     host: 'localhost',
//     user: 'root',
//     password: null,
//     database: 'projeto_04'
// });

// const app = express();

// app.get('/alunos', function(req, res){ 
//     connection.getConnection(function(err, connection){ 
//         connection.query('SELECT * FROM `alunos`', function(error, results){ // consulta na tabela

//                 if(error) throw error; 
//                 res.send(results); 
//         });
//     });
// });



// app.get('/alunosfiltro:filtro', function(req, res){ 

//     const  filtro = req.params.filtro;
//     console.log(filtro);

// /*
//     const filtro = req.params;
//     console.log(filtro);
//     connection.getConnection(function(err, connection){

//         connection.query('SELECT * FROM `alunos` where nome_alu ' + 'like' + '%' + filtro +'%', function(error, results){ // consulta na tabela

//                 if(error) throw error; 
//                 res.send(results); 
//         });
//     });
// */
// res.send('ok')
// });

// app.listen(3333, ()=>{ 

//     console.log('Servidor on - Porta 3333');
// });


// // const other = express();

// // other.get('/instituicao', function(req, res){
// //     connection.getConnection( function(err, connection){
// //         connection.query('SELECT * FROM `instituicao`', function(error, results){

// //             if(error) throw error
// //             res.send(results)
// //         })
// //     })
// // });

// // other.listen(5656, ()=>{
// //     console.log('Outra porta')
// // })