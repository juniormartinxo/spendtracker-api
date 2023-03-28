import { Prisma } from '.prisma/client'
import { IsInt, IsString, IsDate, IsDecimal } from 'class-validator'

export class CreateExpenseDto {
  @IsInt()
  expense_type_id: number

  @IsInt()
  payment_methods_id: number

  @IsInt()
  expense_local_id: number

  @IsString()
  description: string

  @IsDate()
  date: Date

  @IsDecimal()
  amount: Prisma.Decimal

  @IsInt()
  number_of_installments: number

  @IsDate()
  installments_first_due_date: Date

  @IsString()
  observations: string
}
