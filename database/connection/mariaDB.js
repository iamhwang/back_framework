import maria from 'mysql';
import mariaConfig from './mariaDBConfig';

const pool = maria.createPool(mariaConfig);

function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    if(err) {
      switch (err.code) {
        case "PROTOCOL_CONNECTION_LOST":
          console.error("데이터베이스 연결 실패.");
          break;
        case "ER_CON_COUNT_ERROR":
          console.error("데이터베이스 접속 초과");
          break;
        case "ECONNREFUSED":
          console.error("데이터베이스 연결 거부");
          break;
      }
    }

    if(!err) {
      console.log('connect!');
      callback(err, conn);
    }
  });
}

module.exports = getConnection;


/*

async function GetUserList(no){
    console.log('okkkkk' + no);
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE BACK');
        rows = await conn.query('SELECT * FROM user_info');
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn) conn.end();
        return rows;//rows[0]; //rows;
    }
}
 
module.exports = {
    getUserList: GetUserList
}
*/
