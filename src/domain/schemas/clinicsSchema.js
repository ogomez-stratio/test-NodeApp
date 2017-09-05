import mongoose from 'mongoose'
import {} from 'mongoose-type-url'

export const clinicsSchema = new mongoose.Schema({
  entity: String,
  name: String,
  address: String,
  city: String,
  province: {
    id: String,
    name: String
  },
  postalCode: String,
  nearbyPostalCodes: [ String ],
  web: { type: mongoose.SchemaTypes.Url },
  schedule: {
    lunes: String,
    martes: String,
    miercoles: String,
    jueves: String,
    viernes: String,
    sabado: String,
    domingo: String
  },
  emergencySchedule: String
});

export const clinicsModel = mongoose.model('clinic', clinicsSchema);