const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

// DATABSE

const db = require('./config/databse');

// TEST KONEKCIJE NA BAZU
db.authenticate()
 .then(() => console.log('Veza sa bazom uspjesno uspostavljena'))
 .catch(err => console.log('Greska !' + err))

const app = express();

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');``

// Body Parser
app.use(bodyParser.urlencoded({ extended: false}));

// SET static folder
app.use(express.static(path.join(__dirname,'public')));

// Index route
app.get('/', (req, res) => res.render('index', {layout: 'landing'}));

// Movie route
app.use('/movies', require('./routes/movies'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server started on port ${PORT}'));