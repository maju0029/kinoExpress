import express from 'express';
import handlebars from 'express-handlebars';
//import renderPage from '.lib/renderPage.js';

const { engine } = handlebars;
const { engine } = require ('express-handlebars');
const app = express();
const PORT = 5080;

// Handlebars setup
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

/*app.get('/', (req, res) => {
  res.send('Hello, KinoExpress!');
});*/

app.use(express.static('static'));
app.listen(PORT, () => {
  console.log(`KinoExpress is running at http://localhost:${PORT}`);
});
