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

  findOne(uuid: string) {
    return this.repository.findOne(uuid)
  }

  update(uuid: string, dto: UpdatePaymentMethodDto) {
    return this.repository.update(uuid, dto)
  }

  remove(uuid: string) {
    return this.repository.remove(uuid)
  }
}
