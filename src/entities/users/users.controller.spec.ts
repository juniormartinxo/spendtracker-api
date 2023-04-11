import { Test, TestingModule } from '@nestjs/testing'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { uuid } from 'uuidv4'

const fakeRecords = [
  {
    uuid: uuid(),
    name: 'User 01',
    email: 'user-01@gmail.com',
    password: undefined,
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuid(),
    name: 'User 02',
    email: 'user-02@gmail.com',
    password: undefined,
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuid(),
    name: 'User 03',
    email: 'user-04@gmail.com',
    password: undefined,
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

describe('UsersController', () => {
  let controller: UsersController
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: serviceMock }],
    }).compile()

    controller = module.get<UsersController>(UsersController)
    service = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('create', () => {
    it('should create a user and return', async () => {
      const response = await controller.create(fakeRecords[0])

      expect(service.create).toBeCalledWith(fakeRecords[0])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('findAll', () => {
    it('should return all user', async () => {
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
    it('should return one user', async () => {
      const response = await controller.findOne(fakeRecords[0].uuid)

      expect(service.findOne).toBeCalledWith(fakeRecords[0].uuid)
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('update', () => {
    it('should update a user', async () => {
      const response = await controller.update(fakeRecords[0].uuid, fakeRecords[0])

      expect(service.update).toBeCalledWith(fakeRecords[0].uuid, fakeRecords[0])
      expect(response).toEqual(fakeRecords[0])
    })
  })

  describe('remove', () => {
    it('should remove a user', async () => {
      const response = await controller.remove(fakeRecords[0].uuid)

      console.log(response)

      expect(service.remove).toBeCalledWith(fakeRecords[0].uuid)
      expect(response).toBeUndefined()
    })
  })
})
