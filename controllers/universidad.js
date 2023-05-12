const Universidad = require("../models/universidad");
const { request, response } = require("express");

// crear
const createUniversidad = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const direccion = req.body.direccion ? req.body.direccion.toUpperCase() : "";
    const telefono = req.body.telefono ? req.body.telefono.toUpperCase() : "";

    const unibersidadDB = await Universidad.findOne({ nombre,direccion,telefono }); //select * from tipoEquipo where nombre=?

    if (unibersidadDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const data = {
      nombre,
      direccion,
      telefono // nombre: nombre
    };
    const universidad = new Universidad(data);
    console.log(universidad);
    await universidad.save();
    return res.status(201).json(universidad);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//obtener por nombre.

const getUniversidad = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const universidadDB = await Universidad.findOne({ nombre }); //select * from tipoEquipo where nombre=?

    if (!universidadDB) {
      return res.status(404).json({ msg: "No existe" });
    }

    return res.status(200).json(universidadDB);
  } catch (e) {
    return res.status(500).json({ msg: "Error general " + e });
  }
};

// actualizar por ID
const updateUniversidadByID = async (req = request, res = response) => {
  try {
    const id = req.params.id; //obtener el id del parametro
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const direccion = req.body.direccion ? req.body.direccion.toUpperCase() : "";
    const telefono = req.body.telefono ? req.body.telefono.toUpperCase() : ""; //obtener el nombre del cuerpo
    const data = { nombre,direccion, telefono }; //crear el objeto con los nuevos valores
    const universidad = await Universidad.findByIdAndUpdate(id,req.body,{
      new:true
    }); //actualizar el modelo donde el id coincida
    return res.status(200).json(universidad); //devolver el modelo actualizado
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: e });
  }
};

module.exports = {
  createUniversidad,
  getUniversidad,
  updateUniversidadByID,
};
