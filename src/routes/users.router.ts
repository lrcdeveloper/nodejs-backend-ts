import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();


router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    'messgae': 'Users'
  })
})

router.get('/hello', (req: Request, res: Response) => {
  res.status(200).json({
    'messgae': 'Hello users'
  })
})


export default router;
