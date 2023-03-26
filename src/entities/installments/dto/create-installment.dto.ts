import { IsBoolean, IsDate, IsInt, IsNumber } from 'class-validator'

export class CreateInstallmentDto {
  @IsInt()
  expense_id: number

  @IsInt()
  number: number

  @IsDate()
  due_date: Date

  @IsNumber()
  amount: number

  @IsBoolean()
  paid: boolean

  @IsDate()
  paid_date: Date
}
