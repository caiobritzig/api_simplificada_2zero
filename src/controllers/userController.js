const { users } = require('../models/user');

exports.create = (req, res) => {
  const { name, email, password } = req.body;
  const id = require('../models/user').nextId++;
  const user = { id, name, email, password };
  users.push(user);
  res.status(201).json(user);
};

exports.list = (req, res) => {
  res.json(users);
};

exports.updateName = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find(u => u.id == id);
  if (!user) return res.status(404).send('Usuário não encontrado');
  user.name = name;
  res.json(user);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  const idx = users.findIndex(u => u.id == id);
  if (idx === -1) return res.status(404).send('Usuário não encontrado');
  users.splice(idx, 1);
  res.sendStatus(204);
};