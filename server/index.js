const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ start: 'Hello backend' });
});

const PORT = 5000;
app.listen(PORT);
