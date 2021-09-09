var dbconnection =  require('../../config/dbconnection');

module.exports = function(app){

    var connection = dbconnection();    

    app.get('/formularios',function(req, res){

        connection.query('select * from dados',function(error, result){
            res.render('formularios/formulario',{formularios: result});
        });
    });
};