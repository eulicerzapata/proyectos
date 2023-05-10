const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Número requerido'],
        unique: [true, 'Numero en uso']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },
    fechaInicio: {
        type: Date,
        required: [true, 'fecha requerida'],
        validate: {
            validator: function(v) {
              return /^\d{4}-\d{2}-\d{2}$/.test(v);
            },
            message: 'fecha debe tener el formato YYYY-MM-DD'
          }
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'fecha requerida'],
        validate: {
          validator: function(v) {
            return /^\d{4}-\d{2}-\d{2}$/.test(v);
          },
          message: 'fecha debe tener el formato YYYY-MM-DD'
        }
      },
    valor: {
        type: Number,
        required: [true, 'valor requerido'],
        validate: {
          validator: function(v) {
            return Number.isInteger(v) && v > 0;
          },
          message: 'valor debe ser un entero positivo'
        }
      },
     
      fechaCreacion: {
        type: Date,
        default: new Date(),
      },
      fechaActualizacion: {
        type: Date,
        default: new Date(),
      },

    
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },

    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapas',
        required: true
    }
   
})

module.exports = model('Proyecto', ProyectoSchema)
