exports.seed = function(knex, Promise) {
  return knex('posts')
    .truncate()
    .then(function() {
      return knex('posts').insert([
        {
          title:
            'I wish the ring had never come to me. I wish none of this had happened.',
          contents: 'Guess who said this',
        },
        {
          title: 'I think we should get off the road. Get off the road! Quick!',
          contents: 'Guess who said this',
        }
        
      ]);
    });
};
