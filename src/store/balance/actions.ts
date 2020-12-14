// src/store/balance/actions.ts
import { BalanceAction } from "./types";

export const deposit = (depositAmount: number): BalanceAction => ({
  type: "balance/deposit",
  payload: depositAmount,
});
