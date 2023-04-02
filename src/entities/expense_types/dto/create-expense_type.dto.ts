import { IsBoolean, IsDate, IsString } from 'class-validator'
export class CreateExpenseTypeDto {
  @IsString()
  description: string

  @IsDate()
  created_at?: Date

  @IsDate()
  updated_at?: Date

  @IsBoolean()
  active?: boolean
}
