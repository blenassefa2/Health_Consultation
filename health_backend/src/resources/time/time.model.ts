import mongoose, { Schema } from 'mongoose'

export interface ITime {
  patientId: mongoose.ObjectId
  docotrId: mongoose.ObjectId
  timestamp: Date
}
export const timeSchema = new mongoose.Schema<ITime>({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    Required: true
  },
  docotrId: {
    type: mongoose.Schema.Types.ObjectId,
    Required: true
  },
  timestamp: {
    type: Date
  }
})
export const Time = mongoose.model<ITime>('time', timeSchema)
