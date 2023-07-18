const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;
// const MONGODB_URI_LOCAL = `mongodb://localhost:27017/Mega_Sena`;

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