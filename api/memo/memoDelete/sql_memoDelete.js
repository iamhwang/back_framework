export const sql_memoDelete = `
  DELETE FROM user_memo 
  WHERE 1=1
  AND NO = ?
`;
