const userModel = require('../models/user.model');  

const getUsers = async (req, res) => {
    let users;

    try {
        if (req.query.email) {
            users = await userModel.getUserByEmail(req.query.email);
        } else { 
            users = await userModel.getAllUsers();
        }
        res.json({ usuarios: users });
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener los usuarios: ' + err });
    }
};

module.exports = { getUsers }