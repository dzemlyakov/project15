const Card = require('../models/card');

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Невозможно создать карточку -- ${err}` }));
};

module.exports.getAllCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Невозможно найти карточку' }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send(card !== null ? { data: card } : { data: 'Невозможно удалить' }))
    .catch(() => res.status(500).send({ message: 'Невозможно удалить карточку' }));
};
