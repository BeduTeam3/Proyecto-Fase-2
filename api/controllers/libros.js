//const Libro = require('../models/Libro');
const mongoose = require('mongoose');
const Libro = mongoose.model('Libro');

function getLibro(req, res, next) { //Obtener-Leer
  if (req.params.id) {//Obtiene libro por su ID
    let id = req.params.id;

    Libro.findById(id)
      .then(uno => {!uno ? res.status(404).send(`No se encontró el libro "${id}"`) : res.send(uno)})
      .catch(next)
  } else { //Toda la lista de libros
    Libro.find()
      .then(todos => { res.send(todos) })
      .catch(next)
  }
}
//Obtiene libros que su título coincidan con una palabra
function getByTitle(req, res, next) {
  let title = req.params.title.toString();//Guarda título
  Libro.find(title)
  Libro.aggregate([
    {
      '$match': {//Si algún título coincide con la palabra en la solicitud
        'title': new RegExp(`.*${title}.*`, 'i')
      }
    }
  ])//Si la respuesta viene vacía, se envía estatus 404, de lo contrario se envían libros encontrados
  .then(r => {r.length === 0 ? res.status(404).send(`No se encontró el libro "${title}"`) : res.status(200).send(r)})
  .catch(next)
}

function postLibro(req, res, next) { //Crear nuevo libro
  const libro = new Libro(req.body);
  libro.save()
    .then(lib => {
      res.status(200).send(lib)
  }).catch(e => {//Si hay un error
    if(e instanceof mongoose.Error.ValidationError) {
      return res.status(400).send(e.message);//Si es error de validación
    } else {
      return res.status(500).send({ error: 'Error Interno' });//Si es error del servidor
    }
  })
}

function putLibro(req, res) { //Modificar-Actualizar

}

function deleteLibro(req, res, next) { //Borrar
  let id = req.params.id;
  Libro.findOneAndDelete({_id:id})
    .then(r => {!r ? res.status(404).send(`No se encontró el libro "${id}"`) : res.status(200).send(`El libro "${r.title}" se eliminó`)})
    .catch(next)
}

//Exportamos las funciones definidas
module.exports = {
  getLibro,
  postLibro,
  putLibro,
  deleteLibro,
  getByTitle
}