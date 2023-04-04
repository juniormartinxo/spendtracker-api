import { Injectable } from '@nestjs/common'
import { Prisma } from '.prisma/client'
import OrderByType from 'src/common/types/OrderByType'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateExpenseTypeDto } from '../dto/create-expense_type.dto'
import { ExpenseTypeEntity } from '../entities/expense_type.entity'
import { UpdateExpenseTypeDto } from '../dto/update-expense_type.dto'

@Injectable()
export class ExpenseTypesRepository {
  private readonly service: Prisma.ExpenseTypeDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>

  constructor(private readonly prisma: PrismaService) {
    this.service = prisma.expenseType
  }

  async create(dto: CreateExpenseTypeDto): Promise<ExpenseTypeEntity> {
    return await this.service.create({
      data: dto,
    })
  }

  async findAll(skip: number, take: number, order: string, direction = 'asc'): Promise<ExpenseTypeEntity[]> {
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

  async update(id: number, dto: UpdateExpenseTypeDto) {
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
