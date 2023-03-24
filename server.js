const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers')

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

// Middleware
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views',  path.join(__dirname, '/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// AUTHENTICATION SESSIONS
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');

app.use(session({
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false
}));

// Routes
const routes = require('./controllers/');
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}! Visit http://localhost:${PORT}`));
});
