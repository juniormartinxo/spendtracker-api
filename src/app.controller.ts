import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { IsPublic } from './auth/decorator/is-public.decorator'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  init(): string {
    return this.appService.init()
  }
}
