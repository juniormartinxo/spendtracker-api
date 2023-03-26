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

  findOne(id: number) {
    return this.repository.findOne(id)
  }

  update(id: number, dto: UpdateInstallmentDto) {
    return this.repository.update(id, dto)
  }

  remove(id: number) {
    return this.repository.remove(id)
  }
}
