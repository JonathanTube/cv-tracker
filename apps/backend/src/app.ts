import express from 'express'
import companyRouter from './api/company/company.router.js'

const app: express.Application = express()

app.use(express.json())

app.use('/api/company', companyRouter)

export default app
