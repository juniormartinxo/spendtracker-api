import { PrismaClientError } from '../types/PrismaClientError'

export const isPrismaError = (error: PrismaClientError) => {
  return (
    typeof error.code === 'string' &&
    typeof error.clientVersion === 'string' &&
    (typeof error.meta === 'object' || typeof error.meta === 'undefined')
  )
}
