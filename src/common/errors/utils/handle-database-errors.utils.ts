import { DatabaseError } from '../types/DatabaseError'
import { PrismaClientError } from '../types/PrismaClientError'
import { UniqueConstraintError } from '../types/UniqueConstraintError'

enum PrismaErrors {
  UniqueConstrainFail = 'P2002',
}

export const handleDatabaseErrors = (error: PrismaClientError) => {
  switch (error.code) {
    case PrismaErrors.UniqueConstrainFail:
      return new UniqueConstraintError(error)

    default:
      return new DatabaseError(error.message)
  }
}
