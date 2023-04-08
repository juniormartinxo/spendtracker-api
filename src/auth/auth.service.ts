import { Injectable } from '@nestjs/common'
import { UsersService } from '../entities/users/users.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  login() {
    // throw new Error('Method not implemented.')
    return 'login'
  }
  constructor(private readonly userService: UsersService) {}

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
