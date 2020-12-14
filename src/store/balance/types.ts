export type BalanceState = {
  amount: number;
};

export type BalanceAction = { type: "balance/deposit"; payload: number };
