const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const adminsSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true }
});

adminsSchema.methods.encryptPwd = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

adminsSchema.methods.matchPwd = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Admins', adminsSchema);
