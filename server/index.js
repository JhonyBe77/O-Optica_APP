const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
//const path = require('path');
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');

// -------------------------------------------------------------------------

// MiddlewareS                      AUTH & ROL CONTROL
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logger, formato de lo que sale por terminal
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static("public")); //Middleware para servir archivos estáticos de front. CSS, JS, assets.

// MiddlewareS                      MANAGE 404 ERROR
//const manage404 = require("./middlewares/manage404");

// MiddlewareS                      MORGAN
// const morgan = require("./middlewares/morgan");
// app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// -- Middleware                    BODY-PARSER
app.use(express.json()); 

// -- JSDOC
// app.use('/api-jsdoc', express.static(path.join(__dirname, '/jsondocs')));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas

const userRoutes = require("./routes/user.routes")

// Habilitacion de rutas

app.use('/user',userRoutes);


// app.use("*", manage404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});