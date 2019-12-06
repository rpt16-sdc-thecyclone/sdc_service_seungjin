const db = require('./index1.js')
const faker = require('faker');
// https://loremflickr.com/320/240

let seed = () => {
  const items = [];

  for (var i = 0; i <= 100; i++) {
    items.push([faker.date.recent(), faker.lorem.word(), faker.lorem.word(), faker.commerce.productAdjective(), faker.lorem.word(), faker.commerce.productMaterial(), faker.lorem.word(), faker.lorem.word(), faker.lorem.words(), faker.lorem.word(), 2019, faker.lorem.word(), faker.random.number(), faker.lorem.sentence(), faker.lorem.sentence(), "https://loremflickr.com/320/240", faker.address.state(), faker.address.country(), faker.address.country(), faker.random.number(), faker.commerce.price(), faker.address.country(), faker.lorem.words(), faker.date.future(), faker.random.boolean(), faker.random.number(), faker.lorem.words(), faker.lorem.words()])
  }

  db.pool.query('INSERT INTO sdcschema.description (list_date, condition, brand, type, packaging, material, rec_age, char_family, manufactured, era, year, size, upc, seller_prod_desc, seller_item_desc, seller_img_url, hand_item_location, hand_ship_to, hand_ship_excludes, hand_qty, ship_cost, ship_region, ship_service, ship_est_time, return_exist, return_deadline, return_type, return_pay_shipping) VALUES ', items[0], (err, res) => {
    if (err) {
      throw err;
    }
    console.log('Description data successfully populated')
  })



}

seed();