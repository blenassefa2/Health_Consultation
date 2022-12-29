import mongoose from 'mongoose'

export interface IDoctorInterface {
  name: String
  description: String
  speciality: String
  consultedPatientsOnline: number
  consultedPatients: number
  rating: number
  customerRates: [mongoose.Types.ObjectId]
  availability: [Date]
}
export const DoctorSchema: mongoose.Schema<IDoctorInterface> =
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    }
  })
export const Book = mongoose.model<IDoctorInterface>('Dotor', DoctorSchema)
