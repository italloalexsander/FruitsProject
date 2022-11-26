const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");




const url= 'mongodb://localhost:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url);

client.connect(function(err){
  assert.equal(null, err);
  console.log("Connected Successfully");

  const db = client.db(dbName);

  insertDocuments(db, () => {
    findDocuments(db, () => {
      client.close();})
    })
});

const insertDocuments = function(db, callback){
  const collection = db.collection('fruits');
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
    {
      name: "Banana",
      score: 9,
      result: "Great Stuff!"
    }
  ], function(err, result){
    assert.equal(err, null);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  })
}

const findDocuments = function(db, callback){

  const collection = db.collection('fruits');

  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  })
}