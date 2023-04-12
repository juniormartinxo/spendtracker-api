import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ExpenseTypesController } from './expense_types.controller'
import { ExpenseTypesService } from './expense_types.service'
import { ExpenseTypesRepository } from './repositories/expense_types.repository'

@Module({
  imports: [PrismaModule],
  controllers: [ExpenseTypesController],
  providers: [ExpenseTypesService, ExpenseTypesRepository],
  exports: [ExpenseTypesService],
})
export class ExpenseTypesModule {}
