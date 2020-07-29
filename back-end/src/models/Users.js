const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const usersSchema = new Schema({
  name: { type: String, trim: true, required: true },
  userType: { type: String, default: 'student', enum: ['student', 'company'] },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true }
});

usersSchema.methods.encryptPwd = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

usersSchema.methods.matchPwd = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Users', usersSchema);
