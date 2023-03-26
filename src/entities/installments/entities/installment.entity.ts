import { Installment, Prisma } from '.prisma/client'

export class InstallmentEntity implements Installment {
  id: number
  expense_id: number
  number: number
  due_date: Date
  amount: Prisma.Decimal
  paid: boolean
  paid_date: Date
  created_at: Date
  updated_at: Date
  active: boolean
}
