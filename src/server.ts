import express, { Application, Request, Response, NextFunction, Router } from 'express';
import routerAPI from './routes';
import roueterApi from './routes';

const app: Application = express();
const router: Router = express.Router()
const port: number | string = process.env.PORT || 3000;

app.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello world')
});

routerAPI(app);

app.listen(port, () => { console.log('Listening on port:', port) })
