const { UserWaiter } = require('../models');

const waiterData = [

    {
    username: 'Walt',
    email: 'WaltWaiter@email.com',
    password: 'WaltTheWaiter',

    }
,
    {g
        username: 'John',
    email: 'JohnWaiter@email.com',
    password: 'JohnTheWaiter',

    }]


const seedWaiter = () => UserWaiter.bulkCreate(waiterData);

module.exports = seedWaiter;
