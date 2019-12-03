const { Product, Purchase } = require('./schema.js');

let query = (item, cb) => {
  let prodInfo = [];
  queryProd(item, (err,res) => {
    if (err) {
      cb(err)
    } else {
      prodInfo.push(res)
      queryPurc(item, (err, res) => {
        if (err) {
          cb(err)
        } else {
          prodInfo.push(res);
          cb(null, prodInfo)
        }
      });
    }
  });
}

let queryProd = (itemNum,cb) => {
  Product.findOne({'item_number':itemNum}, (err,res) => {
    if (err) {
      cb(err)
    } else {
      cb(null,res)
    }
  })
}

let queryPurc = (itemNum,cb) => {
  Purchase.findOne({'item_number': itemNum}, (err,res) => {
      if (err) {
        cb(err)
      } else {
        cb(null,res)
      }
  })
}

let deleteQuery = (itemNum) => {
  Product.deleteOne({item_number: 'itemNum'}, (err) => {
    if (err) return handleError(err);
  })
}

let update = (itemNum, productData) => {
  const product = JSON.parse(productData);
  Product.updateOne({item_number: 'itemNum'}, {brand: productData.brand}, (err) => {
    if (err) return handleError(err);
  })
}

let save = (productData) => {
  const product = JSON.parse(productData);

  let newData = new Product({
    item_number: product.number,
    list_date: product.date,
    item_spec: {
      condition: product.condition,
      brand: product.brand,
      type: product.type,
      packaging: product.packaging,
      material: product.material,
      rec_age: product.rec_age,
      char_family: product.char_family,
      manfactured: product.manfactured,
      era: product.era,
      year: product.year,
      size: product.size,
      upc: product.upc
    },
    seller_msg: {
      prod_des: product.prod_desc,
      item_des: product.item_des,
      img_url: ""
    }
  })


  newData.save((err) => {
    if (err) {
      return console.err(err);
    } else {
      console.log("new data saved to db")
    }
  })
}


module.exports = {
  query,
  queryProd,
  queryPurc,
  save,
  deleteQuery,
  update
}