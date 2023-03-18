import { ConflictError } from './ConflictError'
import { PrismaClientError } from './PrismaClientError'

export class UniqueConstraintError extends ConflictError {
  constructor(error: PrismaClientError) {
    const uniqueField = error.meta.target

    super(`Um registro com este ${uniqueField} já existe`)
  }
}
