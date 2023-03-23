import { Injectable } from '@nestjs/common'
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto'
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto'
import { PaymentMethodsRepository } from './repositories/payment_methods.repository'

@Injectable()
export class PaymentMethodsService {
  constructor(private readonly repository: PaymentMethodsRepository) {}

  create(dto: CreatePaymentMethodDto) {
    return this.repository.create(dto)
  }

  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.repository.findAll(skip, take, order, direction)
  }

  findOne(id: number) {
    return this.repository.findOne(id)
  }

  update(id: number, dto: UpdatePaymentMethodDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.remove(id)
  }
}
