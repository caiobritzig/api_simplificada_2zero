const { tasks } = require('../models/task');

exports.create = (req, res) => {
  const { title, status, projectId, userId } = req.body;
  const id = require('../models/task').nextId++;
  const task = { id, title, status: !!status, projectId, userId };
  tasks.push(task);
  res.status(201).json(task);
};

exports.list = (req, res) => {
  res.json(tasks);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).send('Tarefa não encontrada');
  if (title !== undefined) task.title = title;
  if (status !== undefined) task.status = !!status;
  res.json(task);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  const idx = tasks.findIndex(t => t.id == id);
  if (idx === -1) return res.status(404).send('Tarefa não encontrada');
  tasks.splice(idx, 1);
  res.sendStatus(204);
};