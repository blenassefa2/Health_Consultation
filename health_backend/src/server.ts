import express from 'express'
import bodyParser from 'body-parser'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { connect } from './utils/db/setupDB'
import doctorRouter from './resources/doctor/doctor.router'
import timeRouter from './resources/time/time.router'
import authRouter from './utils/auth/auth.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))

app.use(urlencoded({ extended: true, limit: '50mb' }))
app.use(morgan('dev'))

app.use('/api/v1/doctor/', doctorRouter)
app.use('/api/v1/time/', timeRouter)
app.use('/api/v1/auth/', authRouter)

app.use((req, res) => {
  res.json({ data: 'Hello World!' })
})

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://${config.host}:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
