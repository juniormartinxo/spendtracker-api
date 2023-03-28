import { Prisma } from '.prisma/client'
export class Expense {
  id: number
  expense_type_id: number
  payment_methods_id: number
  expense_local_id: number
  description: string
  date: Date
  amount: Prisma.Decimal
  number_of_installments: number
  installments_first_due_date: Date
  observations: string
  created_at: Date
  updated_at: Date
  active: boolean
}
