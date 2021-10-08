import express from 'express';
import cors from 'cors';

/* ROUTE */
import loginUser from './api/user/userLogin/api_userLogin';
import createUser from './api/user/createUser/api_createUser';
import deleteUser from './api/user/deleteUser/apI_deleteUser';
import createMemo from './api/memo/createMemo/api_createMemo';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user/", loginUser);
app.use("/api/user/", createUser);
app.use("/api/user/", deleteUser);
app.use("/api/memo/", createMemo);

const PORT = 3000;

app.listen(PORT, function() {
  console.log("SERVER IS RUNNING ON " + PORT);
});
