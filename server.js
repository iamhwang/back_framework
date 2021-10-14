import express from 'express';
import cors from 'cors';

/* ROUTE */
import userCreate from './api/user/userCreate/api_userCreate';
import userDelete from './api/user/userDelete/apI_userDelete';
import userLogin from './api/user/userLogin/api_userLogin';
import memoCreate from './api/memo/memoCreate/api_memoCreate';
import memoDelete from './api/memo/memoDelete/api_memoDelete';
import memosGet from './api/memo/memosGet/api_memosGet';

/* SETTING */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user/", userLogin);
app.use("/api/user/", userCreate);
app.use("/api/user/", userDelete);
app.use("/api/memo/", memoCreate);
app.use("/api/memo/", memoDelete);
app.use("/api/memo/", memosGet);

const PORT = 3000;
app.listen(PORT, function() {
  console.log("SERVER IS RUNNING ON " + PORT);
});
