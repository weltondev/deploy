const mongoose = require('../database/index');
const Users = require('../models/users');

const usersControllers = {
    async listar(req, res) {
        try {
            const allUsers = await Users.find();

            return res.status(200).send({ allUsers })
        } catch (error) {
            console.log(error)
        }
    },

    async criar(req, res) {
        try {
            const newUser = await Users.create(req.body);

            return res.status(201).send(`User created!`);
        } catch (error) {
            console.log(error);

            return res.status(400).send({ erro: `${error}` });
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const user = await Users.findByIdAndUpdate(id, req.body);

            return res.status(200).send({ message: `User updated!` });
        } catch (error) {
            console.log(error);

            return res.status(400).send({ erro: `${error}` });
        }
    },

    async remover(req, res) {
        try {
           const { id } = req.params;
           const user = await Users.findByIdAndDelete(id);

           return res.status(200).send({ message: `User removed!` });
        } catch (error) {
            console.log(error);

            return res.status(400).send({ error: `${error}`})
        }
    }
}

module.exports = usersControllers