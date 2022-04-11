import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.APP_DB as string);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
  console.log('Error on mongoose connection', error.message);
});
