import { Module } from '@nestjs/common'
import { ExpenseLocalsService } from './expense_locals.service'
import { ExpenseLocalsController } from './expense_locals.controller'
import { ExpenseLocalsRepository } from './repositories/expense_locals.repository'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [ExpenseLocalsController],
  providers: [ExpenseLocalsService, ExpenseLocalsRepository, PrismaService],
})
export class ExpenseLocalsModule {}
