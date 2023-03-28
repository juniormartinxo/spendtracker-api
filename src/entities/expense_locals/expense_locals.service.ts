import { Injectable } from '@nestjs/common'
import { CreateExpenseLocalDto } from './dto/create-expense_local.dto'
import { UpdateExpenseLocalDto } from './dto/update-expense_local.dto'

@Injectable()
export class ExpenseLocalsService {
  create(createExpenseLocalDto: CreateExpenseLocalDto) {
    return 'This action adds a new expenseLocal'
  }

  findAll() {
    return `This action returns all expenseLocals`
  }

  findOne(id: number) {
    return `This action returns a #${id} expenseLocal`
  }

  update(id: number, updateExpenseLocalDto: UpdateExpenseLocalDto) {
    return `This action updates a #${id} expenseLocal`
  }

  remove(id: number) {
    return `This action removes a #${id} expenseLocal`
  }
}
