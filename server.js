const express = require ("express")
const exphbs = require ("express-handlebars")
const path = require ("path")
const session = require ("express-session")
const sequelize = require ("./config/connection")

const app = express ()
// const sesh ={} this will be used for the loggin with exprees library
const hbs = exphbs.create({})

app.engine("hbs", hbs.engine)
app.set ("view engine","handlebars") 
app.use(express.json()) 

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


sequelize.sync({ force }).then(() => {
  app.listen(3001, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
