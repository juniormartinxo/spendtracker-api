import { Injectable } from '@nestjs/common'
import { CreateExpenseTypeDto } from './dto/create-expense_type.dto'
import { UpdateExpenseTypeDto } from './dto/update-expense_type.dto'
import { ExpenseTypesRepository } from './repositories/expense_types.repository'

@Injectable()
export class ExpenseTypesService {
  constructor(private readonly repository: ExpenseTypesRepository) {}

  async create(dto: CreateExpenseTypeDto) {
    return await this.repository.create(dto)
  }

  async createMany(dto: CreateExpenseTypeDto[]) {
    return await this.repository.createMany(dto)
  }

  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.repository.findAll(skip, take, order, direction)
  }

  findOne(uuid: string) {
    return this.repository.findOne(uuid)
  }

  update(uuid: string, dto: UpdateExpenseTypeDto) {
    return this.repository.update(uuid, dto)
  }

  remove(uuid: string) {
    return this.repository.remove(uuid)
  }
}
