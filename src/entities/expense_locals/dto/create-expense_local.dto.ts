import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateExpenseLocalDto {
  @ApiProperty({ description: 'UUID do usuário da despesa' })
  @IsString({ message: 'UUID deve ser uma string' })
  user_uuid: string

  @ApiProperty({ description: 'Descrição do local da despesa' })
  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazia' })
  description: string

  @ApiProperty({ description: 'Data de criação do local da despesa' })
  @IsDate({ message: 'Data de criação deve ser uma data' })
  created_at?: Date

  @ApiProperty({ description: 'Data de atualização do local da despesa' })
  @IsDate({ message: 'Data de atualização deve ser uma data' })
  updated_at?: Date

  @ApiProperty({ description: 'Verifica se um registro está ou não ativo' })
  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  active?: boolean
}
