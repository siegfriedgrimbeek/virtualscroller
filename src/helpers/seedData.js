// External Dependanceies
import faker from 'faker'

let randomName = faker.name.findName()
let randomEmail = faker.internet.email()

const createData = (count) => {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push({
      id: i,
      name: randomName,
      email: randomEmail
    })
  }
  return data
}

export default createData
