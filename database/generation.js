const faker = require('faker');

const generate = () => {
  let clear = dropdb()
  let random = randomProduct()

  let prod = {
    list_date: faker.date.recent(),
    condition: faker.lorem.word(),
    brand: random[0],
    type: random[1],
    packaging: random[2],
    material: random[3],
    rec_age: random[4],
    char_family: random[5],
    manfactured: random[6],
    era: random[7],
    year: random[8],
    size: random[9],
    upc: random[10],
    prod_des: faker.lorem.paragraphs(),
    item_des: faker.lorem.sentence(),
    img_url: 'https://loremflickr.com/320/240',
    item_number: i,
    hand_item_location: faker.address.state(),
    hand_ship_to: faker.address.country(),
    hand_ship_excludes: faker.address.country(),
    hand_qty: faker.random.number(),
    ship_price: faker.commerce.price(),
    ship_region:faker.address.country(),
    ship_service: faker.lorem.words(),
    ship_est_time: faker.date.future(),
    return_exist: faker.random.boolean(),
    return_deadline: faker.random.number(),
    return_type: faker.lorem.words(),
    return_pay_shipping: faker.lorem.words()
  }

  return prod


const randomProduct = () => {
  let array = [];
  for (let i = 0; i <= 10; i++) {
    let exist = Math.floor(Math.random() * 2)
    if (exist) {
      if (i <= 7 ) {
        let str = faker.lorem.words();
        array.push(str)
      } else {
        let val = faker.random.number();
        array.push(val)
      }
    } else {
      array.push('')
    }
  }
  return array
}


module.exports.generate = generate
module.exports.randomProduct = randomProduct