import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExpenseTypesService } from './expense_types.service'
import { CreateExpenseTypeDto } from './dto/create-expense_type.dto'
import { UpdateExpenseTypeDto } from './dto/update-expense_type.dto'

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

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.service.findOne(uuid)
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() dto: UpdateExpenseTypeDto) {
    return this.service.update(uuid, dto)
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.service.remove(uuid)
  }
}
