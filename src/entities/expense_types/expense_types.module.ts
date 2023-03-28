import { Module } from '@nestjs/common'
import { ExpenseTypesService } from './expense_types.service'
import { ExpenseTypesController } from './expense_types.controller'

@Module({
  controllers: [ExpenseTypesController],
  providers: [ExpenseTypesService],
})
export class ExpenseTypesModule {}
