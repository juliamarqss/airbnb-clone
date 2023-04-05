const mongoose = require('mongoose') ;
const express = require('express') ;
import UserRouter from './routes/UserRoutes';
const cors = require('cors');
// import app from '.';

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/', (_req: any, res: any) => res.send('Hello World!'));

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
      console.log("MongoDB connected successfully");


    app.use((req: any, res: any, next:any) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");

      next();
    });

    app.use('/users', UserRouter);

  const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log("Erro ao conectar no mongo"));