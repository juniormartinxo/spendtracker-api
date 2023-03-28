import { Module } from '@nestjs/common'
import { ExpenseLocalsService } from './expense_locals.service'
import { ExpenseLocalsController } from './expense_locals.controller'

@Module({
  controllers: [ExpenseLocalsController],
  providers: [ExpenseLocalsService],
})
export class ExpenseLocalsModule {}
