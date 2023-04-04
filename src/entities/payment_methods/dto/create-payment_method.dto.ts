import { IsString, IsInt, IsBoolean, IsNotEmpty } from 'class-validator'

export class CreatePaymentMethodDto {
  @IsString({ message: 'Nome deve ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  description: string

  @IsBoolean({ message: 'Ativo deve ser um booleano' })
  @IsNotEmpty({ message: 'Ativo não pode ser vazio' })
  active: boolean
}
