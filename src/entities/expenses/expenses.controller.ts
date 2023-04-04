import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExpensesService } from './expenses.service'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { UpdateExpenseDto } from './dto/update-expense.dto'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Expenses')
@Controller('expenses')
export class ExpensesController {
  constructor(private readonly service: ExpensesService) {}

  @ApiResponse({ status: 409, description: 'Esta despesa já existe!' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() dto: CreateExpenseDto) {
    return this.service.create(dto)
  }

  @ApiResponse({ status: 409, description: 'Esta despesa já existe!' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll(skip: number, take: number, order: string, direction: string) {
    return this.service.findAll(skip, take, order, direction)
  }

  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExpenseDto) {
    return this.service.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id)
  }
}
