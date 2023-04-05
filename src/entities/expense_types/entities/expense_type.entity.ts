import { ExpenseType } from '.prisma/client'

export class ExpenseTypeEntity implements ExpenseType {
  uuid: string
  user_uuid: string
  description: string
  created_at: Date
  updated_at: Date
  active: boolean
}
