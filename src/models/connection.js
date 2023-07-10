const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;
// const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}:27017/${NOTES_APP_MONGODB_DATABASE}`;

const connectToDatabase = async () => {
    try {
      await mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log('Database is connected');
    } catch (err) {
      console.error(err);
    }
  };

  connectToDatabase();