import app from './src/app.js';
// eslint-disable-next-line no-unused-vars
import blocklist from './src/redis/blocklist.js';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
