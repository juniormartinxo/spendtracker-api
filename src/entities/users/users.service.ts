import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersRepository } from './repositories/users.repository'

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(dto: CreateUserDto) {
    return await this.repository.create(dto)
  }

  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.repository.findAll(skip, take, order, direction)
  }

  async findOne(uuid: string) {
    return await this.repository.findOne(uuid)
  }

  async findByEmail(email: string) {
    return await this.repository.findByEmail(email)
  }

  async update(uuid: string, dto: UpdateUserDto) {
    return await this.repository.update(uuid, dto)
  }

  async remove(uuid: string) {
    return await this.repository.remove(uuid)
  }
}
