import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateInstallmentDto {
  @IsInt({ message: 'Despesa deve ser um inteiro' })
  @IsNotEmpty({ message: 'Despesa não pode ser vazio' })
  expense_id: number

  @IsInt({ message: 'Número deve ser um inteiro' })
  @IsNotEmpty({ message: 'Número não pode ser vazio' })
  number: number

  @IsDate({ message: 'Data de vencimento deve ser uma data' })
  @IsNotEmpty({ message: 'Data de vencimento não pode ser vazio' })
  due_date: Date

  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 2,
    },
    { message: 'Valor deve ser um número' },
  )
  amount: number

  @IsBoolean({ message: 'Pago deve ser um booleano' })
  @IsNotEmpty({ message: 'Pago não pode ser vazio' })
  paid: boolean

  @IsDate({ message: 'Data de pagamento deve ser uma data' })
  @IsNotEmpty({ message: 'Data de pagamento não pode ser vazio' })
  paid_date: Date
}
