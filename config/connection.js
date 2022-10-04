const Sequelize = require('sequelize');

 // use .env file
require('dotenv').config();

// // DB connection
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PW,
//       {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306,
//       }
//     );
let sequelize;
//fixed bug connect to database
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;