// src/store/balance/reducer.ts
import { BalanceState, BalanceAction } from "./types";

const initialState: BalanceState = {
  amount: 0,
};

export default function reducer(state = initialState, action: BalanceAction) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}