const express = require('express');
const cors = require('cors');

const app = express();
const HOST = 'http://localhost:';
const PORT = 3333;

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('./routes');

app.get('/', (req, res) => {
  res.send('Back-end iniciado sem erro');
})

app.listen(PORT, () => {
  console.log(`Servidor inciado em ${HOST}${PORT}`);
  console.error();
});


