import { Prisma } from '.prisma/client'
import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, IsDate, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator'

export class CreateExpenseDto {
  @ApiProperty({ description: 'UUID do usuário' })
  @IsString({ message: 'UUID do usuário deve ser uma string' })
  user_uuid: string

  @ApiProperty({ description: 'Tipo de despesa' })
  @IsInt({ message: 'Tipo de despesa deve ser um inteiro' })
  @IsNotEmpty({ message: 'Tipo de despesa não pode ser vazio' })
  expense_type_uuid: string

  @ApiProperty({ description: 'Forma de pagamento' })
  @IsInt({ message: 'Forma de pagamento deve ser um inteiro' })
  @IsNotEmpty({ message: 'Forma de pagamento não pode ser vazio' })
  payment_methods_uuid: string

  @ApiProperty({ description: 'Local de despesa' })
  @IsInt({ message: 'Local de despesa deve ser um inteiro' })
  @IsNotEmpty({ message: 'Local de despesa não pode ser vazio' })
  expense_local_uuid: string

  @ApiProperty({ description: 'Descrição' })
  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  description: string

  @ApiProperty({ description: 'Data' })
  @IsDate({ message: 'Data deve ser uma data' })
  @IsNotEmpty({ message: 'Data não pode ser vazio' })
  date: Date

  @ApiProperty({ description: 'Valor' })
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
  @IsInt({ message: 'Número de parcelas deve ser um inteiro' })
  @IsNotEmpty({ message: 'Número de parcelas não pode ser vazio' })
  number_of_installments: number

  @ApiProperty({ description: 'Data da primeira parcela' })
  @IsDate({ message: 'Data da primeira parcela deve ser uma data' })
  @IsNotEmpty({ message: 'Data da primeira parcela não pode ser vazio' })
  installments_first_due_date: Date

  @ApiProperty({ description: 'Observações' })
  @IsString({ message: 'Observações deve ser uma string' })
  @IsNotEmpty({ message: 'Observações não pode ser vazio' })
  observations: string

  @ApiProperty({ description: 'Data de criação' })
  @IsDate({ message: 'Data de criação deve ser uma data' })
  created_at: Date

  @ApiProperty({ description: 'Data de atualização' })
  @IsDate({ message: 'Data de atualização deve ser uma data' })
  updated_at?: Date

  @ApiProperty({ description: 'Verifica se um registro está ou não ativo' })
  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  active?: boolean
}
