const db = require('../config/connection');
const { User, Funko } = require('../models');

const userData = require('./userSeeds.json');
const funkoData = require('./funkoSeeds.json')

db.once('open', async () => {
  await User.deleteMany({});
  await Funko.deleteMany({});


  const users = await User.insertMany(userData);
  const funkos = await Funko.insertMany(funkoData);

  
// randomly assign a funko to each user
for (addToUser of users){
  const tempFunko = funkos[Math.floor(Math.random() * funkos.length)];
  addToUser.funkos = tempFunko._id;
  await addToUser.save();

}

  console.log('Seeds added!');
  process.exit(0);
});
