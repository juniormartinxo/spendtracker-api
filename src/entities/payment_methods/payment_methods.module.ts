import { Module } from '@nestjs/common'
import { PaymentMethodsService } from './payment_methods.service'
import { PaymentMethodsController } from './payment_methods.controller'
import { PaymentMethodsRepository } from './repositories/payment_methods.repository'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService, PaymentMethodsRepository, PrismaService],
  exports: [PaymentMethodsService, PaymentMethodsRepository],
})
export class PaymentMethodsModule {}
