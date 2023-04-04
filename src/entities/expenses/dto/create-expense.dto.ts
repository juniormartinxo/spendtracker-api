import { Prisma } from '.prisma/client'
import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsDate, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateExpenseDto {
  @ApiProperty({ description: 'ID do tipo de despesa' })
  @IsInt({ message: 'Tipo de despesa deve ser um inteiro' })
  @IsNotEmpty({ message: 'Tipo de despesa não pode ser vazio' })
  expense_type_id: number

  @ApiProperty({ description: 'ID do método de pagamento' })
  @IsInt({ message: 'Forma de pagamento deve ser um inteiro' })
  @IsNotEmpty({ message: 'Forma de pagamento não pode ser vazio' })
  payment_methods_id: number

  @ApiProperty({ description: 'ID do do local que oocorreu a despesa' })
  @IsInt({ message: 'Local de despesa deve ser um inteiro' })
  @IsNotEmpty({ message: 'Local de despesa não pode ser vazio' })
  expense_local_id: number

  @ApiProperty({ description: 'Descrição do gasto' })
  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  description: string

  @ApiProperty({ description: 'Data em que ocorreu o gasto' })
  @IsDate({ message: 'Data deve ser uma data' })
  @IsNotEmpty({ message: 'Data não pode ser vazio' })
  date: Date

  @ApiProperty({ description: 'Valor do gasto' })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 2,
    },
    { message: 'O valor deve ser um número' },
  )
  @IsNotEmpty({ message: 'Valor não pode ser vazio' })
  amount: Prisma.Decimal

  @ApiProperty({ description: 'Número de parcelas' })
  @IsInt({ message: 'O número de parcelas deve ser um inteiro' })
  @IsNotEmpty({ message: 'O número de parcelas não pode ser vazio' })
  number_of_installments: number

  @ApiProperty({ description: 'Data da primeira parcela' })
  @IsDate({ message: 'Data da primeira parcela deve ser uma data' })
  @IsNotEmpty({ message: 'Data da primeira parcela não pode ser vazio' })
  installments_first_due_date: Date

  @ApiProperty({ description: 'Observações a respeito da despesa realizada' })
  @IsString({ message: 'Observações deve ser uma string' })
  @IsNotEmpty({ message: 'Observações não pode ser vazio' })
  observations: string
}
