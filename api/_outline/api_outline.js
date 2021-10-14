import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { SQL_OUTLINE } from './sql_outline';
import FUNCTION_OUTLINE from './ftn_outline';

const router = express.Router();

export default router.post('/userLogin', function(req, res) {
  var { /* REQ 값 */} = req.body;
 
  getConnection((err, conn) => {
    conn.query(SQL_OUTLINE, [/* REQ 값 */], (err, rows) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        /* QUERY 실행 결과 체크 */
        const API_RESPONSE = FUNCTION_OUTLINE({ rows }); 
        return res.send(API_RESPONSE);
      }
    });

    conn.release();
  });
});
