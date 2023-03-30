import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  /*
  for (let i = 0; i < 10; i++) {
    await prisma.expense.create({
      data: {
        expense_type_id: faker,
  expense_local_id: number
  description: string
  date: Date
  amount: Prisma.Decimal
  number_of_installments: number
  installments_first_due_date: Date
  observations: string
      },
    })
  }
  */
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
