

const mongoose = require('mongoose');

const db = mongoose.connection ;

db.on("error", console.error.bind(console, "Ошибка подключения к MongoDB:"));
db.once("open", () => {
  console.log("Подключено к MongoDB");
});

mongoose.connect("mongodb://localhost:27017/mydatabase_winbd", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db ;

// mongoose.connect('http:localhost:');