import { Test, TestingModule } from '@nestjs/testing'
import { v4 as uuidv4 } from 'uuid'
import { ExpensesController } from './expenses.controller'
import { ExpensesService } from './expenses.service'

const fakeRecords = [
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    expense_type_uuid: uuidv4(),
    payment_methods_uuid: uuidv4(),
    expense_local_uuid: uuidv4(),
    description: 'Test 01',
    date: new Date(),
    amount: 100,
    number_of_installments: 3,
    installments_first_due_date: new Date(),
    observations: 'Test 01',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    expense_type_uuid: uuidv4(),
    payment_methods_uuid: uuidv4(),
    expense_local_uuid: uuidv4(),
    description: 'Test 02',
    date: new Date(),
    amount: 150,
    number_of_installments: 3,
    installments_first_due_date: new Date(),
    observations: 'Test 02',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    expense_type_uuid: uuidv4(),
    payment_methods_uuid: uuidv4(),
    expense_local_uuid: uuidv4(),
    description: 'Test 03',
    date: new Date(),
    amount: 200,
    number_of_installments: 3,
    installments_first_due_date: new Date(),
    observations: 'Test 03',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
]

const serviceMock = {
  findAll: jest.fn().mockResolvedValue(fakeRecords),
  findOne: jest.fn().mockReturnValue(fakeRecords[0]),
  create: jest.fn().mockReturnValue(fakeRecords[0]),
  update: jest.fn().mockReturnValue(fakeRecords[0]),
  remove: jest.fn(),
}

describe('ExpensesController', () => {
  let controller: ExpensesController
  let service: ExpensesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpensesController],
      providers: [{ provide: ExpensesService, useValue: serviceMock }],
    }).compile()

    controller = module.get<ExpensesController>(ExpensesController)
    service = module.get<ExpensesService>(ExpensesService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should create a expense and return', async () => {
      const response = await controller.create(fakeRecords[0])

      expect(service.create).toBeCalledWith(fakeRecords[0])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('findAll', () => {
    it('should return all expenses', async () => {
      const skip = 0
      const take = 10
      const order = 'uuid'
      const direction = 'ASC'

      const response = await controller.findAll(skip, take, order, direction)

      expect(service.findAll).toBeCalledTimes(1)
      expect(response).toEqual(fakeRecords)
    })
  })

  describe('findOne', () => {
    it('should return one expense', async () => {
      const response = await controller.findOne(fakeRecords[0].uuid)

      expect(service.findOne).toBeCalledWith(fakeRecords[0].uuid)
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('update', () => {
    it('should update a expense', async () => {
      const response = await controller.update(fakeRecords[1].uuid, fakeRecords[1])

      expect(service.update).toBeCalledWith(fakeRecords[1].uuid, fakeRecords[1])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('remove', () => {
    it('should remove a expense', async () => {
      const response = await controller.remove(fakeRecords[2].uuid)

      expect(service.remove).toBeCalledWith(fakeRecords[2].uuid)
      expect(response).toBeUndefined()
    })
  })
})
