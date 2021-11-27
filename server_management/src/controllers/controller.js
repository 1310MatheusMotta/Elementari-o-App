const knex = require('../database/index');


module.exports = {

    async raiz(req, res){
        res.send('It Works !!');

    },

    async alunos(req, res){ //dados gerais alunos
        const results = await knex('alunos');
        return res.json(results);
    },

    async searchNames(req, res){ //filtro alunos
        try {
             const { nome_alu } = req.params;     
             const result = await knex('alunos').where('nome_alu', 'like', '%' + nome_alu + '%');

             return res.json(result);

        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },


}