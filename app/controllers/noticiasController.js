
module.exports.noticias = function(app, req, res){
	var connection =  app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias(function(error, result){
		res.render("noticias/noticias", {noticias : result});
	});
}

module.exports.noticia = function(app, req, res){
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	var id_noticia = req.query;
	console.log(id_noticia);

	noticiasModel.getNoticia(id_noticia, function(erro, result){
		res.render('noticias/noticia', {noticia : result});
	});
}