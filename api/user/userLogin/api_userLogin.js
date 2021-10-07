import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { userLogin } from './sql_userLogin';
import checkLogin from './ftn_userLogin';

const router = express.Router();

router.post('/', function(req, res, next) {
  var _username = req.body.id;
  var _password = req.body.password;
 
  getConnection((err, conn) => {
    conn.query(userLogin, [_username, _password], (err, rows) => {
      if (err) {
        console.error('쿼리 실행 실패');  
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

module.exports = router;
