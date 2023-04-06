import { PaymentMethod } from '.prisma/client'

export class PaymentMethodEntity implements PaymentMethod {
  uuid: string
  user_uuid: string
  description: string
  created_at: Date
  updated_at: Date
  active: boolean
}
