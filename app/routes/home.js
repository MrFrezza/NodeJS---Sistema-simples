module.exports = function(app){
	app.get('/', function(req, res){
		app.app.controllers.homeController.index(app, req, res);
	});
};