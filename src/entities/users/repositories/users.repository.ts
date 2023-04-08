import { Injectable } from '@nestjs/common'
import { Prisma } from '.prisma/client'
import OrderByType from 'src/common/types/OrderByType'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { UserEntity } from '../entities/user.entity'
import { UpdateUserDto } from '../dto/update-user.dto'

@Injectable()
export class UsersRepository {
  private readonly service: Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>

  constructor(private readonly prisma: PrismaService) {
    this.service = prisma.user
  }

  async create(dto: CreateUserDto): Promise<UserEntity> {
    return await this.service.create({
      data: dto,
    })
  }

  async findAll(skip: number, take: number, order: string, direction = 'asc'): Promise<UserEntity[]> {
    const orderFields: OrderByType = {
      description: 'description',
      created_at: 'created_at',
    }

    const orderBy: OrderByType = {}

    if (orderFields.hasOwnProperty(order)) {
      orderBy[orderFields[order]] = direction
    }

    return await this.service.findMany({
      skip,
      take,
      orderBy,
      where: {
        active: true,
      },
    })
  }

  async findOne(uuid: string) {
    return await this.service.findUnique({
      where: { uuid },
    })
  }

  async update(uuid: string, dto: UpdateUserDto) {
    return await this.service.update({
      where: { uuid },
      data: dto,
    })
  }

  async remove(uuid: string) {
    return await this.service.update({
      where: { uuid },
      data: { active: false },
    })
  }
}