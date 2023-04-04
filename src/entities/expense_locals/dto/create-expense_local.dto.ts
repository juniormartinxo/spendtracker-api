import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator'

export class CreateExpenseLocalDto {
  @IsString({ message: 'Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'Descrição não pode ser vazia' })
  description: string

  @IsDate({ message: 'Data de criação deve ser uma data' })
  created_at?: Date

  @IsDate({ message: 'Data de atualização deve ser uma data' })
  updated_at?: Date

  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  active?: boolean
}
