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

  async findOne(id: number) {
    const expense = await this.repository.findOne(id)

    if (!expense) {
      throw new NotFoundException(`Registro com o id ${id}, não encontrado`)
    }

    return expense
  }

  async update(id: number, dto: UpdateExpenseDto) {
    const expense = await this.repository.update(id, dto)

    if (!expense) {
      throw new NotFoundException(`Registro com o id ${id}, não encontrado`)
    }

    return expense
  }

  remove(id: number) {
    return this.repository.remove(id)
  }
}
