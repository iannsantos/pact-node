import cors from 'cors';
import express from 'express';
import routes from './routes';

const APP_PORT = 3334;

const app = express();

app.listen(APP_PORT, () => console.log(`[SERVER] Running on port ${APP_PORT}`));

app.use(express.json());
app.use(cors());
app.use(routes);
