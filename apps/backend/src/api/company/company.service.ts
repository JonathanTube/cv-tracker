import { CompanyCreateInput } from "@cv-tracker/database/prisma/models.js"
import prisma from "../../config/prisma.js"

export async function findMany() {
    return prisma.company.findMany()
}

export async function create(company: CompanyCreateInput) {
    return prisma.company.create({ data: company })
}