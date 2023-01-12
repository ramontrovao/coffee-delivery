import { createContext, ReactNode, useReducer, useEffect } from "react";
import { Coffee, coffeeReducer } from "../reducers/coffee/reducer";
import {
  addNewCoffeeAction,
  removeCoffeeAction,
  purchaseCoffeeAction,
} from "../reducers/coffee/actions";

interface CoffeeContextType {
  purchaseCoffee: () => void;
  removeCoffee: (data: Coffee) => void;
  addNewCoffee: (data: Coffee) => void;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CoffeeContextType);

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffeeList: [],
      coffeePurchased: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffeeDelivery: coffee-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        coffee: [],
        coffeePurchased: [],
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
    const newCoffee: Coffee = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      isPurchased: data.isPurchased,
    };

    dispatch(addNewCoffeeAction(newCoffee));
  };

  const removeCoffee = (data: Coffee) => {
    dispatch(removeCoffeeAction(data));
  };

  return (
    <CyclesContext.Provider
      value={{
        purchaseCoffee,
        addNewCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};
