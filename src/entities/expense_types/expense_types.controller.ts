import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExpenseTypesService } from './expense_types.service'
import { CreateExpenseTypeDto } from './dto/create-expense_type.dto'
import { UpdateExpenseTypeDto } from './dto/update-expense_type.dto'

@Controller('expense-types')
export class ExpenseTypesController {
  constructor(private readonly expenseTypesService: ExpenseTypesService) {}

  @Post()
  create(@Body() createExpenseTypeDto: CreateExpenseTypeDto) {
    return this.expenseTypesService.create(createExpenseTypeDto)
  }

  @Get()
  findAll() {
    return this.expenseTypesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseTypesService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenseTypeDto: UpdateExpenseTypeDto) {
    return this.expenseTypesService.update(+id, updateExpenseTypeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenseTypesService.remove(+id)
  }
}
