const mongoose = require('mongoose');


var db;

mongoose.connect("mongodb://localhost:27017/fruitsDB");

db = mongoose.connection;


const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Sweet enough."
});

//fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String
});

const Person = mongoose.model("Person", personSchema)

const person = new Person({
  name: "John",
  age: 25,
  gender: "Male"
});

//person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 9,
  review: "Pretty good!"
});

const orange = new Fruit({
  name: "Orange",
  score: 10,
  review: "Actually the best fruit!"
});

// Fruit.insertMany([kiwi, orange], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Operation was succesfull")
//   }
// })

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    db.close();
    fruits.forEach(e => console.log(e.name));
  }
})

