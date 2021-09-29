module.exports.form = function(application, req, res){
    res.render('admin/form', {validacao:{}, noticia:{}});
}
module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;

    req.assert('titulo','Titulo é obrigatório.').notEmpty();
    req.assert('resumo','Resumo é obrigatório.').notEmpty();
    req.assert('resumo','Resumo deve conter entre 5 e 20 caracteres.').len(5, 20);
    req.assert('autor','Autor é obrigatório.').notEmpty();
    req.assert('data_noticia','Data é obrigatoria.').notEmpty();
    req.assert('noticia','Notícia é obrigatória.').notEmpty();
    req.assert('noticia','Notícia deve conter entre 10 e 100 caracteres.').len(10, 100);

    var erros = req.validationErrors();

    if(erros){
        res.render("admin/form", {validacao : erros, noticia : noticia});
        return;
    }

    var connection = application.config.dbconnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/home');
    });
}