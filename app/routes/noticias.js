module.exports = function(application){

	application.get('/noticias', function(req, res){
		application.app.controllers.noticiasController.noticias(application, req, res);
	});

	
	application.get('/noticia', function(req, res){
		application.app.controllers.noticiasController.noticia(application, req, res);
	});
};

