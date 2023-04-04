import { Prisma } from '.prisma/client'
import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsDate, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateExpenseDto {
  @ApiProperty({ description: 'Tipo de despesa' })
  @IsInt({ message: 'Tipo de despesa deve ser um inteiro' })
  @IsNotEmpty({ message: 'Tipo de despesa não pode ser vazio' })
  expense_type_id: number

  @IsInt({ message: 'Forma de pagamento deve ser um inteiro' })
  @IsNotEmpty({ message: 'Forma de pagamento não pode ser vazio' })
  payment_methods_id: number

  @IsInt({ message: 'Local de despesa deve ser um inteiro' })
  @IsNotEmpty({ message: 'Local de despesa não pode ser vazio' })
  expense_local_id: number

  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  description: string

  @IsDate({ message: 'Data deve ser uma data' })
  @IsNotEmpty({ message: 'Data não pode ser vazio' })
  date: Date

  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 2,
    },
    { message: 'Valor deve ser um número' },
  )
  @IsNotEmpty({ message: 'Valor não pode ser vazio' })
  amount: Prisma.Decimal

  @IsInt({ message: 'Número de parcelas deve ser um inteiro' })
  @IsNotEmpty({ message: 'Número de parcelas não pode ser vazio' })
  number_of_installments: number

  @IsDate({ message: 'Data da primeira parcela deve ser uma data' })
  @IsNotEmpty({ message: 'Data da primeira parcela não pode ser vazio' })
  installments_first_due_date: Date

  @IsString({ message: 'Observações deve ser uma string' })
  @IsNotEmpty({ message: 'Observações não pode ser vazio' })
  observations: string
}
