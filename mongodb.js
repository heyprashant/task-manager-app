// CRUD create read update delete

const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect( connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);
    // db.collection('users').insertMany([
    //   {name : 'ram', age: 23},
    //   {lastName: 'sam', age: 24}
    // ], (error, result) => {
    //   if(error){
    //     return console.log(error);
    //   }

    //   console.log(result.ops)
    // })

    // db.collection('users').findOne({_id :  new ObjectId('601fb187530de12a98c41d18') }, (error, user) => {
    //     if (error) {
    //       return console.log('unable to connect to fetch!')
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({age :24}).count( (error, count) => {
    //   console.log(count);
    // })

    // db.collection('users').updateOne({
    //   _id: new ObjectId("601fb187530de12a98c41d17")
    // }, {
    //   $inc: {
    //     age : 1
    //   }
    // }).then( results => {
    //   console.log(results)
    // }).catch( error => {
    //   console.log(error)
    // })

    // db.collection('tasks').insertMany([{
    //   description: "Clean the house",
    //   completed: true
    // },
    // {
    //   description: "Renew inspection",
    //   completed: false
    // },
    // {
    //   description: "pot plants",
    //   completed: false
    // }], (error, results) => {
    //   if(error) {
    //     return console.log(error)
    //   }
  
    // })    

    // db.collection('tasks').updateMany(
    //   {completed:  false},
    //   {
    //     $set: {
    //       completed: true
    //     }
    //   }).then( result => {
    //     console.log(result)
    //   }).catch( error => console.log(error))

    db.collection('tasks').deleteOne({
      completed: true
    }).then( res => console.log(res))
      .catch( err => console.log(err))

});
