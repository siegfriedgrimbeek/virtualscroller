// External Dependanceies
import faker from 'faker'

let randomName = faker.name.findName()
let randomEmail = faker.internet.email()

const createData = (count) => {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push({
      id: i,
      name: faker.name.findName(),
      email: faker.internet.email()
    })
  }
  return data
}

export default createData
