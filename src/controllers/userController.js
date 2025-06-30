const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
};

exports.list = async (req, res) => {
  const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
  res.json(users);
};

exports.updateName = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).send('Usuário não encontrado');
  user.name = name;
  await user.save();
  res.json({ id: user.id, name: user.name, email: user.email });
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).send('Usuário não encontrado');
  await user.destroy();
  res.sendStatus(204);
};