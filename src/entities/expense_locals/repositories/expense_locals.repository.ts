import { Injectable } from '@nestjs/common'
import OrderByType from 'src/common/types/OrderByType'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateExpenseLocalDto } from '../dto/update-expense_local.dto'
import { CreateExpenseLocalDto } from '../dto/create-expense_local.dto'
import { ExpenseLocalEntity } from '../entities/expense_local.entity'
import { Prisma } from '.prisma/client'

@Injectable()
export class ExpenseLocalsRepository {
  private readonly service: Prisma.ExpenseLocalDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>

  constructor(private readonly prisma: PrismaService) {
    this.service = prisma.expenseLocal
  }

  async create(dto: CreateExpenseLocalDto): Promise<ExpenseLocalEntity> {
    return await this.service.create({
      data: dto,
    })
  }

  async findAll(skip: number, take: number, order: string, direction = 'asc'): Promise<ExpenseLocalEntity[]> {
    const orderFields: OrderByType = {
      description: 'description',
      created_at: 'created_at',
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

  async update(uuid: string, dto: UpdateExpenseLocalDto) {
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
