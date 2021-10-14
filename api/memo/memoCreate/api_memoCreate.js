import express from 'express';
import getConnection from '../../../database/connection/mariaDB';
import apiResponse from '../../_apiResponse';

import { sql_memoCreate } from './sql_memoCreate';

const router = express.Router();

export default router.post('/memoCreate', function(req, res) {
  var _no = req.body.no;
  var _memo = req.body.memo;

  getConnection((err, conn) => {
    conn.query(sql_memoCreate, [_no, _memo], (err) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = apiResponse({
          statusCode: 100,
        })
        return res.send(data);
      }
    });

    conn.release();
  });
});
