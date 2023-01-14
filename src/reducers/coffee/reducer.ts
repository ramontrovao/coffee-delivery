import { produce } from "immer";

import { ActionTypes } from "./actions";

export interface Coffee {
  name: string;
  quantity: number;
  price: string;
  isPurchased: boolean;
  PurchasedDate?: Date;
  imgSrc: string;
}

interface CoffeeState {
  coffeeList: Coffee[];
}

export const coffeeReducer = (state: CoffeeState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      return produce(state, (draft) => {
        draft.coffeeList.push(action.payload.newCoffee);
      });
    }

    case ActionTypes.PURCHASE_COFFEE: {
      return produce(state, (draft) => {
        draft.coffeeList.map((coffee) => {
          coffee.isPurchased = true;
          coffee.PurchasedDate = new Date();
        });
      });
    }

    case ActionTypes.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        draft.coffeeList = draft.coffeeList.filter(
          (coffee) => coffee.name !== action.payload.coffeeToRemove
        );
      });
    }

    case ActionTypes.CHANGE_COFFEE_QUANTITY: {
      return produce(state, (draft) => {
        const coffeeToChange = action.payload.nameAndQuantity;

        const index = draft.coffeeList.findIndex(
          (coffee) => coffee.name === coffeeToChange.name
        );

        draft.coffeeList[index].quantity = coffeeToChange.quantity;
      });
    }

    default: {
      return state;
    }
  }
};
