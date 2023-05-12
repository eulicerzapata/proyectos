const { Router } = require("express");
const {
  createEtapa,
  getEtapas,
  updateEtapasByID,
} = require("../controllers/etapas");

const router = Router();

// crear
router.post("/", createEtapa);

// consultar
router.get("/", getEtapas);

// editar por id.
router.put("/:id", updateEtapasByID);

module.exports = router;
