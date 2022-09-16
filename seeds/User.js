const { User } = require('../models');

const userdata = [
  {
      username:"alexus",
      password:"HSJDSD",
  },
  {
      username:"mariatxus",
      password:"sdsdsdsa",
  },
  {
      username:"brandonther",
      password:"hhdjaka",
  },
  {
      username:"lucas1993",
      password:"sjdsjdh",
  },
  {
      username:"Alan502",
      password:"Rdadad",
  },
  {
      username:"dIaNa96",
      password:"dadadaxxs",
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;