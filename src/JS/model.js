const {parse} = require('csv-parse');
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
        t.increments('id').primary();
        t.string('sku');
        t.string('product_type');
        t.string('title');
        t.string('style');
        t.integer('type_id');
        t.string('category');

        //t.foreign('type_id').references('type_id').inTable('type_price');
      }).then(function(){
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

exports.AddSku = (sku) => {
  knex('sku').insert({sku: sku}).then(function(){
    console.log("inserted");
  });
  console.log(sku);
}

exports.ImportSku = (filepath) => {
  
  var skuData=[];
  fs.createReadStream(filepath)
  .pipe(parse({delimiter: '\n'}))
  .on('data', function(skurow){
    //console.log(skurow);
    skuData.push(skurow);
  })
  .on('end', function(){
    console.log(skuData);
  })


  
}