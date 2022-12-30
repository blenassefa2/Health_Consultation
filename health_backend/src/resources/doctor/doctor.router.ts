import { Router } from 'express'
import {
  getAllDoctors,
  getDoctorById,
  getDoctorByTag,
  updateUser
} from './doctor.controller'
const doctorRouter = Router()

doctorRouter.post('/updateUser', updateUser)
doctorRouter.get('/allDoctors', getAllDoctors)
doctorRouter.get('/getDoctorById/:id', getDoctorById)
doctorRouter.get('/getDoctorByTag/:tag', getDoctorByTag)

export default doctorRouter
