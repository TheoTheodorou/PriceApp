const { parse } = require('csv-parse');
var fs = require('fs');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite'
  }
})

exports.InitialiseDB = () => {

  knex.schema.hasTable('sku').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sku', function (t) {
        t.string('sku').primary();
        t.string('product_type');
        t.string('title');
        t.string('style');
        t.integer('type_id');
        t.string('category');

        //t.foreign('type_id').references('type_id').inTable('type_price');
      }).then(function () {
        console.log("Created SKU Table");
      })
    }
  });

  // knex.schema.hasTable('type_price').then(function (exists) {
  //   if (!exists) {
  //     return knex.schema.createTable('type_price', function (t) {
  //       t.increments('type_id').primary();
  //       t.string('type');
  //       t.string('tier');
  //       t.decimal('usd');
  //       t.decimal('gbp');
  //       t.decimal('eur');
  //     });
  //   }
  // });

  // knex.schema.hasTable('price').then(function (exists) {
  //   if (!exists) {
  //     return knex.schema.createTable('price', function (t) {
  //       t.string('sku').primary();
  //       t.string('type');
  //       t.string('tier');
  //       t.decimal('usd');
  //       t.decimal('gbp');
  //       t.decimal('eur');

  //       t.foreign('sku').references('sku').inTable('sku');
  //     });
  //   }
  // });
}

exports.LoadSKU = () => {
  return knex.select().from('sku').then(function (data) {
    var outputData = [];
    for (var i = 0; i < data.length; i++) {
      var input = data[i];
      outputData.push([input.sku, input.product_type, input.style, input.product_type, input.category]);
    }
    return outputData;
  });
}

exports.AddSku = (sku) => {
  knex('sku').insert({
    sku: sku[0],
    product_type: sku[1],
    title: sku[2],
    style: sku[3],
    type_id: sku[4],
    category: sku[5]
  }).then(function () {
    console.log("Added row");
  });
}

exports.DeleteSKU = (sku) => {
  knex('sku')
  .where({ sku: sku })
  .del()
  .then()
}

exports.ImportSku = (filepath) => {
  var skuData = [];
  fs.createReadStream(filepath)
    .pipe(parse({ delimiter: ',' }))
    .on('data', function (skurow) {
      //console.log(skurow);
      skuData.push(skurow);
    })
    .on('end', function () {
      skuData.forEach(element => {
        var row = [];
        for (let index = 0; index < element.length; index++) {
          row.push(element[index]);
        }
        exports.AddSku(row);
      });
    })
}