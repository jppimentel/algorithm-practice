const {Router} = require('express');
const SumController = require('./controllers/SumController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.send({message: "Server in on!"})
});

routes.post('/sum', SumController.sum);



module.exports = routes;