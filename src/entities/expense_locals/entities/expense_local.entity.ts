import { ExpenseLocal } from '.prisma/client'

export class ExpenseLocalEntity implements ExpenseLocal {
  id: number
  description: string
  created_at: Date
  updated_at: Date
  active: boolean
}
