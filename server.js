import express from 'express';

import mdbConn from './mariaDBConn';

const app = express();

mdbConn.getUserList()
  .then((rows) => {
    console.log(rows);
  })
  .catch((errMsg) => {
    console.log(errMsg);
  });
 

app.listen(3000, function() {
    console.log("start server on port 3000")
});
