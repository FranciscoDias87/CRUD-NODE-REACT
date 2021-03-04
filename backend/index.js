const express = require('express');
const cors = require('cors');

const app = express();
const HOST = 'http://localhost:'
const PORT = 3333;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('HELLO ola mundo');
})

app.listen(PORT, () => {
  console.log(`Serve started at: ${HOST}${PORT}`);
});


