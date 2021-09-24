import mariadb from 'mariadb';

const pool = mariadb.createPool({
    //database: back
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1027',
    connectionLimit: 5,
})

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
