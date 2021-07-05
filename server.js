require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000

const db = require('./models/db')
db.once('connected', () => {
  console.log('OH NO HE PUSH MONGO')
})

// drake - views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// middleware | controllers
app.use((req, res, next) => {
  res.locals.data = {}
  next();
});
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/products', require('./controllers/routeController'));

app.listen(PORT, () => {
  console.log('whats an aquired taste? ', PORT);
});
