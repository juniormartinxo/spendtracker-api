import { v4 as uuidv4 } from 'uuid'

const fakeRecords = [
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Supermarket',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Butchery',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
  {
    uuid: uuidv4(),
    user_uuid: uuidv4(),
    description: 'Pharmacy',
    created_at: new Date(),
    updated_at: new Date(),
    active: true,
  },
]

export default fakeRecords
