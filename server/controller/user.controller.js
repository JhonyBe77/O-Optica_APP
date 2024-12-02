const pool = require('../config/db_pgsql'); // Conexión a la base de datos
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verifica si el usuario existe
        const userQuery = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if (userQuery.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const user = userQuery.rows[0];

        // Verifica contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        // Genera token
        const token = jwt.sign(
            { id: user.id, email: user.email, rol: user.rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
            
        );

        console.log("token=",token)
        
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        
        

        // Responde con el token y los datos del usuario
        res.status(200).json({
            token: token, 
            user: {       
                id: user.id,
                email: user.email,
                rol: user.rol,
            },
        });
    } catch (err) {
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

// para obtener usuarios
const getUsers = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM usuarios');
        res.status(200).json(users.rows);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

module.exports = {
    getUsers, 
    login,    
};
