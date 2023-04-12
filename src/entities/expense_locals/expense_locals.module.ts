import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ExpenseLocalsController } from './expense_locals.controller'
import { ExpenseLocalsService } from './expense_locals.service'
import { ExpenseLocalsRepository } from './repositories/expense_locals.repository'

@Module({
  imports: [PrismaModule],
  controllers: [ExpenseLocalsController],
  providers: [ExpenseLocalsService, ExpenseLocalsRepository],
  exports: [ExpenseLocalsService],
})
export class ExpenseLocalsModule {}
