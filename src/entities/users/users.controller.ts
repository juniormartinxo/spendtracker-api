import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
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

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string) {
    return await this.service.findOne(uuid)
  }

  @Get('get-user/:email')
  async findByEmail(@Param('email') email: string) {
    return await this.service.findByEmail(email)
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
