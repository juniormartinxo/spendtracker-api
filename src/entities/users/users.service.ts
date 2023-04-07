import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersRepository } from './repositories/users.repository'

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  create(dto: CreateUserDto) {
    return this.repository.create(dto)
  }

  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.repository.findAll(skip, take, order, direction)
  }

  findOne(uuid: string) {
    return this.repository.findOne(uuid)
  }

  update(uuid: string, dto: UpdateUserDto) {
    return this.repository.update(uuid, dto)
  }

  remove(uuid: string) {
    return this.repository.remove(uuid)
  }
}
