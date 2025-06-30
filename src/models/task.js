const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Project = require('./project');

const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
});

Task.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Task.belongsTo(Project, { foreignKey: 'projectId', as: 'project' });
Project.hasMany(Task, { foreignKey: 'projectId', as: 'tasks' });

module.exports = Task;