import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ExpensesController } from './expenses.controller'
import { ExpensesService } from './expenses.service'
import { ExpensesRepository } from './repositories/expenses.repository'

@Module({
  imports: [PrismaModule],
  controllers: [ExpensesController],
  providers: [ExpensesService, ExpensesRepository],
  exports: [ExpensesService],
})
export class ExpensesModule {}
