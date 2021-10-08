import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { createMemo } from './sql_createMemo';

const router = express.Router();

export default router.post('/createMemo', function(req, res) {
  var _username = req.body.id;
  var _memo = req.body.memo;
 
  getConnection((err, conn) => {
    conn.query(createMemo, [_username, _memo], (err) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = { 
          status: true, 
          statusCode: 201,
          msg: '메모를 등록했습니다.', 
        };
        return res.send(data);
      }
    });

    conn.release();
  });
});
