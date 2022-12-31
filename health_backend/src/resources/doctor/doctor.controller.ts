import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { Doctor } from './doctor.model'
import cloudinary from './../../config/cloudinary'

export const updateUser = async (req: Request, res: Response) => {
  if (!req.body) {
    const result = {
      statusCode: 404,
      message: 'Error Occured'
    }
    return result
  }
  const {
    name,
    description,
    speciality,
    consultedPatientsOnline,
    consultedPatients,
    rating,
    photoURL,
    customerRates,
    availability,
    licence
  } = req.body

  const result = await cloudinary.uploader.upload(licence, {
    folder: 'image',
    use_filename: true
  })
  const url = result.secure_url
  const result2 = await cloudinary.uploader.upload(photoURL, {
    folder: 'image',
    use_filename: true
  })
  const URL = result2.secure_url

  const doctor = await Doctor.create({
    name,
    description,
    speciality,
    consultedPatientsOnline,
    consultedPatients,
    rating,
    URL,
    customerRates,
    availability,
    url
  })
  if (!doctor) {
    const result = {
      statusCode: 400,
      message: 'Cannot create material'
    }
    return result
  }
}

export const getAllDoctors = async (req: Request, res: Response) => {
  const doctor = await Doctor.find({})
  return doctor
}

export const getDoctorById = async (req: Request, res: Response) => {
  const _id = req.params.id
  const doctor = await Doctor.findById(_id)
  return doctor
}
export const getDoctorByTag = async (req: Request, res: Response) => {
  const tag = req.params.tag
  const doctor = await Doctor.find({
    speciality: tag
  })
  return doctor
}
