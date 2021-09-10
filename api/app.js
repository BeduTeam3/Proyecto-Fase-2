const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**CONFIGURACIÓN DE MONGOOSE */
const mongoose = require('mongoose');//Importamos
//Nos conectamos
mongoose.connect("mongodb+srv://Admin:adminEquipo3@cluster0.0l8wy.mongodb.net/Libreria?retryWrites=true&w=majority");
//Activamos opción de debuggeo para errores
mongoose.set("debug", true);
/**CONFIGURACIÓN DE MONGOOSE */

//Importamos los esquemas que utilizaremos
require('./models/Autor');
require('./models/Comentario');
require('./models/Libro');
require('./models/Usuario');

//Configurando las rutas
app.use('/v1', require('./routes'));

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
