import { Application } from "express";
import usersRouter from './users.router';

const routerAPI = (app: Application) => {
  app.use('/users', usersRouter);
}

export default routerAPI
