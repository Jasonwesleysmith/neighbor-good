const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
  job: {
    type: String,
    required: true,
  },
  pay: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
  claimedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Job = model('Job', jobSchema);

module.exports = Job;
