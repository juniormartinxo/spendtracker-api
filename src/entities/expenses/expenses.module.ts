import { Module } from '@nestjs/common'
import { ExpensesService } from './expenses.service'
import { ExpensesController } from './expenses.controller'
import { ExpensesRepository } from './repositories/expenses.repository'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService, ExpensesRepository, PrismaService],
  exports: [ExpensesService, ExpensesRepository],
})
export class ExpensesModule {}
