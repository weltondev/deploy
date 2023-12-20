const express = require('express');
const router = express.Router();
const usersControllers = require('./controllers/users.controllers');

router.get('/',usersControllers.listar);
router.post('/', usersControllers.criar);
router.put('/:id', usersControllers.atualizar);
router.delete('/:id', usersControllers.remover);

module.exports = router;