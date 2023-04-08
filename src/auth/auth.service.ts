import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { UnauthorizedError } from 'src/common/errors/types/UnauthorizedError'
import { UserEntity } from 'src/entities/users/entities/user.entity'
import { UsersService } from '../entities/users/users.service'
import { UserPayload } from './models/UserPayload'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

  login(user: UserEntity) {
    const payload: UserPayload = {
      sub: user.uuid,
      email: user.email,
      name: user.name,
    }

    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findByEmail(email)

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (isPasswordValid) {
        return { ...user, password: undefined }
      }
    }

    throw new UnauthorizedError('Invalid credentials')
  }
}
