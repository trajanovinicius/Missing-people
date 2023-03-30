const mongoose = require('mongoose');
require('dotenv/config');

module.exports = {
  connect() {
    try {
      mongoose
        .connect(
          `mongodb+srv://viniciustrajanobs:${process.env.PASSWORD}@apicluster.sa23shh.mongodb.net/?retryWrites=true&w=majority`,
        )
        .then(console.log('Database connected'));
    } catch (error) {
      console.log(error);
    }
  },
};
