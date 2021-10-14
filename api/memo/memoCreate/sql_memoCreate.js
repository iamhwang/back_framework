export const sql_memoCreate = `
  INSERT INTO user_memo (USER_ID, MEMO)
  VALUES ( ?, ?)
`;
