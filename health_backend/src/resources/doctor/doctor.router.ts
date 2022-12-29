import { Router } from 'express'
import {
  getAllDoctors,
  getDoctorById,
  getDoctorByTag
} from './doctor.controller'
const doctorRouter = Router()

doctorRouter.get('/allDoctors', getAllDoctors)
doctorRouter.get('/getDoctorById/:id', getDoctorById)
doctorRouter.get('/getDoctorByTag/:tag', getDoctorByTag)
