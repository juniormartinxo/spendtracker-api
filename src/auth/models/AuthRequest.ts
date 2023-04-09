import { UserEntity } from 'src/entities/users/entities/user.entity'

export interface AuthRequest extends Request {
  user: UserEntity
}
