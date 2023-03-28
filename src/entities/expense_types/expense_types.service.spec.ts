import { Test, TestingModule } from '@nestjs/testing'
import { ExpenseTypesService } from './expense_types.service'

describe('ExpenseTypesService', () => {
  let service: ExpenseTypesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseTypesService],
    }).compile()

    service = module.get<ExpenseTypesService>(ExpenseTypesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
