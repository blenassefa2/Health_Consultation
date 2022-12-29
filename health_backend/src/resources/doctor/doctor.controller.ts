import { request, response } from 'express'
import mongoose from 'mongoose'
import { Doctor } from './doctor.model'
import cloudinary from './../../utils/cloudinary'
export const updateUser = async (req: request, res: response) => {
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

export const getAllDoctors = async (req: request, res: response) => {
  return
}

export const getDoctorById = async (req: request, res: response) => {
  return
}
export const getDoctorByTag = async (req: request, res: response) => {
  return
}
