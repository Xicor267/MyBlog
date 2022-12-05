
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRouter);

const URI = 'mongodb+srv://admin:mODYwAPc0eBvJMcl@cluster0.cbgbw.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server Running on Port:[ ${PORT} ]`);
    });
  })
  .catch((err) => {
    console.log('Error', err);
  });
mongoose.set('useFindAndModify', false);