const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamsSchema = new Schema({
  teamName: { type: String, trim: true, required: true },
  whyYourTeam: { type: String, trim: true, required: true },
  memberOneName: { type: String, trim: true, required: true },
  memberOneGithub: { type: String, trim: true, required: true, unique: true },
  memberOneLinkedin: { type: String, trim: true, required: true, unique: true },
  memberOneDone: { type: String, trim: true, required: true },
  memberTwoName: { type: String, trim: true },
  memberTwoGithub: { type: String, trim: true, unique: true },
  memberTwoLinkedin: { type: String, trim: true, unique: true },
  memberTwoDone: { type: String, trim: true },
  memberThreeName: { type: String, trim: true },
  memberThreeGithub: { type: String, trim: true, unique: true },
  memberThreeLinkedin: { type: String, trim: true, unique: true },
  memberThreeDone: { type: String, trim: true }
});

module.exports = mongoose.model('Teams', teamsSchema);
