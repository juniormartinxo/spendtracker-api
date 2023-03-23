import { PaymentMethod } from '.prisma/client'

export class PaymentMethodEntity implements PaymentMethod {
  id: number
  description: string
  createdAt: Date
  updatedAt: Date
  active: boolean
}
