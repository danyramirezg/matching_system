const Admin = require('../models/Admins');

exports.newAdmin = async (req, res, next) => {
  const admin = new Admin(req.body);
  admin.password = await admin.encryptPwd(req.body.password);
  try {
    await admin.save();
    res.json({ message: 'Admin created' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find({}, { _id: 0, __v: 0, password: 0 });
    res.json(admins);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ _id: req.params.id }, { _id: 0, __v: 0, password: 0 });
    res.json(admin);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.putAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(admin);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteAdmin = async (req, res, next) => {
  try {
    await Admin.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Admin deleted' });
  } catch (error) {
    console.log(error);
    next();
  }
};
