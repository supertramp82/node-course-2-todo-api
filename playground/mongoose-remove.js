const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

//Todo.findOneAndRemove({})

Todo.findByIdAndRemove(new ObjectID('5b2c20e29a91ba9896159511')).then(doc => {
  console.log(doc);
});
