const Project = require('../models/Projects');

exports.newProject = async (req, res, next) => {
  const project = new Project(req.body);
  try {
    await project.save();
    res.json({ message: 'Project created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({}, { _id: 0, __v: 0 });
    res.json(projects);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.id }, { _id: 0, __v: 0 });
    res.json(project);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putProject = async (req, res, next) => {
  try {
    const project = await Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(project);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    await Project.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Project deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};
