import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PaymentMethodsService } from './payment_methods.service'
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto'
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto'

@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly service: PaymentMethodsService) {}

  @Post()
  create(@Body() dto: CreatePaymentMethodDto) {
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
  update(@Param('uuid') uuid: string, @Body() dto: UpdatePaymentMethodDto) {
    return this.service.update(uuid, dto)
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.service.remove(uuid)
  }
}
