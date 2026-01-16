import express from 'express';
//import handlebars from 'express-handlebars';
//import renderPage from '.lib/renderPage.js';

//const { engine } = handlebars;
//const { engine } = require ('express-handlebars');

/*app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', (req, res) => {
  res.send('Hello, KinoExpress!');
});

app.listen(5080);*/

const app = express();
const PORT = 5080;

app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`KinoExpress is running at http://localhost:${PORT}`);
});
