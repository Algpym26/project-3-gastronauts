const db = require('../config/connection');
const { DDandD } = require('../models/restaurant');

const Diner = require('./DDD.json');

db.once('open', async () => {
  await DDandD.deleteMany({});

  const dinersDriveInsAndDives = await DDandD.insertMany(Diner);

  console.log('Restaurants seeded!');
  process.exit(0);
});