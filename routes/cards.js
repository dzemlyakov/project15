const cards = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createCard,
  getAllCards,
  deleteCard,
} = require('../controllers/cards');


cards.get('/', getAllCards);
cards.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().uri().required(),
  }),
}), createCard);
cards.delete('/:id', deleteCard);

module.exports = cards;
