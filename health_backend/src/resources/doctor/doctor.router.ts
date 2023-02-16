import { Router } from 'express'
import { filterImage } from '../../middleware/multer'
import { respond } from '../../middleware/respond'
import {
  getAllDoctors,
  getDoctorById,
  getDoctorByTag,
  updateUser
} from './doctor.controller'
const doctorRouter = Router()

doctorRouter.post('/updateUser', filterImage.any(), updateUser, respond)
doctorRouter.get('/allDoctors', getAllDoctors, respond)
doctorRouter.get('/getDoctorById/:id', getDoctorById, respond)
doctorRouter.get('/getDoctorByTag/:tag', getDoctorByTag, respond)

export default doctorRouter
