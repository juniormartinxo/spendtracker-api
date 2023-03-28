import { PartialType } from '@nestjs/mapped-types'
import { CreateExpenseLocalDto } from './create-expense_local.dto'

export class UpdateExpenseLocalDto extends PartialType(CreateExpenseLocalDto) {}
