import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import fileupload from 'express-fileupload';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.APP_DB as string);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
  console.log('Error on mongoose connection', error.message);
});

const app = express();
app.use(cors());

app.use(express());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (request, response) => response.json({ message: 'Hello world' }));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on ${process.env.BASE_URL}`);
});
