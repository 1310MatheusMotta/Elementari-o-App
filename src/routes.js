const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { response } = require('express');

const connection = mysql.createPool({  // conexão com o banco 

    host: 'localhost',
    user: 'root',
    password: null,
    database: 'projeto_04'
});

const app = express();

app.get('/alunos', function(req, res){  //conexão com a tabela de alunos 

    connection.getConnection(function(err, connection){ 

        connection.query('SELECT * FROM `alunos`', function(error, results){ //vai fazer uma consulta na tabela

                // if(error) throw error; //se tiver erro ele vai avisar
                res.send(results); // se não tiver, vai retornar a resposta
        });
    });
});

app.get('/turmas', function(req, res){
    connection.getConnection(function(err, connection){
        connection.query('SELECT * FROM `turmas`', function(error, results){
            res.send(results);
        })
    })
})

app.listen(3333, ()=>{ // entrar pela porta 3333

    console.log('Entre na porta');
});

// function Connect(){

//         fetch('http://192.168.29.102:3333/tb_adminalunos')
//          .then(results=>results.json())
//          .then(users=>console.log(users))
// }