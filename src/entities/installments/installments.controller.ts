import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { InstallmentsService } from './installments.service'
import { CreateInstallmentDto } from './dto/create-installment.dto'
import { UpdateInstallmentDto } from './dto/update-installment.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Installments')
@Controller('installments')
export class InstallmentsController {
  constructor(private readonly service: InstallmentsService) {}

  @Post()
  create(@Body() dto: CreateInstallmentDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateInstallmentDto) {
    return this.service.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id)
  }
}
