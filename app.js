const mongoose = require('mongoose');


var db;

mongoose.connect("mongodb://localhost:27017/fruitsDB");

db = mongoose.connection;


const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Need a name"]
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
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

const peach = new Fruit({
  name: "Error",
  score: 7,
  review: "I don't like it"
});

//peach.save();



Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    db.close();
    fruits.forEach(e => console.log(e.name));
  }
})

Fruit.updateOne({ _id: "6383b1a07ebf2b29699566d9" }, { name: "Peach" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Name updated succesfully");
  }
})

