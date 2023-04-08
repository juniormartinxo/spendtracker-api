import { UserEntity } from 'src/entities/users/entities/user.entity'

export interface AutRequest extends Request {
  user: UserEntity
}
