import express from 'express';
const router = express.Router();

router.post('/', function(req, res, next) {
  var id = req.body.id;
  var password = req.body.password;
  console.log('/login : ');
  console.log(req.body);
  
  const name = {
    accessToken: 'dfskf19sf10221nfsk921asdfn129p2193nkdf',
    boo: true,
  };
  res.send(name);
});

router.post('/findId', function(req, res, next) {
  var id = req.body.id;
  console.log('/login/findId : ');
  console.log(req.body);
  
  const name = {
    id: 'iamhwang9',
  };
  res.send(name);
});

module.exports = router;
