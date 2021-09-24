import express from 'express';
import mdbConn from '../mariaDBConn';

const router = express.Router();

router.post('/', function(req, res, next) {
    const { no } = req.body;
    console.log(no);

    mdbConn.getUserList(no)
        .then((rows) => {
            res.send(rows);
        })
        .catch((errMsg) => {
            console.log(errMsg);
        });  
});

module.exports = router;

/*
import mdbConn from './mariaDBConn';

mdbConn.getUserList()
  .then((rows) => {
    console.log(rows);
  })
  .catch((errMsg) => {
    console.log(errMsg);
  });  
  
*/
