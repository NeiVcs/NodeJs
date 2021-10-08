module.exports = function(application){    

    application.get('/form',function(req, res){
        application.app.controllers.admin.form(application, req, res);
    });
    
    application.post('/noticias/salvar',function(req, res){
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });

    application.post('/noticias/deletar',function(req, res){
        application.app.controllers.admin.noticias_deletar(application, req, res);
    });
};