import { Logger, Module, OnModuleInit } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { ExpenseLocalsModule } from './entities/expense_locals/expense_locals.module'
import { ExpenseTypesModule } from './entities/expense_types/expense_types.module'
import { ExpensesModule } from './entities/expenses/expenses.module'
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppService.name)

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const requiredEnvVariables = [
      'TZ',
      'NODE_ENV',
      'APP_PORT',
      'JWT_SECRET',
      'JWT_EXPIRES',
      'DATABASE_TYPE',
      'DATABASE_USER',
      'DATABASE_PASSWORD',
      'DATABASE_HOST',
      'DATABASE_PORT',
      'DATABASE_NAME',
      'DATABASE_URL',
    ]

    const missingEnvVariables = requiredEnvVariables.filter(envVar => !this.configService.get(envVar))

    if (missingEnvVariables.length) {
      this.logger.error(`Missing required environment variables: ${missingEnvVariables.join(', ')}`)

      return
    }
  }
}
