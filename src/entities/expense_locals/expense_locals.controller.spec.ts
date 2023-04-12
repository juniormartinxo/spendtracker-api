import { Test, TestingModule } from '@nestjs/testing'
import { ExpenseLocalsController } from './expense_locals.controller'
import { ExpenseLocalsService } from './expense_locals.service'
import serviceMock from 'test/mocks/expense_locals/service'
import fakeRecords from 'test/mocks/expense_locals/records'

describe('ExpenseLocalsController', () => {
  let controller: ExpenseLocalsController
  let service: ExpenseLocalsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseLocalsController],
      providers: [{ provide: ExpenseLocalsService, useValue: serviceMock }],
    }).compile()

    controller = module.get<ExpenseLocalsController>(ExpenseLocalsController)
    service = module.get<ExpenseLocalsService>(ExpenseLocalsService)
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
