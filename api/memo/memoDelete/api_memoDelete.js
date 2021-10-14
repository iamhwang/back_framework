import express from 'express';
import getConnection from '../../../database/connection/mariaDB';
import apiResponse from '../../_apiResponse';

import { sql_memoDelete } from './sql_memoDelete';

const router = express.Router();

export default router.post('/memoDelete', function(req, res) {
  var _no = req.body.no;
  console.log(_no);
 
  getConnection((err, conn) => {
    conn.query(sql_memoDelete, [_no], (err) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = apiResponse({ 
          statusCode: 100,
        });
        return res.send(data);
      }
    });

    conn.release();
  });
});
