import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { InstallmentsService } from './installments.service'
import { CreateInstallmentDto } from './dto/create-installment.dto'
import { UpdateInstallmentDto } from './dto/update-installment.dto'

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

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.service.findOne(uuid)
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() dto: UpdateInstallmentDto) {
    return this.service.update(uuid, dto)
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.service.remove(uuid)
  }
}
