import { ExpenseType } from '.prisma/client'

export class ExpenseTypeEntity implements ExpenseType {
  id: number
  description: string
  created_at: Date
  updated_at: Date
  active: boolean
}
