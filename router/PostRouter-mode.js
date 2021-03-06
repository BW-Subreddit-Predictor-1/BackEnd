const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
  };
  
  function find() {
    return db('posts');
  }

  function findById(id) {
      return db('posts')
      .where({id}) //pulling from params
      .first();
}

function insert(post) {
    return db('posts')
      .insert(post, 'id')
      .then(ids => ({ id: ids[0] }));
  }

  function update(id, post) {
    return db('posts')
      .where('id', Number(id))
      .update(post);
  }

  function remove(id) {
    return db('posts')
      .where('id', Number(id))
      .del();
  }