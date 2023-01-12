import { produce } from "immer";

import { ActionTypes } from "./actions";

export interface Coffee {
  name: string;
  quantity: number;
  price: string;
  isPurchased: boolean;
  PurchasedDate?: Date;
}

interface CoffeeState {
  coffeeList: Coffee[];
  coffeePurchased: Coffee[];
}

export const coffeeReducer = (state: CoffeeState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        draft.coffeeList.push(action.payload.newCoffee);
      });

    case ActionTypes.PURCHASE_COFFEE: {
      return produce(state, (draft) => {
        draft.coffeeList.map((coffee) => {
          coffee.isPurchased = true;
          coffee.PurchasedDate = new Date();
        });
      });
    }

    default:
      return state;
  }
};
