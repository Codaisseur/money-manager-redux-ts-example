// src/store/balance/reducer.ts
import { BalanceState, BalanceAction } from "./types";

const initialState: BalanceState = {
  amount: 0,
};

export default function reducer(state = initialState, action: BalanceAction) {
  switch (action.type) {
    case "balance/deposit": {
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }
    case "balance/withdraw": {
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }
    case "balance/reset": {
      return {
        ...state,
        amount: initialState.amount,
      };
    }
    default: {
      return state;
    }
  }
}
