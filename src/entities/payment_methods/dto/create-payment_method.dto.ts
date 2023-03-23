import { IsString, IsInt, IsBoolean } from 'class-validator'

export class CreatePaymentMethodDto {
  @IsString()
  description: string
  @IsBoolean()
  active: boolean
}
