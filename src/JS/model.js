knex.schema.hasTable('items').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('items', function(t) {
        t.increments('id').primary();
        t.string('first_name', 100);
        t.string('last_name', 100);
        t.text('bio');
      });
    }
  });