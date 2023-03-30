import { Module } from '@nestjs/common'
import { InstallmentsService } from './installments.service'
import { InstallmentsController } from './installments.controller'
import { InstallmentsRepository } from './repositories/installments.repository'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  controllers: [InstallmentsController],
  providers: [InstallmentsService, InstallmentsRepository, PrismaService],
  exports: [InstallmentsService, InstallmentsRepository],
})
export class InstallmentsModule {}
