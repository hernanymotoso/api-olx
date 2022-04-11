import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import fileupload from 'express-fileupload';
import path from 'path';
import './databases/mongodb';
import routes from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);

// app.get('/', (request, response) => response.json({ message: 'Hello world' }));

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on ${process.env.BASE_URL}`);
});
