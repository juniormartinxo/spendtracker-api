import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateInstallmentDto {
  @ApiProperty({ description: 'UUID do usuário' })
  @IsNotEmpty({ message: 'Usuário não pode ser vazio' })
  user_uuid: string

  @ApiProperty({ description: 'UUID da despesa' })
  @IsInt({ message: 'Despesa deve ser um inteiro' })
  @IsNotEmpty({ message: 'Despesa não pode ser vazio' })
  expense_uuid: string

  @ApiProperty({ description: 'Número da parcela' })
  @IsInt({ message: 'Número deve ser um inteiro' })
  @IsNotEmpty({ message: 'Número não pode ser vazio' })
  number: number

  @ApiProperty({ description: 'Data de vencimento' })
  @IsDate({ message: 'Data de vencimento deve ser uma data' })
  @IsNotEmpty({ message: 'Data de vencimento não pode ser vazio' })
  due_date: Date

  @ApiProperty({ description: 'Valor' })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 2,
    },
    { message: 'Valor deve ser um número' },
  )
  amount: number

  @ApiProperty({ description: 'Pago' })
  @IsBoolean({ message: 'Pago deve ser um booleano' })
  @IsNotEmpty({ message: 'Pago não pode ser vazio' })
  paid: boolean

  @ApiProperty({ description: 'Data de pagamento' })
  @IsDate({ message: 'Data de pagamento deve ser uma data' })
  @IsNotEmpty({ message: 'Data de pagamento não pode ser vazio' })
  paid_date: Date

  @ApiProperty({ description: 'Data de criação' })
  @IsDate({ message: 'Data de criação deve ser uma data' })
  created_at: Date

  @ApiProperty({ description: 'Data de atualização' })
  @IsDate({ message: 'Data de atualização deve ser uma data' })
  updated_at?: Date

  @ApiProperty({ description: 'Ativo' })
  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  active?: boolean
}
