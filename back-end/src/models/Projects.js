const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  companyName: { type: String, trim: true, required: true },
  projectDescription: { type: String, trim: true, required: true },
  languages: { type: String, trim: true, required: true },
  mentorName: { type: String, trim: true, required: true },
  mentorEmail: { type: String, trim: true, required: true }
});

module.exports = mongoose.model('Projects', projectsSchema);
