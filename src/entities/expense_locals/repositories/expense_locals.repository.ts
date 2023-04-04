import { Injectable } from '@nestjs/common'
import OrderByType from 'src/common/types/OrderByType'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateExpenseLocalDto } from '../dto/update-expense_local.dto'
import { CreateExpenseLocalDto } from '../dto/create-expense_local.dto'
import { ExpenseLocalEntity } from '../entities/expense_local.entity'

@Injectable()
export class ExpenseLocalsRepository {
  private readonly service

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

  async update(id: number, dto: UpdateExpenseLocalDto) {
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
