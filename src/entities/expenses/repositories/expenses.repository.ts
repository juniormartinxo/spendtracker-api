import { Injectable } from '@nestjs/common'
import { UpdateExpenseDto } from '../dto/update-expense.dto'
import { CreateExpenseDto } from '../dto/create-expense.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { ExpenseEntity } from '../entities/expense.entity'
import { Prisma } from '.prisma/client'
import OrderByType from 'src/common/types/OrderByType'

@Injectable()
export class ExpensesRepository {
  private readonly service: Prisma.ExpenseDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>

  constructor(private readonly prisma: PrismaService) {
    this.service = prisma.expense
  }

  async create(dto: CreateExpenseDto): Promise<ExpenseEntity> {
    return await this.service.create({
      data: dto,
    })
  }

  async findAll(skip: number, take: number, order: string, direction = 'asc'): Promise<ExpenseEntity[]> {
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

  async update(id: number, dto: UpdateExpenseDto) {
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
