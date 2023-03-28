import { PartialType } from '@nestjs/mapped-types'
import { CreateExpenseTypeDto } from './create-expense_type.dto'

export class UpdateExpenseTypeDto extends PartialType(CreateExpenseTypeDto) {}
