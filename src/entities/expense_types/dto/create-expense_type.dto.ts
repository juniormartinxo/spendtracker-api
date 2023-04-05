import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator'
export class CreateExpenseTypeDto {
  @ApiProperty({ description: 'UUID do usuário da despesa' })
  @IsString({ message: 'UUID do usuário deve ser uma string' })
  user_uuid: string

  @ApiProperty({ description: 'Descrição do tipo de despesa' })
  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazia' })
  description: string

  @ApiProperty({ description: 'Data de criação do tipo de despesa' })
  @IsDate({ message: 'Data de criação deve ser uma data' })
  created_at?: Date

  @ApiProperty({ description: 'Data de atualização do tipo de despesa' })
  @IsDate({ message: 'Data de atualização deve ser uma data' })
  updated_at?: Date

  @ApiProperty({ description: 'Verifica se um registro está ou não ativo' })
  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  active?: boolean
}
