const { UserAdmin } = require('../models');

const adminData = [

    {
    username: 'TomAdmin',
    email: 'TomAdmin@email.com',
    password: 'TomTheAdmin',
    },
    {
    username: 'Walt',
    email: 'WaltWaiter@email.com',
    password: 'WaltTheWaiter',
    
    },
    
    {
    username: 'John',
    email: 'JohnWaiter@email.com',
    password: 'JohnTheWaiter',
    
    }
,]


const seedAdmin = () => UserAdmin.bulkCreate(adminData);

module.exports = seedAdmin;
