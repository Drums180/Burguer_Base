const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    'heroku_65ecd7095c76c77', // database name
    'bb4a08c3e0fe06', // database user
    '3830932c', // database password
    {
      host: 'us-cdbr-east-06.cleardb.net',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
