import { Coffee } from "./reducer";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COOFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  PURCHASE_COFFEE = "PURCHASE_COFFEE",
  CHANGE_COFFEE_QUANTITY = "CHANGE_COFFEE_QUANTITY",
}

export const addNewCoffeeAction = (newCoffee: Coffee) => {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  };
};

export const removeCoffeeAction = (coffeeToRemove: string) => {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeToRemove,
    },
  };
};

export const purchaseCoffeeAction = (coffeeToPurchase: Coffee) => {
  return {
    type: ActionTypes.PURCHASE_COFFEE,
    payload: {
      coffeeToPurchase,
    },
  };
};

export const changeCoffeeQuantityAction = (nameAndQuantity: {}) => {
  return {
    type: ActionTypes.CHANGE_COFFEE_QUANTITY,
    payload: {
      nameAndQuantity,
    },
  };
};
