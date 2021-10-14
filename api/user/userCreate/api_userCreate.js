import express from 'express';
import getConnection from '../../../database/connection/mariaDB';
import apiResponse from '../../_apiResponse';

import { sql_userCreate } from './sql_userCreate';

const router = express.Router();

export default router.post('/userCreate', function(req, res) {
  var _username = req.body.id;
  var _password = req.body.password;
 
  getConnection((err, conn) => {
    conn.query(sql_userCreate, [_username, _password], (err) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = apiResponse({ 
          statusCode: 101,
          message: '환영합니다! 회원가입을 축하합니다.', 
        });
        return res.send(data);
      }
    });

    conn.release();
  });
});
