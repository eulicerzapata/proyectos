const { Router } = require('express')
const {createTipoProyecto, getTipoProyecto,updateTipoProyectoByID} =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar 
router.get('/', getTipoProyecto)

// editar por id.
router.put('/:id', updateTipoProyectoByID)

module.exports = router;