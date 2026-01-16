import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, KinoExpress!');
});

app.listen(5080);