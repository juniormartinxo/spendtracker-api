import { Installment, Prisma } from '.prisma/client'

export class InstallmentEntity implements Installment {
  uuid: string
  user_uuid: string
  expense_uuid: string
  number: number
  due_date: Date
  amount: Prisma.Decimal
  paid: boolean
  paid_date: Date
  created_at: Date
  updated_at: Date
  active: boolean
}
