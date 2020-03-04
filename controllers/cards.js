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
    .catch(() => res.status(500).send({ message: 'Невозможно найти карточки' }));
};


module.exports.deleteCard = (req, res) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (card === null) return res.status(404).send({ message: 'Невозможно удалить, карточка с таким ID не найдена' });
      if (!card.owner.equals(req.user._id)) {
        return res.status(403).send({ message: 'Невозможно удалить чужую карточку, отсутсвуют права!' });
      }
      return Card.remove(card)
        .then(() => res.status(200).send({ data: card }));
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка при удалении карточки' }));
};
