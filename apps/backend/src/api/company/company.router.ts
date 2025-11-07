import { Router } from 'express'
import { getCompanies, createCompany } from './company.controller.js'

const router: Router = Router()

router.get('/', getCompanies)
router.post('/', createCompany)

export default router
