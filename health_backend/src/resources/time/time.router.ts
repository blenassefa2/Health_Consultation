import { Router } from 'express'
import { bookAppointment } from './time.controller'

const timeRouter = Router()

timeRouter.post('/bookAppointment', bookAppointment)

export default timeRouter
