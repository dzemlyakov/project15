require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { signupValidation, signinValidation } = require('./middlewares/validation');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const { errorHandler } = require('./middlewares/erorr-handler');
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

app.use(requestLogger);

app.post('/signin', signinValidation, login);
app.post('/signup', signupValidation, createUser);

app.use('/cards', auth, cardsRouter);

app.use('/users', auth, usersRouter);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT);
