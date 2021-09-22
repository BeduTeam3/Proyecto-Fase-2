//const Libro = require('../models/Libro');
const mongoose = require('mongoose');
const Libro = mongoose.model('Libro');

function getLibro(req, res, next) { //Obtener-Leer
  if (req.params.id) {//Obtiene libro por su ID
    let id = req.params.id;
    Libro.aggregate(autoresUnLibro(id))
      .then(uno => { !uno ? res.status(404).send(`No se encontró el libro "${id}"`) : res.send(uno) })
      .catch(next)
  } else { //Toda la lista de libros
    Libro.aggregate(autoresMuchosLibros())
      .then(todos => { res.send(todos) })
      .catch(next)
  }
}
//Obtiene libros que su título coincidan con una palabra
function getByTitle(req, res, next) {
  let title = req.params.title.toString();//Guarda título
  Libro.aggregate(autoresPorTitulo(title))
    //Si la respuesta viene vacía, se envía estatus 404, de lo contrario se envían libros encontrados
    .then(r => { r.length === 0 ? res.status(404).send(`No se encontró el libro "${title}"`) : res.status(200).send(r) })
    .catch(next)
}

function postLibro(req, res, next) { //Crear nuevo libro
  const libro = new Libro(req.body);
  libro.save()
    .then(lib => {
      res.status(200).send(lib)
    }).catch(e => {//Si hay un error
      if (e instanceof mongoose.Error.ValidationError) {
        return res.status(400).send(e.message);//Si es error de validación
      } else {
        return res.status(500).send({ error: 'Error Interno' });//Si es error del servidor
      }
    })
}

function putLibro(req, res, next) { //Modificar-Actualizar
  let id = req.params.id;
  Libro.findById(id)
    .then(libro => {
      if (!libro) {//Si no existe el libro
        return res.status(404).send(`El libro "${id}" no existe`)//res.sendStatus(401);
      }

      let nuevaInfo = req.body;//Obtengo la info enviada
      console.log(typeof nuevaInfo.title);
      if (typeof nuevaInfo.title !== "undefined")
        libro.title = nuevaInfo.title;
      if (typeof nuevaInfo.idAuthors !== "undefined")
        libro.idAuthors = nuevaInfo.idAuthors;
      if (typeof nuevaInfo.isbn !== "undefined")
        libro.isbn = nuevaInfo.isbn;
      if (typeof nuevaInfo.isbn13 !== "undefined")
        libro.isbn13 = nuevaInfo.isbn13;
      if (typeof nuevaInfo.publication_year !== "undefined")
        libro.publication_year = nuevaInfo.publication_year;
      if (typeof nuevaInfo.language !== "undefined")
        libro.language = nuevaInfo.language;
      if (typeof nuevaInfo.publisher !== "undefined")
        libro.publisher = nuevaInfo.publisher;
      if (typeof nuevaInfo.pages !== "undefined")
        libro.pages = nuevaInfo.pages;
      if (typeof nuevaInfo.price !== "undefined")
        libro.price = nuevaInfo.price;
      if (typeof nuevaInfo.image_url !== "undefined")
        libro.image_url = nuevaInfo.image_url;
      if (typeof nuevaInfo.small_image_url !== "undefined")
        libro.small_image_url = nuevaInfo.small_image_url;

      libro.save()
        .then(actualizada => { res.status(200).json(actualizada) })
        .catch(e => {
          if (e instanceof mongoose.Error.ValidationError) {
            return res.status(400).send(e.message);//Si es error de validación
          } else {
            return res.status(500).send({ error: 'Error Interno' });//Si es error del servidor
          }
        })
    })
    .catch(next)
}

function deleteLibro(req, res, next) { //Borrar
  let id = req.params.id;
  Libro.findOneAndDelete({ _id: id })
    .then(r => { !r ? res.status(404).send(`No se encontró el libro "${id}"`) : res.status(200).send(`El libro "${r.title}" se eliminó`) })
    .catch(next)
}

const autoresMuchosLibros = () => {//Une nombres de autores a todos los libros
  return [{
    '$lookup': {
      'from': 'Autores',
      'localField': 'idAuthors',
      'foreignField': '_id',
      'as': 'Autores'
    }
  }, {
    '$project': {
      'idAuthors': 0
    }
  }]
}

const autoresUnLibro = (id) => {//Une nombres de autores y filtra a un libro específico 
  return [{
    '$lookup': {
      'from': 'Autores',
      'localField': 'idAuthors',
      'foreignField': '_id',
      'as': 'Autores'
    }
  }, {
    '$project': {
      'idAuthors': 0
    }
  }, {
    '$match': {
      '_id': new mongoose.Types.ObjectId(id)
    }
  }]
}

const autoresPorTitulo = (title) => {//Une nombres de autores y filtra según un título 
  return [{
    '$lookup': {
      'from': 'Autores',
      'localField': 'idAuthors',
      'foreignField': '_id',
      'as': 'Autores'
    }
  }, {
    '$project': {
      'idAuthors': 0
    }
  }, {
    '$match': {//Si algún título coincide
      'title': new RegExp(`.*${title}.*`, 'i')
    }
  }]
}

//Exportamos las funciones definidas
module.exports = {
  getLibro,
  postLibro,
  putLibro,
  deleteLibro,
  getByTitle
}