import { Injectable } from '@nestjs/common'
import { CreateExpenseTypeDto } from './dto/create-expense_type.dto'
import { UpdateExpenseTypeDto } from './dto/update-expense_type.dto'

@Injectable()
export class ExpenseTypesService {
  create(createExpenseTypeDto: CreateExpenseTypeDto) {
    return 'This action adds a new expenseType'
  }

  findAll() {
    return `This action returns all expenseTypes`
  }

  findOne(id: number) {
    return `This action returns a #${id} expenseType`
  }

  update(id: number, updateExpenseTypeDto: UpdateExpenseTypeDto) {
    return `This action updates a #${id} expenseType`
  }

  remove(id: number) {
    return `This action removes a #${id} expenseType`
  }
}
