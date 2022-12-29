import mongoose, { Schema } from 'mongoose'

export interface IPatientInterface {
  name: String
  age: Number
  address: String
  consultedDocotr: [mongoose.Types.ObjectId]
}
export const patientSchema = new mongoose.Schema<IPatientInterface>({
  name: {
    type: String,
    Required: true
  },
  age: {
    type: Number,
    Required: true
  },
  address: {
    type: String,
    Required: false
  },
  consultedDocotr: [
    {
      type: mongoose.Types.ObjectId
    }
  ]
})
export const Patient = mongoose.model<IPatientInterface>(
  'Patient',
  patientSchema
)
