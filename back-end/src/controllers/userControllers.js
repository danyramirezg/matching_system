const User = require('../models/Users');

exports.newUser = async (req, res, next) => {
  const user = new User(req.body);
  user.password = await user.encryptPwd(req.body.password);
  try {
    await user.save();
    res.json({ message: 'User created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { _id: 0, __v: 0 });
    res.json(users);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id }, { _id: 0, __v: 0 });
    res.json(user);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};
