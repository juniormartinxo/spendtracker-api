import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExpenseTypesService } from './expense_types.service'
import { CreateExpenseTypeDto } from './dto/create-expense_type.dto'
import { UpdateExpenseTypeDto } from './dto/update-expense_type.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Expense Types')
@Controller('expense-types')
export class ExpenseTypesController {
  constructor(private readonly service: ExpenseTypesService) {}

  @Post()
  create(@Body() dto: CreateExpenseTypeDto) {
    return this.service.create(dto)
  }

  @Get()
  findAll(skip: number, take: number, order: string, direction: string) {
    return this.service.findAll(skip, take, order, direction)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExpenseTypeDto) {
    return this.service.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id)
  }
}
