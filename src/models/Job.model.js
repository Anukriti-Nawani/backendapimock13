const mongoose = require("mongoose");
const jobSchema = mongoose.Schema({
  company: { type: String },
  city: { type: String },
  location: { type: String },
  role: { type: String },

  language: { type: String },
  contract: { type: String },
});

const JobModel = mongoose.model("joblists", jobSchema);

module.exports = JobModel;
