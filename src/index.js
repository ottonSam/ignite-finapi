const express = require('express');
const { v4: uuidV4 } = require('uuid');

const app = express();
app.use(express.json());

const customers = [];

app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const id = uuidV4();

  customers.push({
    cpf,
    name,
    id,
    statement: []
  });

  return res.status(201).send()

});

app.listen(3001);