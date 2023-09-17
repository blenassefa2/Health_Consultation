import mongoose from "mongoose";

export interface IAccountInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  woreda: string;
  city: string;
  houeseNo: string;
  kebele: string;
  profilePhoto: string;
}

export const AccountSchema: mongoose.Schema<IAccountInterface> =
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["HealthProfessional", "Other"],
      required: true,
    },
    woreda: {
      type: String,
      required: false,
    },
    
    city: {
      type: String,
      required: false,
    },
    houeseNo: {
      type: String,
      required: false,
    },
    kebele: {
      type: String,
      required: false,
    },
    profilePhoto: {
      type: String,
      required: true,
    },
  });

export const Account = mongoose.model<IAccountInterface>(
  "Account",
  AccountSchema
);