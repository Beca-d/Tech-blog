const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'flyingHigh',
        email: 'flyingHigh@gmail.com',
        password: 'password'
      },
      {
        username: 'HoweeDoo',
        email: 'jhoweee@email.com',
        password: 'password'
      },
      {
        username: 'DannyBoi',
        email: 'Dan1000@hotmail.com',
        password: 'password'
      },
      {
        username: 'JerrDimascus',
        email: 'heliski@cmh.ca',
        password: 'password'
      },
      {
        username: 'djiri4',
        email: 'gingerly@fairmont.ca',
        password: 'password'
      },
      {
        username: 'LoBeans10',
        email: 'laura_SJ@yahoo.com',
        password: 'password'
      },
      {
        username: 'bsmith2',
        email: 'b.d.smith@hotmail.com',
        password: 'password'
      },
      {
        username: 'FlayerSlayer',
        email: 'kFlay7@live.ca',
        password: 'password'
      },
      {
        username: 'RonJon1',
        email: 'R.Jonn@live.ca',
        password: 'password'
      },
      {
        username: 'NinetiesGuy',
        email: 'Henri.Bass@gmail.com',
        password: 'password'
      },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;