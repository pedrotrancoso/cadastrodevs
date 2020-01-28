const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs/incluir', DevController.store);
routes.put('/devs/atualizar', DevController.update);
routes.delete('/devs/deletar', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;