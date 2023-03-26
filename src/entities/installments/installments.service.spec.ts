import { Test, TestingModule } from '@nestjs/testing'
import { InstallmentsService } from './installments.service'

describe('InstallmentsService', () => {
  let service: InstallmentsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstallmentsService],
    }).compile()

    service = module.get<InstallmentsService>(InstallmentsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
