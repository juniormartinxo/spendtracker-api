import { ExpenseLocal } from '.prisma/client'

export class ExpenseLocalEntity implements ExpenseLocal {
  uuid: string
  user_uuid: string
  description: string
  created_at: Date
  updated_at: Date
  active: boolean
}
