const db = require('./connection');
const { User, Job } = require('../models');
db.once('open', async () => {
  await User.deleteMany();
  await Job.deleteMany();
  process.exit();
});
