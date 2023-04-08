import { ApiProperty } from '@nestjs/swagger'
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ description: 'Nome do usuário' })
  @IsString({ message: 'name deve ser uma string' })
  @IsNotEmpty({ message: 'name não foi enviado' })
  name: string

  @ApiProperty({ description: 'E-mail do usuário' })
  @IsEmail({}, { message: 'email deve ser um e-mail válido' })
  @IsNotEmpty({ message: 'email não foi enviado' })
  email: string

  @ApiProperty({ description: 'Senha do usuário' })
  @IsString({ message: 'password deve ser uma string' })
  @MinLength(8, { message: 'password deve ter no mínimo 8 caracteres' })
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/g, {
    message:
      'password deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
  })
  @IsNotEmpty({ message: 'password não foi enviado' })
  password: string

  @ApiProperty({ description: 'Data de criação do usuário' })
  @IsDate({ message: 'Data de criação deve ser uma data' })
  @IsEmpty({ message: 'Data de criação deve ser vazia' })
  @IsOptional()
  created_at?: Date

  @ApiProperty({ description: 'Data de atualização do usuário' })
  @IsDate({ message: 'Data de atualização deve ser uma data' })
  @IsOptional()
  updated_at?: Date

  @ApiProperty({ description: 'Verifica se um registro está ou não ativo' })
  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  @IsOptional()
  active: boolean
}
