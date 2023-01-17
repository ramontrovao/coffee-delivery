import { createContext, ReactNode, useReducer, useEffect } from "react";
import { Coffee, coffeeReducer } from "../reducers/coffee/reducer";
import {
  addNewCoffeeAction,
  removeCoffeeAction,
  purchaseCoffeeAction,
  changeCoffeeQuantityAction,
  setPaymentMethodAction,
} from "../reducers/coffee/actions";

interface CoffeeContextType {
  coffeeState: {
    coffeeList: Array<Coffee>;
    coffeePurchased: Array<Coffee>;
    paymentMethod: string;
  };

  setPaymentMethod: (data: string) => void;
  purchaseCoffee: () => void;
  removeCoffee: (data: string) => void;
  addNewCoffee: (data: Coffee) => void;
  changeCoffeeQuantity: (data: {}) => void;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export const CoffeeContextProvider = ({
  children,
}: CoffeeContextProviderProps) => {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffeeList: [],
      coffeePurchased: [],
      paymentMethod: "",
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffeeDelivery: coffee-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        coffeeList: [],
        coffeePurchased: [],
        paymentMethod: "",
      };
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeState);

    localStorage.setItem("@coffeDelivery: coffee-state-1.0.0", stateJSON);
  }, [coffeeState]);

  const purchaseCoffee = () => {
    dispatch(purchaseCoffeeAction());
  };

  const addNewCoffee = (data: Coffee) => {
    dispatch(addNewCoffeeAction(data));
  };

  const removeCoffee = (data: string) => {
    dispatch(removeCoffeeAction(data));
  };

  const changeCoffeeQuantity = (data: {}) => {
    dispatch(changeCoffeeQuantityAction(data));
  };

  const setPaymentMethod = (data: string) => {
    dispatch(setPaymentMethodAction(data));
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffeeState,
        setPaymentMethod,
        purchaseCoffee,
        addNewCoffee,
        removeCoffee,
        changeCoffeeQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
