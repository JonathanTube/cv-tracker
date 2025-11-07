import { Request, Response } from 'express'
import { findMany, create } from './company.service.js';

export async function getCompanies(req: Request, res: Response) {
    const companies = await findMany()
    return res.json(companies)
}

export async function createCompany(req: Request, res: Response) {
    const result = await create(req.body)
    return res.status(201).json(result)
}