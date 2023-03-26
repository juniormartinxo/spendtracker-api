import { Test, TestingModule } from '@nestjs/testing'
import { InstallmentsController } from './installments.controller'
import { InstallmentsService } from './installments.service'

describe('InstallmentsController', () => {
  let controller: InstallmentsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstallmentsController],
      providers: [InstallmentsService],
    }).compile()

    controller = module.get<InstallmentsController>(InstallmentsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
