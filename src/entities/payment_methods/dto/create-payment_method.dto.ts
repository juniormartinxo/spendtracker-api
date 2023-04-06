import { IsString, IsInt, IsBoolean, IsNotEmpty, IsDate } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreatePaymentMethodDto {
  @ApiProperty({ description: 'UUID do usuário' })
  @IsString({ message: 'Usuário deve ser uma string' })
  user_uuid: string

  @ApiProperty({ description: 'Descrição' })
  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  description: string

  @ApiProperty({ description: 'Data de criação' })
  @IsDate({ message: 'Data de criação deve ser uma data' })
  created_at: Date

  @ApiProperty({ description: 'Data de atualização' })
  @IsDate({ message: 'Data de atualização deve ser uma data' })
  updated_at?: Date

  @ApiProperty({ description: 'Data de atualização' })
  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  @IsNotEmpty({ message: 'Ativo não pode ser vazio' })
  active?: boolean
}
