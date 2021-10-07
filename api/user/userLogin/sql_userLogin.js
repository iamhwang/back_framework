export const userLogin = `
  SELECT * 
  FROM user_info
  WHERE 1=1
  AND ID = ?
  AND PW = ?
`;
