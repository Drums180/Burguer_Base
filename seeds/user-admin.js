const { UserAdmin } = require('../models');

const adminData = [

    {
    username: 'TomAdmin',
    email: 'TomAdmin@email.com',
    password: 'TomTheAdmin',

},]


const seedAdmin = () => UserAdmin.bulkCreate(wadminData);

module.exports = seedAdmin;
