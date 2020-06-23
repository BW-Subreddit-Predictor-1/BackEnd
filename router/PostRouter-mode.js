const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    insert
    // update,
    // remove,
  };
  
  function find() {
    return db('posts');
  }

  function findById(id) {
      return db('post')
      .where({id})
      .first();
}

function insert(post) {
    return db('posts')
      .insert(post, 'id')
      .then(ids => ({ id: ids[0] }));
  }