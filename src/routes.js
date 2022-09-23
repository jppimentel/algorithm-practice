const {Router} = require('express');
const SumController = require('./controllers/SumController');
const ConvertToBinary = require('./controllers/ConvertToBinary');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.send({message: "Server in on!"})
});

routes.post('/sum', SumController.sum);
routes.post('/convertToBinary', ConvertToBinary.convertToBinary);



module.exports = routes;