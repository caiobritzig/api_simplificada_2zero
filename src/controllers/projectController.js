const Project = require('../models/project');

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = await Project.create({ name, description });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar projeto' });
  }
};

exports.list = async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const project = await Project.findByPk(id);
  if (!project) return res.status(404).send('Projeto não encontrado');
  if (name !== undefined) project.name = name;
  if (description !== undefined) project.description = description;
  await project.save();
  res.json(project);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findByPk(id);
  if (!project) return res.status(404).send('Projeto não encontrado');
  await project.destroy();
  res.sendStatus(204);
};