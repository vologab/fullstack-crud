const mongoose = require('mongoose');

const dbConnection = mongoose.createConnection(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports.dbConnection = dbConnection;
