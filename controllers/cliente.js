const Cliente = require("../models/cliente");
const { request, response } = require("express");

// crear
const createCliente = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const email = req.body.email ? req.body.email : "";
    

    const clienteDB = await Cliente.findOne({ nombre,email }); 

    if (clienteDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const data = {
      nombre,
      email,
      
    };
    const cliente = new Cliente(data);
    console.log(cliente);
    await cliente.save();
    return res.status(201).json(cliente);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//obtener por nombre.

const getCliente = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const clienteDB = await Cliente.findOne({ nombre }); //select * from tipoEquipo where nombre=?

    if (!clienteDB) {
      return res.status(404).json({ msg: "No existe" });
    }

    return res.status(200).json(clienteDB);
  } catch (e) {
    return res.status(500).json({ msg: "Error general " + e });
  }
};

// actualizar por ID
const updateClienteByID = async (req = request, res = response) => {
  try {
    const id = req.params.id; //obtener el id del parametro
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const email = req.body.email ? req.body.email.toUpperCase() : "";
   
    const data = { nombre,email,  }; //crear el objeto con los nuevos valores
    const cliente = await Cliente.findByIdAndUpdate(id,req.body,{
      new:true
    }); //actualizar el modelo donde el id coincida
    return res.status(200).json(cliente); //devolver el modelo actualizado
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: e });
  }
};

module.exports = {
  createCliente,
  getCliente,
  updateClienteByID,
};
