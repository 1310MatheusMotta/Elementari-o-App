const express = require('express');
const mysql = require('mysql');

const connection = mysql.createPool({  // conexão com o banco 

    host: 'localhost',
    user: 'root',
    password: null,
    database: 'projeto_04'
});

const app = express();

app.get('/alunos', function(req, res){ 

    connection.getConnection(function(err, connection){ 

        connection.query('SELECT * FROM `alunos`', function(error, results){ // consulta na tabela

                // if(error) throw error; 
                res.send(results); 
        });
    });
});

app.listen(3333, ()=>{ 

    console.log('Entre na porta');
});