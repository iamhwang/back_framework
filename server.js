import express from 'express';
import cors from 'cors';

import loginRouter from './api/login';
import MariaDBRouter from './api/mariaDB';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/login", loginRouter);
app.use("/MariaDB", MariaDBRouter);

app.listen(3000, function() {
  console.log("start server on port 3000")
});
