const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("./config/db_pgsql");

dotenv.config();
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Middleware para verificar tokens 
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send("Token requerido");
    }
    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); 
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send("Token inválido");
    }
};

// Registrar usuario
app.post("/user/register", async (req, res) => {
    const { nombre, email, password, rol } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Cifrado de contraseña
        await pool.query(
            "INSERT INTO usuarios (nombre, email, password, rol) VALUES ($1, $2, $3, $4)",
            [nombre, email, hashedPassword, rol]
        );
        res.status(201).send("Usuario registrado");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Iniciar sesión
app.post("/user/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return res.status(404).send("Usuario no encontrado");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(401).send("Contraseña incorrecta");
        }

        // token 
        const token = jwt.sign(
            { id: user.rows[0].id, email: user.rows[0].email, rol: user.rows[0].rol },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Ruta protegida de ejemplo
app.get("/user/profile", verifyToken, (req, res) => {
    res.send(`Bienvenido, usuario con ID: ${req.user.id}`);
});

// Rutas existentes
const userRoutes = require("./routes/user.routes");
const monturaRoutes = require("./routes/montura.routes");
const favoritosRoutes = require('./routes/favoritos.routes');

app.use("/user", userRoutes);
app.use("/montura", monturaRoutes);
app.use('/favoritos', favoritosRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en: http://localhost:${port}`);
});
