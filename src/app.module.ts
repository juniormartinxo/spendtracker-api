import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { ExpensesModule } from './entities/expenses/expenses.module'
import { ExpenseTypesModule } from './entities/expense_types/expense_types.module'
import { ExpenseLocalsModule } from './entities/expense_locals/expense_locals.module'
import { InstallmentsModule } from './entities/installments/installments.module'
import { PaymentMethodsModule } from './entities/payment_methods/payment_methods.module'
import { UsersModule } from './entities/users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ExpensesModule,
    ExpenseTypesModule,
    ExpenseLocalsModule,
    InstallmentsModule,
    PaymentMethodsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
