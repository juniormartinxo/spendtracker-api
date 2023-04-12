import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { PaymentMethodsController } from './payment_methods.controller'
import { PaymentMethodsService } from './payment_methods.service'
import { PaymentMethodsRepository } from './repositories/payment_methods.repository'

@Module({
  imports: [PrismaModule],
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService, PaymentMethodsRepository],
  exports: [PaymentMethodsService],
})
export class PaymentMethodsModule {}
