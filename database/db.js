const mongoose = require("mongoose");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log('smth wrong with db');
});

db.once("open", () => {
  console.log("Подключено к MongoDB");
});

mongoose.connect("mongodb://localhost:27017/mydatabase_winbd", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;

// mongoose.connect('http:localhost:');
