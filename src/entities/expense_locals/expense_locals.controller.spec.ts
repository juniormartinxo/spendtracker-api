import { Test, TestingModule } from '@nestjs/testing'
import { ExpenseLocalsController } from './expense_locals.controller'
import { ExpenseLocalsService } from './expense_locals.service'

describe('ExpenseLocalsController', () => {
  let controller: ExpenseLocalsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseLocalsController],
      providers: [ExpenseLocalsService],
    }).compile()

    controller = module.get<ExpenseLocalsController>(ExpenseLocalsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
