const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamsSchema = new Schema({
    teamName: { type: String, trim: true, required: true },
    whyYourTeam: { type: String, trim: true, required: true },
    memberOneName: { type: String, trim: true, required: true },
    memberOneGithub: { type: String, trim: true, required: true },
    memberOneLinkedin: { type: String, trim: true, required: true },
    memberOneDone: { type: String, trim: true, required: true },
    memberTwoName: { type: String, trim: true },
    memberTwoGithub: { type: String, trim: true },
    memberTwoLinkedin: { type: String, trim: true },
    memberTwoDone: { type: String, trim: true },
    memberThreeName: { type: String, trim: true },
    memberThreeGithub: { type: String, trim: true },
    memberThreeLinkedin: { type: String, trim: true },
    memberThreeDone: { type: String, trim: true },

});

module.exports = mongoose.model('Teams', teamsSchema);
