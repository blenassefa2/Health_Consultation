import { Router } from 'express'
import { respond } from '../../middleware/respond'
import {
  getAllDoctors,
  getDoctorById,
  getDoctorByTag,
  updateUser
} from './doctor.controller'
const doctorRouter = Router()

doctorRouter.post('/updateUser', updateUser)
doctorRouter.get('/allDoctors', getAllDoctors, respond)
doctorRouter.get('/getDoctorById/:id', getDoctorById)
doctorRouter.get('/getDoctorByTag/:tag', getDoctorByTag)

export default doctorRouter
