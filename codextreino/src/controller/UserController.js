const User = require('../model/User');

const UserController = {
    signup(req, res) {
        const newUser = new User;
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        if (!newUser.name || !newUser.email || !newUser.password) {
            return res.status(400).json({ msg: "Inclua nome, email e senha" });

        }

        newUser.save()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            })
    },

    listUsers(req, res) {
        User.find()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            })
    },

    listUser(req, res) {
        const id = req.params.id
        User.findById(id)
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            })
    },

    deleteUser(req, res) {
        const id = req.params.id
        User.findByIdAndDelete(id)
            .then((result) => {
                res.json({ redirect: '/users' });
            })
            .catch((err) => {
                console.log(err);
            })
    },
    findByName(req, res) {
        const find = User.find({name: req.body.name }, (error, data) => {
            res.send(data)
        })
    },

};
module.exports = UserController;