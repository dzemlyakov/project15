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
  Card.findByIdAndRemove(req.params.id)

    // eslint-disable-next-line consistent-return
    .then((card) => {
      if (JSON.stringify(card.owner) !== JSON.stringify(req.user._id)) return Promise.reject(new Error('У вас нет прав для удаления этой карточки!'));
      Card.remove(card)
        .then((cardDelete) => (cardDelete !== null ? res.status(200).send({ data: card }) : res.status(404).send({ data: 'Невозможно удалить, карточка с таким ID не найдена' })))
        .catch(() => res.status(500).send({ message: 'Невозможно удалить эту карточку' }));
    })
    .catch(() => res.status(500).send({ message: 'Невозможно удалить карточку' }));
};
