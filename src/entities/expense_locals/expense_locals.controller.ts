import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExpenseLocalsService } from './expense_locals.service'
import { CreateExpenseLocalDto } from './dto/create-expense_local.dto'
import { UpdateExpenseLocalDto } from './dto/update-expense_local.dto'

@Controller('expense-locals')
export class ExpenseLocalsController {
  constructor(private readonly expenseLocalsService: ExpenseLocalsService) {}

  @Post()
  create(@Body() createExpenseLocalDto: CreateExpenseLocalDto) {
    return this.expenseLocalsService.create(createExpenseLocalDto)
  }

  @Get()
  findAll() {
    return this.expenseLocalsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseLocalsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenseLocalDto: UpdateExpenseLocalDto) {
    return this.expenseLocalsService.update(+id, updateExpenseLocalDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenseLocalsService.remove(+id)
  }
}
