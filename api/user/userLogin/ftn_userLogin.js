export default function checkLogin ({ rows }) {
  if (rows.length === 0 || rows === '') {
    const loginFail = {
      status: false,
      statusCode: 200,
    };
    return loginFail;
  }

  if(rows.length !== 0 || rows !== '') {
    const loginSuccess = {
      status: true,
      statusCode: 100,
      id: rows[0].ID,
      accessToken: 'loginSuccessToken',
    };
    return loginSuccess;
  }
}
