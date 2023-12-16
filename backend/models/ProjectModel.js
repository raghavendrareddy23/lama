const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: String,
  // Other fields if needed
});

const ProjectModel = mongoose.model('ProjectModel', projectSchema);

module.exports = ProjectModel;
