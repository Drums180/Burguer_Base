const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// Middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// AUTHENTICATION PENDING
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');

app.use(session({
  secret: secretKey,
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
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

