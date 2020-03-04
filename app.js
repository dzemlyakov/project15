require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const errorHandler = require('./middlewares/erorr-handler');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/users');

const { PORT, DATABASE_URL } = require('./config/config');

const app = express();

app.use(cookieParser());

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/signin', login);
app.post('/signup', createUser);

app.use('/cards', auth, cardsRouter);

app.use('/users', auth, usersRouter);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
app.use(errorHandler);

app.listen(PORT);
