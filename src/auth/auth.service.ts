import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
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

    const accessToken = this.jwtService.sign(payload)

    return {
      accessToken,
      user: {
        uuid: user.uuid,
        name: user.name,
        email: user.email,
      },
      tokenType: 'Bearer',
      expiresIn: 3600,
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email)

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (isPasswordValid) {
        return { ...user, password: undefined }
      }
    }

    throw new Error('Invalid credentials')
  }
}
