const Autor = require("../models/Autor");
const Libro = require("../models/Libro");

// router.get('/', getAutor)
function getAutor(req, res) {
  //Obtener-Leer
  var autores = [
    new Autor("101", "Juan Rulfo", ["001", "002"]),
    new Autor("102", "Gabriel Garcia Marquez", ["003", "004"]),
    new Autor("103", "Octavio Paz", ["005", "006"]),
    new Autor("104", "Carlos Fuentes", ["007", "008"])
  ];
  res.send(autores);
}

// router.post('/', postAutor)
function postAutor(req, res) {
	
}

// router.put('/:id', putAutor)
function putAutor(req, res) {
  //Modificar-Actualizar
}

// router.delete('/:id', deleteAutor)
function deleteAutor(req, res) {
  //Borrar
}

//Exportamos las funciones definidas
module.exports = {
  getAutor,
  postAutor,
  putAutor,
  deleteAutor,
};
