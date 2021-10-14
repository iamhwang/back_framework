export const sql_userLogin = `
  SELECT NO, ID 
  FROM user_info
  WHERE 1=1
  AND ID = ?
  AND PW = ?
`;
