import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { Doctor } from './doctor.model'
import cloudinary from './../../config/cloudinary'
import { nextTick } from 'process'
import { uploadImage, uploadlicense } from '../../middleware/upload'
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    customerRates
    // availability,
  } = req.body
  const image = req.files[1]
  const license = req.files[0]
  const imageUploadResult = await uploadImage(image)
  const licenseUploadResult = await uploadlicense(license)
  const { statusCode, data: cloudinary_result } = imageUploadResult
  if (statusCode == 400) {
    res.locals.json = {
      statusCode,
      message: imageUploadResult.message
    }
  }
  const { statusCode1, data: cloudinary_result1 } = licenseUploadResult

  const photoURL = cloudinary_result?.secure_url
  const licence = cloudinary_result1?.secure_url
  const doctor = await Doctor.create({
    name,
    description,
    speciality,
    consultedPatientsOnline,
    consultedPatients,
    rating,
    photoURL,
    customerRates,
    // availability,
    licence
  })
  if (!doctor) {
    const result = {
      statusCode: 400,
      message: 'Cannot create material'
    }
    return next()
  }
  res.locals.json = {
    statusCode: 200,
    data: doctor
  }
  return next()
}

export const getAllDoctors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const doctors = await Doctor.find({})
    res.locals.json = {
      statusCode: 200,
      data: doctors
    }
    return next()
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: 'error occured'
    }
    return next()
  }
}

export const getDoctorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id
  const doctor = await Doctor.findById(_id)
  res.locals.json = {
    statusCode: 200,
    data: doctor
  }
  return next()
}
export const getDoctorByTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tag = req.params.tag
  const doctor = await Doctor.find({
    speciality: tag
  })
  res.locals.json = {
    statusCode: 200,
    data: doctor
  }
  return next()
}
