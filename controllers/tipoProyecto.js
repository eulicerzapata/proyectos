const TipoProyecto = require("../models/tipoProyecto");
const { request, response } = require("express");

// crear
const createTipoProyecto = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const tipoProyectoDB = await TipoProyecto.findOne({ nombre }); //select * from tipoEquipo where nombre=?

    if (tipoProyectoDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const data = {
      nombre, // nombre: nombre
    };
    const tipoProyecto = new TipoProyecto(data);
    console.log(tipoProyecto);
    await tipoProyecto.save();
    return res.status(201).json(tipoProyecto);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//obtener por nombre.

const getTipoProyecto = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const tipoProyectoDB = await TipoProyecto.findOne({ nombre }); //select * from tipoEquipo where nombre=?

    if (!tipoProyectoDB) {
      return res.status(404).json({ msg: "No existe" });
    }

    return res.status(200).json(tipoProyectoDB);
  } catch (e) {
    return res.status(500).json({ msg: "Error general " + e });
  }
};

// actualizar por ID
const updateTipoProyectoByID = async (req = request, res = response) => {
  try {
    const id = req.params.id; //obtener el id del parametro
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : ""; //obtener el nombre del cuerpo
    const data = { nombre }; //crear el objeto con los nuevos valores
    const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id,req.body,{
      new:true
    }); //actualizar el modelo donde el id coincida
    return res.status(200).json(tipoProyecto); //devolver el modelo actualizado
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: e });
  }
};

module.exports = {
  createTipoProyecto,
  getTipoProyecto,
  updateTipoProyectoByID,
};
