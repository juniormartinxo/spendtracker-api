import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateExpenseLocalDto } from './dto/create-expense_local.dto'
import { UpdateExpenseLocalDto } from './dto/update-expense_local.dto'
import { ExpenseLocalsRepository } from './repositories/expense_locals.repository'

@Injectable()
export class ExpenseLocalsService {
  constructor(private readonly repository: ExpenseLocalsRepository) {}

  create(dto: CreateExpenseLocalDto) {
    return this.repository.create(dto)
  }

  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.repository.findAll(skip, take, order, direction)
  }

  async findOne(uuid: string) {
    const expense = await this.repository.findOne(uuid)

    if (!expense) {
      throw new NotFoundException(`Registro com o id ${uuid}, não encontrado`)
    }

    return expense
  }

  update(uuid: string, dto: UpdateExpenseLocalDto) {
    return this.repository.update(uuid, dto)
  }

  remove(uuid: string) {
    return this.repository.remove(uuid)
  }
}
