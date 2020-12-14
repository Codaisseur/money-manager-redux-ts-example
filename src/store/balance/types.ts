export type BalanceState = {
  amount: number;
};

export type BalanceAction =
  | { type: "balance/deposit"; payload: number }
  | { type: "balance/withdraw"; payload: number }
  | { type: "balance/reset" };
