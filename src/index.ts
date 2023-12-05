import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import chalk from 'chalk';
import router from '@/routes/index.route';
import errorHandleMiddleware from '@/middleware/errorHandle';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
const domain = process.env.DOMAIN || 'localhost';
const protocol = process.env.PROTOCOL || 'http';

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
router.use(errorHandleMiddleware);

app.listen(port, () => {
  console.log(
    `Server is Fire at`,
    chalk.blue(`${protocol}://${domain}:${port}`)
  );
});
