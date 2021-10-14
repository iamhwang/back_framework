import apiResponse from "../_apiResponse";

export default function ftn_outline ({ rows }) {
  if (!rows) {
    apiResponse = {
      status: false,
      statusCode: 400,
      msg: ' 아이디 또는 비밀번호가 잘못 입력되었습니다...',
    };
    return apiResponse;
  }

  if(rows.length !== 0 || rows !== '') {
    const loginSuccess = {
      status: true,
      statusCode: 200,
      id: rows[0].ID,
      no: rows[0].NO,
      accessToken: 'loginSuccessToken',
    };
    return loginSuccess;
  }
}
