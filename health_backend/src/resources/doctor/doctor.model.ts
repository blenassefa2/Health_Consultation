import mongoose from 'mongoose'

export interface IDoctorInterface {
  name: String
  description: String
  speciality: String
  consultedPatientsOnline: number
  consultedPatients: number
  rating: number
  photoURL: String
  customerRates: [Number]
  availability: [Date]
  licence: String
}
export const DoctorSchema: mongoose.Schema<IDoctorInterface> =
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    speciality: {
      type: String,
      required: true
    },
    consultedPatientsOnline: {
      type: Number
    },
    consultedPatients: {
      type: Number
    },
    rating: {
      type: Number
    },
    photoURL: {
      type: String,
      default:
        'https://res.cloudinary.com/feruz/image/upload/v1672315494/image/download_xwg9qz.png',
      Required: false
    },
    customerRates: [
      {
        type: Number
      }
    ],
    availability: [
      {
        type: Date
      }
    ],
    licence: {
      type: String,
      required: true
    }
  })
export const Doctor = mongoose.model<IDoctorInterface>('Doctor', DoctorSchema)
