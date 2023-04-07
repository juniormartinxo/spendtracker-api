import { IsBoolean, IsDate, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ description: 'Nome do usuário' })
  @IsString({ message: 'Nome deve ser uma string' })
  name: string

  @ApiProperty({ description: 'Email do usuário' })
  @IsString({ message: 'Email deve ser uma string' })
  email: string

  @ApiProperty({ description: 'Senha do usuário' })
  @IsString({ message: 'Senha deve ser uma string' })
  password: string

  @ApiProperty({ description: 'Data de criação do usuário' })
  @IsDate({ message: 'Data de criação deve ser uma data' })
  created_at?: Date

  @ApiProperty({ description: 'Data de atualização do usuário' })
  @IsDate({ message: 'Data de atualização deve ser uma data' })
  updated_at?: Date

  @ApiProperty({ description: 'Verifica se um registro está ou não ativo' })
  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  active: boolean
}
