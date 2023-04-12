import { Test, TestingModule } from '@nestjs/testing'
import { v4 as uuidv4 } from 'uuid'
import { InstallmentsController } from './installments.controller'
import { InstallmentsService } from './installments.service'

const fakeRecords = [
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    expense_uuid: uuidv4(),
    number: 1,
    due_date: new Date(),
    amount: 100,
    paid: false,
    paid_date: null,
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    expense_uuid: uuidv4(),
    number: 2,
    due_date: new Date(),
    amount: 150,
    paid: false,
    paid_date: null,
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    expense_uuid: uuidv4(),
    number: 3,
    due_date: new Date(),
    amount: 200,
    paid: false,
    paid_date: null,
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

describe('InstallmentsController', () => {
  let controller: InstallmentsController
  let service: InstallmentsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstallmentsController],
      providers: [{ provide: InstallmentsService, useValue: serviceMock }],
    }).compile()

    controller = module.get<InstallmentsController>(InstallmentsController)
    service = module.get<InstallmentsService>(InstallmentsService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should create a installment and return', async () => {
      const response = await controller.create(fakeRecords[0])

      expect(service.create).toBeCalledWith(fakeRecords[0])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('findAll', () => {
    it('should return all installments', async () => {
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
    it('should return one installment', async () => {
      const response = await controller.findOne(fakeRecords[0].uuid)

      expect(service.findOne).toBeCalledWith(fakeRecords[0].uuid)
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('update', () => {
    it('should update a installment', async () => {
      const response = await controller.update(fakeRecords[0].uuid, fakeRecords[0])

      expect(service.update).toBeCalledWith(fakeRecords[0].uuid, fakeRecords[0])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('remove', () => {
    it('should remove a installment', async () => {
      const response = await controller.remove(fakeRecords[0].uuid)

      expect(service.remove).toBeCalledWith(fakeRecords[0].uuid)
      expect(response).toBeUndefined()
    })
  })
})
