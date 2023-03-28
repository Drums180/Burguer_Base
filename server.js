const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const helpers = require('./utils/helpers');

// Require custom Handlebars helpers
require('./utils/helpers');

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const PORT = process.env.PORT || 3001;

// Helpers and hbd
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: helpers,
});

// Middleware
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views',  path.join(__dirname, '/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
const routes = require('./controllers/');
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something broke! Error: ${err.message}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}! Visit http://localhost:${PORT}`));
});
