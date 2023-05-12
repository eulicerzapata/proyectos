const { Router } = require('express')
const { createProyecto, getProyectos, updateProyectosByID} =
 require('../controllers/proyecto')

const router = Router()

// crear
router.post('/', createProyecto)

// consultar todos
router.get('/', getProyectos)

router.put('/:id', updateProyectosByID)

module.exports = router;