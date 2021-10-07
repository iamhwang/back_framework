import express from 'express';
import cors from 'cors';

/* ROUTE */
import loginRouter from './api/user/userLogin/api_userLogin';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/login", loginRouter);

const PORT = 3003;

app.listen(PORT, function() {
  console.log("SERVER IS RUNNING ON " + PORT);
});
