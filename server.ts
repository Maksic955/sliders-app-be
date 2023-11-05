import sliderData from './data.json';
import express from 'express';
import cors from 'cors';

const initializeServer = () => {
  const app = express();
  const PORT = 8080;

  app.use(cors());
  app.use(express.json());

  const router = express.Router();

  router.get('/api/home', (req, res) => {
    res.json(sliderData);
  });

  app.use('/', router);

  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

initializeServer();
