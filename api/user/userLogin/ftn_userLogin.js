export default function checkLogin ({ rows }) {
  if (rows.length === 0 || rows === '') {
    const loginFail = {
      status: false,
      statusCode: 400,
      msg: ' 아이디 또는 비밀번호가 잘못 입력되었습니다.',
    };
    return loginFail;
  }

  if(rows.length !== 0 || rows !== '') {
    const loginSuccess = {
      status: true,
      statusCode: 200,
      id: rows[0].ID,
      accessToken: 'loginSuccessToken',
    };
    return loginSuccess;
  }
}
