import { Injectable, NotFoundException } from '@nestjs/common'
import { ExpensesRepository } from './repositories/expenses.repository'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { UpdateExpenseDto } from './dto/update-expense.dto'

@Injectable()
export class ExpensesService {
  constructor(private readonly repository: ExpensesRepository) {}

  create(dto: CreateExpenseDto) {
    return this.repository.create(dto)
  }

  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.repository.findAll(skip, take, order, direction)
  }

  async findOne(uuid: string) {
    const expense = await this.repository.findOne(uuid)

    if (!expense) {
      throw new NotFoundException(`Registro com o uuid ${uuid}, não encontrado`)
    }

    return expense
  }

  async update(uuid: string, dto: UpdateExpenseDto) {
    const expense = await this.repository.update(uuid, dto)

    if (!expense) {
      throw new NotFoundException(`Registro com o uuid ${uuid}, não encontrado`)
    }

    return expense
  }

  remove(uuid: string) {
    return this.repository.remove(uuid)
  }
}
