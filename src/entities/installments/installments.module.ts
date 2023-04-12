import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { InstallmentsController } from './installments.controller'
import { InstallmentsService } from './installments.service'
import { InstallmentsRepository } from './repositories/installments.repository'

@Module({
  imports: [PrismaModule],
  controllers: [InstallmentsController],
  providers: [InstallmentsService, InstallmentsRepository],
  exports: [InstallmentsService],
})
export class InstallmentsModule {}
