import { Module } from '@nestjs/common'
import { ExpenseTypesService } from './expense_types.service'
import { ExpenseTypesController } from './expense_types.controller'
import { ExpenseTypesRepository } from './repositories/expense_types.repository'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [ExpenseTypesController],
  providers: [ExpenseTypesService, ExpenseTypesRepository, PrismaService],
  exports: [ExpenseTypesService, ExpenseTypesRepository],
})
export class ExpenseTypesModule {}
