import { PaymentMethod } from '.prisma/client'

export class PaymentMethodEntity implements PaymentMethod {
  id: number
  description: string
  created_at: Date
  updated_at: Date
  active: boolean
}
