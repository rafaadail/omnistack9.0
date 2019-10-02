const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json(req.body);
});

// exportando as rotas
module.exports = routes;