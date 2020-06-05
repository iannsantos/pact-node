import { Router } from 'express';
import GetBalanceByClientID from '../services/GetBalanceByClientID';

const routes = Router();

routes.use((req, _res, next) => {
  const { method, url } = req;

  console.log(`[${method.toUpperCase()}] ${url}`);

  return next();
});

routes.get('/client/:id', async (req, res) => {
  const { id } = req.params;

  const { accountID, balance, clientID } = await GetBalanceByClientID({
    clientID: Number(id),
  });

  return res.status(201).json({ accountID, balance, clientID });
});

export default routes;
