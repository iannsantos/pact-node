import { Router } from 'express';
import { account } from '../mock';

const routes = Router();

routes.use((req, _res, next) => {
  const { method, url } = req;

  console.log(`[${method.toUpperCase()}] ${url}`);

  return next();
});

routes.get('/balance/:clientID', async (req, res) => {
  return res.status(201).json(account);
});

export default routes;
