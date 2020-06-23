exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
  
      users
        .string('FirstName', 255)
        .notNullable()
      users
        .string('LastName', 255)
        .notNullable();
      users
        .string('Email', 255)
        .notNullable();
      users
        .string('password', 255)
        .notNullable();
    
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
