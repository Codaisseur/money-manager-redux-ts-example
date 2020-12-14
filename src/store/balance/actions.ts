// src/store/balance/actions.ts
import { BalanceAction } from "./types";

export const deposit = (depositAmount: number): BalanceAction => ({
  type: "balance/deposit",
  payload: depositAmount,
});

export const withdraw = (withdrawAmount: number): BalanceAction => ({
  type: "balance/withdraw",
  payload: withdrawAmount,
});

export const reset = (): BalanceAction => ({
  type: "balance/reset",
});
