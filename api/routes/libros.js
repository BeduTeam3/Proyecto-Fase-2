// Estructura del CRUD
const router = require('express').Router();
const {
  getLibro,
  postLibro,
  putLibro,
  deleteLibro
} = require('../controllers/libros')

router.get('/', getLibro)
router.post('/', postLibro)
router.put('/:id', putLibro)
router.delete('/:id', deleteLibro)

module.exports = router;