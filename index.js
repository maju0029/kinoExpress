import express from 'express';
import handlebars from 'express-handlebars';
import fs from 'fs/promises';
//import renderPage from '.lib/renderPage.js';

const { engine } = handlebars;
//const { engine } = require ('express-handlebars');
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

app.get("/movies", async (req, res) => {
  try {
    const response = await fetch("https://plankton-app-xhkom.ondigitalocean.app/api/movies");
    const movies = await response.json();

    res.render("movies", {
      title: "Filmer",
      movies: movies.data
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Kunde inte hämta filmer");
  }
});

app.get("/movies/:id", async (req, res) => {
  const id = req.params.id;

  const response = await fetch (
    `https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`
  );

  const json = await response.json();

  res.render("movieinfo", {
    title: json.data.attributes.title,
    movie: json.data
  });
});