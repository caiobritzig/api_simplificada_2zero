const { projects } = require('../models/project');

exports.create = (req, res) => {
  const { name, description } = req.body;
  const id = require('../models/project').nextId++;
  const project = { id, name, description };
  projects.push(project);
  res.status(201).json(project);
};

exports.list = (req, res) => {
  res.json(projects);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const project = projects.find(p => p.id == id);
  if (!project) return res.status(404).send('Projeto não encontrado');
  if (name !== undefined) project.name = name;
  if (description !== undefined) project.description = description;
  res.json(project);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  const idx = projects.findIndex(p => p.id == id);
  if (idx === -1) return res.status(404).send('Projeto não encontrado');
  projects.splice(idx, 1);
  res.sendStatus(204);
};