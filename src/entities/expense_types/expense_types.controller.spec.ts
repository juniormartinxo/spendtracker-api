import { Test, TestingModule } from '@nestjs/testing'
import { v4 as uuidv4 } from 'uuid'
import { ExpenseTypesController } from './expense_types.controller'
import { ExpenseTypesService } from './expense_types.service'

const fakeRecords = [
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Rent',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Food',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Transport',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
]

const serviceMock = {
  create: jest.fn().mockReturnValue(fakeRecords[0]),
  findAll: jest.fn().mockResolvedValue(fakeRecords),
  findOne: jest.fn().mockReturnValue(fakeRecords[1]),
  update: jest.fn().mockReturnValue(fakeRecords[2]),
  remove: jest.fn(),
}

describe('ExpenseTypesController', () => {
  let controller: ExpenseTypesController
  let service: ExpenseTypesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseTypesController],
      providers: [{ provide: ExpenseTypesService, useValue: serviceMock }],
    }).compile()

    controller = module.get<ExpenseTypesController>(ExpenseTypesController)
    service = module.get<ExpenseTypesService>(ExpenseTypesService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should create a expense type and return', async () => {
      const response = await controller.create(fakeRecords[0])

      expect(service.create).toBeCalledWith(fakeRecords[0])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('findAll', () => {
    it('should return all expense types', async () => {
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
    it('should return one expense type', async () => {
      const response = await controller.findOne(fakeRecords[1].uuid)

      expect(service.findOne).toBeCalledWith(fakeRecords[1].uuid)
      expect(response).toEqual(fakeRecords[1])
    })
  })

  describe('update', () => {
    it('should update a expense type', async () => {
      const response = await controller.update(fakeRecords[0].uuid, fakeRecords[2])

      expect(service.update).toBeCalledWith(fakeRecords[0].uuid, fakeRecords[2])
      expect(response).toEqual(fakeRecords[2])
    })
  })

  describe('remove', () => {
    it('should remove a expense type', async () => {
      const response = await controller.remove(fakeRecords[2].uuid)

      expect(service.remove).toBeCalledWith(fakeRecords[2].uuid)
      expect(response).toBeUndefined()
    })
  })
})
