const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/users');

const { PORT = 3000 } = process.env;
const app = express();


mongoose.connect('mongodb://localhost:27017/mestodb', {
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

app.listen(PORT);
