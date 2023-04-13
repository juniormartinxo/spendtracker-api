import fakeRecords from './records'

const repositoryMock = {
  create: jest.fn().mockReturnValue(fakeRecords[0]),
  findAll: jest.fn().mockResolvedValue(fakeRecords),
  findOne: jest.fn().mockReturnValue(fakeRecords[1]),
  update: jest.fn().mockReturnValue(fakeRecords[2]),
  remove: jest.fn(),
}

export default repositoryMock
