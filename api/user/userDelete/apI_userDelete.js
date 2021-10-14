import express from 'express';
import getConnection from '../../../database/connection/mariaDB';
import apiResponse from '../../_apiResponse';

import { userDelete } from './sql_userDelete';

const router = express.Router();

export default router.post('/userDelete', function(req, res) {
  var _username = req.body.id;
  console.log(_username);
 
  getConnection((err, conn) => {
    conn.query(userDelete, [_username], (err) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = apiResponse({
          statusCode: 101,
          message: '회원정보가 삭제됐습니다.', 
        });
        return res.send(data);
      }
    });

    conn.release();
  });
});
