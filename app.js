const express = require('express')
const app = express()
const cors = require('cors')


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const etapas = require('./routes/etapas')
const universidad = require('./routes/universidad')
const cliente = require('./routes/cliente')
const proyecto = require('./routes/proyectos')

// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/etapas', etapas)
app.use('/api/universidad', universidad)
app.use('/api/cliente', cliente)
app.use('/api/proyecto', proyecto)

module.exports = app