// Estructura del CRUD
const router = require('express').Router();
const {
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario
} = require('../controllers/usuarios')

router.get('/', getUsuario)
router.post('/', postUsuario)
router.put('/:id', putUsuario)
router.delete('/:id', deleteUsuario)

module.exports = router;