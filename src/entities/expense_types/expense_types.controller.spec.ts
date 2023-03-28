import { Test, TestingModule } from '@nestjs/testing'
import { ExpenseTypesController } from './expense_types.controller'
import { ExpenseTypesService } from './expense_types.service'

describe('ExpenseTypesController', () => {
  let controller: ExpenseTypesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseTypesController],
      providers: [ExpenseTypesService],
    }).compile()

    controller = module.get<ExpenseTypesController>(ExpenseTypesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
