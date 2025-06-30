const Task = require('../models/task');

exports.create = async (req, res) => {
  try {
    const { title, status, projectId, userId } = req.body;
    const task = await Task.create({ title, status, projectId, userId });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar tarefa' });
  }
};

exports.list = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const task = await Task.findByPk(id);
  if (!task) return res.status(404).send('Tarefa não encontrada');
  if (title !== undefined) task.title = title;
  if (status !== undefined) task.status = status;
  await task.save();
  res.json(task);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task) return res.status(404).send('Tarefa não encontrada');
  await task.destroy();
  res.sendStatus(204);
};