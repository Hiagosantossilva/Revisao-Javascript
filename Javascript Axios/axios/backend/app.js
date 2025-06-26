import express from 'express';
import { drivers } from './data.js';
import cors from 'cors';

const baseAPIRoute = '/api/v1';

const app = express();
app.use(cors());

app.get(baseAPIRoute + '/drivers', (req, res) => {
  res.status(200).send(drivers);
});

const port = 3000;
app.listen(port, () => console.log('API rodando com sucesso'));
