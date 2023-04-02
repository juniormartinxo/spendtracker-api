import { Injectable } from '@nestjs/common'
import { CreateExpenseTypeDto } from './dto/create-expense_type.dto'
import { UpdateExpenseTypeDto } from './dto/update-expense_type.dto'
import { ExpenseTypesRepository } from './repositories/expense_types.repository'

@Injectable()
export class ExpenseTypesService {
  constructor(private readonly repository: ExpenseTypesRepository) {}

  create(dto: CreateExpenseTypeDto) {
    return this.repository.create(dto)
  }

  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.repository.findAll(skip, take, order, direction)
  }

  findOne(id: number) {
    return this.repository.findOne(id)
  }

  update(id: number, dto: UpdateExpenseTypeDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.remove(id)
  }
}
