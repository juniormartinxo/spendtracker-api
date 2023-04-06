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
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.service.findOne(uuid)
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() dto: UpdateExpenseDto) {
    return this.service.update(uuid, dto)
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.service.remove(uuid)
  }
}
