const mongoose = require("mongoose");

const db = mongoose.connection;



mongoose.connect("mongodb://localhost:27017/mydatabase_winbd", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;

// mongoose.connect('http:localhost:');
