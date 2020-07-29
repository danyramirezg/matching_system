const Team = require('../models/Teams');

exports.newTeam = async (req, res, next) => {
  const team = new Team(req.body);
  try {
    await team.save();
    res.json({ message: 'Team created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find({}, { _id: 0, __v: 0 });
    res.json(teams);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getTeam = async (req, res, next) => {
  try {
    const team = await Team.findOne({ _id: req.params.id }, { _id: 0, __v: 0 });
    res.json(team);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putTeam = async (req, res, next) => {
  try {
    const team = await Team.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(team);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteTeam = async (req, res, next) => {
  try {
    await Team.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Team deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};
