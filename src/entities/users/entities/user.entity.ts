import { User } from '.prisma/client'

export class UserEntity implements User {
  uuid: string
  name: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
  active: boolean
}
