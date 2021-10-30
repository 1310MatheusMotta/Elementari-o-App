const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { response } = require('express');

const connection = mysql.createPool({  // conexão com o banco 

    host: 'localhost',
    user: 'root',
    password: null,
    database: 'projeto_02'
});

const app = express();

app.get('/tb_adminalunos', function(req, res){  //conexão com a tabela de alunos 

    connection.getConnection(function(err, connection){

        connection.query('SELECT * FROM `tb_adminalunos`', function(error, results, fields){

                if(error) throw error;
                res.send(results);
        });
    });
});

app.listen(3333, ()=>{

    console.log('Entre em https://localhost:3333/tb_adminalunos');
});

TextDecoderStream