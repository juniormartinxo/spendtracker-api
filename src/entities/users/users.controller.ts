import { Body, Controller, Delete, Get, Param, Patch, Post, HttpCode, BadRequestException } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.service.create(dto)
  }

  @Get()
  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.service.findAll(skip, take, order, direction)
  }

  @Get('get-user/:uuid')
  async findOne(@Param('uuid') uuid: string) {
    return await this.service.findOne(uuid)
  }

  @Patch(':uuid')
  async update(@Param('uuid') uuid: string, @Body() dto: UpdateUserDto) {
    return await this.service.update(uuid, dto)
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string) {
    return await this.service.remove(uuid)
  }
}
