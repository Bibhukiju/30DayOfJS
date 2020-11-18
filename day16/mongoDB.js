//CRUD operation

const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect");
    }
    const db = client.db(databaseName);

    //fetching data from dB

    // db.collection("users").findOne(
    //   {
    //     _id: mongoDB.ObjectID("5fb4ef2c1219760edc9131dc"),
    //   },
    //   (err, user) => {
    //     if (err) {
    //       return console.log(" you got error haha");
    //     }
    //     console.log(user);
    //   }
    // );
    db.collection("users")
      .find({ age: 25 })
      .toArray((err, users) => {
        if (err) {
          return console.log("err");
        }
        console.log(users);
      });
    db.collection("tasks").findOne(
      {
        _id: mongoDB.ObjectID("5fb4f09f3bc3853758e74f5c"),
      },
      (error, task) => {
        console.log(task);
      }
    ),
      db
        .collection("Tasks")
        .find({ completed: false })
        .toArray((err, task) => {
          if (err) {
            return console.log(err);
          }
          console.log(task);
        });
  }
);
// db.collection("Tasks").insertMany(
//   [
//     {
//       description: "To build  api using node and express",
//       completed: false,
//     },
//     {
//       description: "To buy eggs",
//       completed: true,
//     },
//     {
//       description: "To crack node js",
//       completed: false,
//     },
//   ],
//   (err, result) => {
//     if (err) {
//       return console.log(" This is error LOL");
//     }
//     console.log(result.ops);
//   }
// );
