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
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Rabin",
    //       age: 15,
    //     },
    //     {
    //       name: "Nabin",
    //       age: 25,
    //     },
    //   ],
    //   (err, result) => {
    //     if (err) {
    //       return console.log("errors");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    db.collection("Tasks").insertMany(
      [
        {
          description: "To build  api using node and express",
          completed: false,
        },
        {
          description: "To buy eggs",
          completed: true,
        },
        {
          description: "To crack node js",
          completed: false,
        },
      ],
      (err, result) => {
        if (err) {
          return console.log(" This is error LOL");
        }
        console.log(result.ops);
      }
    );
  }
);
