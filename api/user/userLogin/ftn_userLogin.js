import apiResponse from "../../_apiResponse";

export default function ftn_userLogin ({ rows }) {
  if (rows.length === 0 || rows === '') {
    return apiResponse({
      statusCode:400,
      message: '아이디 혹은 비밀번호가 일치하지 않습니다.',
    });
  }

  if(rows.length !== 0 || rows !== '') {
    const data = {
      id: rows[0].ID,
      no: rows[0].NO,
      accessToken: 'loginSuccessToken',
    };
    return apiResponse({
      statusCode:109,
      data,
    });
  }
}
