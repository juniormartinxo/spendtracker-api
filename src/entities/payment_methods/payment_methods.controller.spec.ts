import { Test, TestingModule } from '@nestjs/testing'
import { v4 as uuidv4 } from 'uuid'
import { PaymentMethodsController } from './payment_methods.controller'
import { PaymentMethodsService } from './payment_methods.service'

const fakeRecords = [
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Payment Method 01',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Payment Method 02',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Payment Method 03',
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

describe('PaymentMethodsController', () => {
  let controller: PaymentMethodsController
  let service: PaymentMethodsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentMethodsController],
      providers: [{ provide: PaymentMethodsService, useValue: serviceMock }],
    }).compile()

    controller = module.get<PaymentMethodsController>(PaymentMethodsController)
    service = module.get<PaymentMethodsService>(PaymentMethodsService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should create a payment method and return', async () => {
      const response = await controller.create(fakeRecords[0])

      expect(service.create).toBeCalledWith(fakeRecords[0])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('findAll', () => {
    it('should return all payment methods', async () => {
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
    it('should return one payment method', async () => {
      const response = await controller.findOne(fakeRecords[0].uuid)

      expect(service.findOne).toBeCalledWith(fakeRecords[0].uuid)
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('update', () => {
    it('should update a payment method', async () => {
      const response = await controller.update(fakeRecords[0].uuid, fakeRecords[0])

      expect(service.update).toBeCalledWith(fakeRecords[0].uuid, fakeRecords[0])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('remove', () => {
    it('should remove a payment method', async () => {
      const response = await controller.remove(fakeRecords[0].uuid)

      expect(service.remove).toBeCalledWith(fakeRecords[0].uuid)
      expect(response).toBeUndefined()
    })
  })
})
