// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5b2a9824d5d9e92bfc34af32') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    db.collection('Todos')
      .find({})
      .count()
      .then(
        count => {
          console.log(`Todos count: ${count}`);
        },
        err => {
          console.log('Unable to fetch todos', err);
        }
      );
    // db.close();
  }
);
