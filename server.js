const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

app.use( session( {
    /* Aquí irían los atributos de nuestra sesión, como claves,
     * cómo se guarda, tiempo de expiración, etc...
     */
}));

    const authentication = function(req, res, next) {
    if (req.session && req.session.user === "Waiter" && req.session.admin)
    return next();
    else
    return res.sendStatus(401);
};

app.get('/login', function (req, res) {
    if (!req.query.username || !req.query.password) {
    res.send('login failed');
    } else if(req.query.username === "Waiter" || req.query.password === "employee") {
    req.session.user = "Waiter";
    req.session.admin = true;
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy();
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

