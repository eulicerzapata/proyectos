const { Router } = require('express')
const {createTipoProyecto, /*getTipoEquipos, updateTipoEquipoByID*/} =
 require('../controllers/tipoEquipo')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
//router.get('/', getTipoEquipos)

// consultar todos
//router.put('/:id', updateTipoEquipoByID)

module.exports = router;