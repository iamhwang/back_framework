import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { createUser } from './sql_createUser';

const router = express.Router();

export default router.post('/createUser', function(req, res) {
  var _username = req.body.id;
  var _password = req.body.password;
 
  getConnection((err, conn) => {
    conn.query(createUser, [_username, _password], (err) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = { 
          status: true, 
          statusCode: 201,
          msg: '회원가입을 완료했습니다.', 
        };
        return res.send(data);
      }
    });

    conn.release();
  });
});
