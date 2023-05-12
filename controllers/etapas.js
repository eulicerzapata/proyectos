const Etapas = require("../models/etapas");
const { request, response } = require("express");

// crear
const createEtapa= async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const etapaDB = await Etapas.findOne({ nombre }); //select * from etapa where nombre=?

    if (etapaDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const data = {
      nombre, // nombre: nombre
    };
    const etapa = new Etapas(data);
    console.log(etapa);
    await etapa.save();
    return res.status(201).json(etapa);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//obtener por nombre.

const getEtapas = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const etapaDB = await Etapas.findOne({ nombre }); //select * from etapa where nombre=?

    if (!etapaDB) {
      return res.status(404).json({ msg: "No existe" });
    }

    return res.status(200).json(etapaDB);
  } catch (e) {
    return res.status(500).json({ msg: "Error general " + e });
  }
};

// actualizar por ID
const updateEtapasByID = async (req = request, res = response) => {
  try {
    const id = req.params.id; //obtener el id del parametro
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : ""; //obtener el nombre del cuerpo
    const data = { nombre }; //crear el objeto con los nuevos valores
    const etapa = await Etapas.findByIdAndUpdate(id,req.body,{
      new:true
    }); //actualizar el modelo donde el id coincida
    return res.status(200).json(etapa); //devolver el modelo actualizado
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: e });
  }
};

module.exports = {
  createEtapa,
  getEtapas,
  updateEtapasByID,
};
