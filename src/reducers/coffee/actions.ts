import { Coffee } from "./reducer";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COOFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  PURCHASE_COFFEE = "PURCHASE_COFFEE",
  CHANGE_COFFEE_QUANTITY = "CHANGE_COFFEE_QUANTITY",
  SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD",
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

export const purchaseCoffeeAction = () => {
  return {
    type: ActionTypes.PURCHASE_COFFEE,
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

export const setPaymentMethodAction = (method: string) => {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: {
      method,
    },
  };
};
