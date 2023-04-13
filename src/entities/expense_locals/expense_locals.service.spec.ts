import { Test, TestingModule } from '@nestjs/testing'
import fakeRecords from 'test/mocks/expense_locals/records'
import repositoryMock from 'test/mocks/expense_locals/repository'
import { ExpenseLocalsService } from './expense_locals.service'
import { ExpenseLocalsRepository } from './repositories/expense_locals.repository'

describe('ExpenseLocalsService', () => {
  let service: ExpenseLocalsService
  let repository: ExpenseLocalsRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseLocalsService, { provide: ExpenseLocalsRepository, useValue: repositoryMock }],
    }).compile()

    service = module.get<ExpenseLocalsService>(ExpenseLocalsService)
    repository = module.get<ExpenseLocalsRepository>(ExpenseLocalsRepository)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    it(`should create a new expense type`, async () => {
      const response = await service.create(fakeRecords[0])

      expect(response).toBe(fakeRecords[0])
      expect(repository.create).toHaveBeenCalledTimes(1)
      expect(repository.create).toHaveBeenCalledWith(fakeRecords[0])
    })
  })

  describe('findAll', () => {
    it(`should return an expense type`, async () => {
      const skip = 0
      const take = 10
      const order = 'uuid'
      const direction = 'ASC'

      const response = await service.findAll(skip, take, order, direction)

      expect(response).toEqual(fakeRecords)
      expect(repository.findAll).toHaveBeenCalledTimes(1)
      expect(repository.findAll).toHaveBeenCalledWith(skip, take, order, direction)
    })
  })
})
