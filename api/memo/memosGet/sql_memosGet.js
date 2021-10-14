export const sql_memosGet = `
  SELECT NO, MEMO 
  FROM user_memo
  WHERE 1=1
  AND USER_ID = ?
  ORDER BY NO DESC
  LIMIT 5
`;
