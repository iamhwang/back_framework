import express from 'express';
import getConnection from '../../../database/connection/mariaDB';
import apiResponse from '../../_apiResponse';

import { sql_memosGet } from './sql_memosGet';

const router = express.Router();

export default router.post('/memosGet', function(req, res) {
  var _no = req.body.no;
 
  getConnection((err, conn) => {
    conn.query(sql_memosGet, [_no], (err, rows) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = apiResponse({
          statusCode: 109,
          data: rows,
        });

        return res.send(data);
      }
    });

    conn.release();
  });
});
