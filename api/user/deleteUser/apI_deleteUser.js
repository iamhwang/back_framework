import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { deleteUser } from './sql_deleteUser';

const router = express.Router();

export default router.post('/deleteUser', function(req, res) {
  var _username = req.body.id;
  console.log(_username);
 
  getConnection((err, conn) => {
    conn.query(deleteUser, [_username], (err) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = { 
          status: true, 
          statusCode: 201,
          msg: '회원탈퇴를 완료했습니다.', 
        };
        return res.send(data);
      }
    });

    conn.release();
  });
});
