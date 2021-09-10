// const Autor = require("../models/Autor");
// const Libro = require("../models/Libro");

const mongoose = require('mongoose');
const Autor = mongoose.model('Autor');

// router.get('/', getAutor)
function getAutor(req, res, next) {
  //Obtener-Leer
  if (req.params.id) {//Si solo pasan el ID
    Autor.findById(req.params.id)
      .then(uno => { res.send(uno) })
      .catch(next)
  } else { //Se pide toda la lista de mascotas
    Autor.find()
      .then(todos => { res.send(todos) })
      .catch(next)
  }
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
