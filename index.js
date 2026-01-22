import { app } from './app.js';

const PORT = 5080;

app.listen(PORT, () => {
  console.log(`KinoExpress is running at http://localhost:${PORT}`);
});