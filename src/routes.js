const express = require('express');
const mysql = require('mysql');

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

app.listen(3333, ()=>{ // entrar pela porta 3333

    console.log('Entre na porta');
});