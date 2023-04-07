import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ExpenseLocalsService } from './expense_locals.service'
import { CreateExpenseLocalDto } from './dto/create-expense_local.dto'
import { UpdateExpenseLocalDto } from './dto/update-expense_local.dto'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Expense Locals')
@Controller('expense-locals')
export class ExpenseLocalsController {
  constructor(private readonly service: ExpenseLocalsService) {}

  @ApiResponse({ status: 409, description: 'Esta local de despesa já existe!' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  create(@Body() dto: CreateExpenseLocalDto) {
    return this.service.create(dto)
  }

  @ApiResponse({ status: 409, description: 'Esta local de despesa já existe!' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get()
  findAll(skip: number, take: number, order: string, direction: string) {
    return this.service.findAll(skip, take, order, direction)
  }

  @ApiResponse({ status: 409, description: 'Esta local de despesa já existe!' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.service.findOne(uuid)
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() dto: UpdateExpenseLocalDto) {
    return this.service.update(uuid, dto)
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.service.remove(uuid)
  }
}
