const knex =  require('../database/index');

module.exports={

    async raiz(req, res){
        const result = await console.log('Servidor requisitado');

        return res.send('It works!');
    },
    
    async alunos(req, res){
        try{

            const result = await knex('alunos');
            return res.json(result);        

        }catch(error){
            return res.status(400).json({error: error.message});
        };
    },

    async searchName(req, res){
        try {
             const { nomeAluno } = req.params;     
             const result = await knex('alunos').where('nome_alu', 'like', '%' + nomeAluno + '%');

             return res.json(result);

        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }
}
