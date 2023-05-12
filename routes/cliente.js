const { Router } = require("express");
const {
    createCliente,
    getCliente,
    updateClienteByID,
} = require("../controllers/cliente");

const router = Router();

// crear
router.post("/", createCliente);

// consultar
router.get("/", getCliente);

// editar por id.
router.put("/:id", updateClienteByID);

module.exports = router;