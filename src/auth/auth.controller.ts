import { Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common'
import { UserEntity } from 'src/entities/users/entities/user.entity'
import { AuthService } from './auth.service'
import { CurrentUser } from './decorator/current-user.decorator'
import { IsPublic } from './decorator/is-public.decorator'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { AuthRequest } from './models/AuthRequest'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user)
  }

  @Get('me')
  getMe(@CurrentUser() user: UserEntity): UserEntity {
    return user //this.appService.getMe()
  }
}
