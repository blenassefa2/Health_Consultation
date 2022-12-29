import mongoose from 'mongoose'

export interface IDoctorInterface {
  name: String
  description: String
  speciality: String
  consultedPatientsOnline: number
  consultedPatients: number
  rating: number
  // photoURL: String
  customerRates: [Number]
  availability: [Date]
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
    // photoURL: {
    //   type: String,
    //   default:
    //     'https://res.cloudinary.com/digitallibrary/image/upload/v1662630438/defaults/pro_fox170.jpg',
    //   Required: false
    // },
    customerRates: [
      {
        type: Number
      }
    ],
    availability: [
      {
        type: Date
      }
    ]
  })
export const Book = mongoose.model<IDoctorInterface>('Doctor', DoctorSchema)
