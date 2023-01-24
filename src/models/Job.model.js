const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  company: { type: String },
  city: { type: String },
  location: { type: String },
  role: { type: String },

  language: { type: String },
  contract: { type: String },
});

const JobModel = model("joblists", jobSchema);

module.exports = JobModel;