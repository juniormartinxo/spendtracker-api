import { Test, TestingModule } from '@nestjs/testing'
import { ExpenseLocalsService } from './expense_locals.service'

describe('ExpenseLocalsService', () => {
  let service: ExpenseLocalsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseLocalsService],
    }).compile()

    service = module.get<ExpenseLocalsService>(ExpenseLocalsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
