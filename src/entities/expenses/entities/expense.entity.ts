import { Expense, Prisma } from '.prisma/client'
export class ExpenseEntity implements Expense {
  uuid: string
  user_uuid: string
  expense_type_uuid: string
  payment_methods_uuid: string
  expense_local_uuid: string
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
