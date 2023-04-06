import { Injectable } from '@nestjs/common'
import { CreateInstallmentDto } from './dto/create-installment.dto'
import { UpdateInstallmentDto } from './dto/update-installment.dto'
import { InstallmentsRepository } from './repositories/installments.repository'

@Injectable()
export class InstallmentsService {
  constructor(private readonly repository: InstallmentsRepository) {}

  create(dto: CreateInstallmentDto) {
    return this.repository.create(dto)
  }

  async findAll(skip: number, take: number, order: string, direction: string) {
    return await this.repository.findAll(skip, take, order, direction)
  }

  findOne(uuid: string) {
    return this.repository.findOne(uuid)
  }

  update(uuid: string, dto: UpdateInstallmentDto) {
    return this.repository.update(uuid, dto)
  }

  remove(uuid: string) {
    return this.repository.remove(uuid)
  }
}
