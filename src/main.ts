import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { ConflictInterceptor } from './common/errors/interceptors/conflict.interceptor'
import { DatabaseInterceptor } from './common/errors/interceptors/database.interceptor'
import { UnauthorizedInterceptor } from './common/errors/interceptors/unauthorized.interceptor'
import { NotFoundInterceptor } from './common/errors/interceptors/notfound.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  app.useGlobalInterceptors(new ConflictInterceptor())
  app.useGlobalInterceptors(new DatabaseInterceptor())
  app.useGlobalInterceptors(new UnauthorizedInterceptor())
  app.useGlobalInterceptors(new NotFoundInterceptor())

  app.enableCors()

  await app.listen(process.env.APP_PORT || 3000)
}
bootstrap()
