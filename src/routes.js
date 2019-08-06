const express = require('express');

const routes = express.Router();

routes.get('/', (req,res) => {
    res.json({message: 'Entrou na rota raiz'});
});

routes.post('/dev', (req,res) => {
    res.json(req.body);
})

module.exports = routes;