import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Prisma } from '.prisma/client'
import { CreatePaymentMethodDto } from '../dto/create-payment_method.dto'
import { UpdatePaymentMethodDto } from '../dto/update-payment_method.dto'
import OrderByType from 'src/common/types/OrderByType'
import { PaymentMethodEntity } from '../entities/payment_method.entity'

@Injectable()
export class PaymentMethodsRepository {
  private readonly service: Prisma.PaymentMethodDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>

  constructor(private readonly prisma: PrismaService) {
    this.service = prisma.paymentMethod
  }

  async create(dto: CreatePaymentMethodDto): Promise<PaymentMethodEntity> {
    return await this.service.create({
      data: dto,
    })
  }

  async findAll(skip: number, take: number, order: string, direction = 'asc'): Promise<PaymentMethodEntity[]> {
    const orderFields: OrderByType = {
      id: 'id',
      name: 'name',
      type: 'type',
    }

    const orderBy: OrderByType = {}

    if (orderFields.hasOwnProperty(order)) {
      orderBy[orderFields[order]] = direction
    }

    return await this.service.findMany({
      skip,
      take,
      orderBy,
      where: {
        active: true,
      },
    })
  }

  async findOne(id: number) {
    return await this.service.findUnique({
      where: { id },
    })
  }

  async update(id: number, dto: UpdatePaymentMethodDto) {
    return await this.service.update({
      where: { id },
      data: dto,
    })
  }

  async remove(id: number) {
    return await this.service.update({
      where: { id },
      data: { active: false },
    })
  }
}
