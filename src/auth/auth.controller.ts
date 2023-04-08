import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { AutRequest } from './models/AuthRequest'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AutRequest) {
    return this.authService.login(req.user)
  }
}
