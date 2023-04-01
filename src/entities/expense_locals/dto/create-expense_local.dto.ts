import { IsBoolean, IsDate, IsString } from 'class-validator'

export class CreateExpenseLocalDto {
  @IsString()
  description: string
  @IsDate()
  created_at?: Date
  @IsDate()
  updated_at?: Date
  @IsBoolean()
  active?: boolean
}
