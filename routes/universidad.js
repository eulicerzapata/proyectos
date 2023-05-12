const { Router } = require("express");
const {
  createUniversidad,
  getUniversidad,
  updateUniversidadByID,
} = require("../controllers/universidad");

const router = Router();

// crear
router.post("/", createUniversidad);

// consultar
router.get("/", getUniversidad);

// editar por id.
router.put("/:id", updateUniversidadByID);

module.exports = router;
