import "dotenv/config";
import { PrismaClient } from '@cv-tracker/prisma'

const prisma = new PrismaClient()

async function main() {
    // await prisma.company.create({
    //     data: {
    //         name: 'hello',
    //         industry: '1',
    //         country: '2'
    //     }
    // })
    const allCompanies = await prisma.company.findMany()
    console.log(allCompanies)
}

main().catch(async (e) => {
    console.error(e)
}).finally(async () => {
    await prisma.$disconnect()
})