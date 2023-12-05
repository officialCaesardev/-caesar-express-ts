import express, { Router, Request, Response, NextFunction } from 'express';
import { AppError } from '@/utils/AppError';

const router: Router = express.Router();

const port = process.env.PORT || 8080;
const domain = process.env.DOMAIN || 'localhost';
const protocol = process.env.PROTOCOL || 'http';

router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

router.all('*', (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(
    `Can't find ${protocol}://${domain}:${port}${req.originalUrl} on this server!`,
    404
  );
  next(error);
});

export default router;
