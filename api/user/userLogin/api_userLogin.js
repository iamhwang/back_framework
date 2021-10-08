import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { userLogin } from './sql_userLogin';
import checkLogin from './ftn_userLogin';

const router = express.Router();

export default router.post('/userLogin', function(req, res) {
  var _username = req.body.id;
  var _password = req.body.password;
 
  getConnection((err, conn) => {
    conn.query(userLogin, [_username, _password], (err, rows) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = checkLogin({ rows });
        return res.send(data);
      }
    });

    conn.release();
  });
});
