import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Prisma } from '.prisma/client'
import { InstallmentEntity } from '../entities/installment.entity'
import { CreateInstallmentDto } from '../dto/create-installment.dto'
import OrderByType from 'src/common/types/OrderByType'
import { UpdateInstallmentDto } from '../dto/update-installment.dto'

@Injectable()
export class InstallmentsRepository {
  private readonly service: Prisma.InstallmentDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>

  constructor(private readonly prisma: PrismaService) {
    this.service = prisma.installment
  }

  async create(dto: CreateInstallmentDto): Promise<InstallmentEntity> {
    return await this.service.create({
      data: dto,
    })
  }

  async findAll(skip: number, take: number, order: string, direction = 'asc'): Promise<InstallmentEntity[]> {
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

  async findOne(uuid: string) {
    return await this.service.findUnique({
      where: { uuid },
    })
  }

  async update(uuid: string, dto: UpdateInstallmentDto) {
    return await this.service.update({
      where: { uuid },
      data: dto,
    })
  }

  async remove(uuid: string) {
    return await this.service.update({
      where: { uuid },
      data: { active: false },
    })
  }
}
