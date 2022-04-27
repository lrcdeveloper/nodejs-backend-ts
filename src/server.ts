import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello world')
});

app.listen(process.env.PORT || 3000, () => { console.log('Listening on port:', process.env.PORT || '3000') })
