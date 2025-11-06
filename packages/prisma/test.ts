import "dotenv/config";
import { PrismaClient } from './client/index.js'

const prisma = new PrismaClient()

async function main() {
    const allCompanies = await prisma.company.findMany()
    console.log(allCompanies)
}

main().catch(async (e) => {
    console.error(e)
}).finally(async () => {
    await prisma.$disconnect()
})