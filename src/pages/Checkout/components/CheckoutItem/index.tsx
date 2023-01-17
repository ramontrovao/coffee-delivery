import { FormEvent, useState, useContext, useEffect } from "react";
import { CoffeeContext } from "../../../../context/CoffeeListContext";
import { InputQuantity } from "../../../../components/InputQuantity";
import { CheckoutItemContainer } from "./styles";
import { Trash } from "phosphor-react";

interface CheckoutItemProps {
  name: string;
  price: string;
  imgSrc: string;
}

export function CheckoutItem({ name, price, imgSrc }: CheckoutItemProps) {
  const [coffeeQuantity, setcoffeeQuantity] = useState(8);
  const coffeeData = useContext(CoffeeContext);

  useEffect(() => {
    const coffee = coffeeData.coffeeState.coffeeList.find(
      (coffee) => coffee.name === name
    );

    setcoffeeQuantity(coffee!.quantity);
  }, [coffeeData]);

  function handleIncreaseQuantityValue(event: FormEvent) {
    event.preventDefault();

    if (coffeeQuantity < 99 && coffeeQuantity >= 1) {
      coffeeData.changeCoffeeQuantity({ name, quantity: coffeeQuantity + 1 });
    }
  }

  function handleDecreaseQuantityValue(event: FormEvent) {
    event.preventDefault();

    if (coffeeQuantity <= 99 && coffeeQuantity > 1) {
      coffeeData.changeCoffeeQuantity({ name, quantity: coffeeQuantity - 1 });
    }
  }

  function onRemoveCoffee(event: FormEvent) {
    event.preventDefault();

    coffeeData.removeCoffee(name);
  }

  return (
    <CheckoutItemContainer>
      <img src={imgSrc} />

      <div className="rightDiv">
        <div className="nameAndPriceWrapper">
          <p>{name}</p>

          <strong>R${price}</strong>
        </div>

        <div className="removeWrapper">
          <InputQuantity
            increase={handleIncreaseQuantityValue}
            decrease={handleDecreaseQuantityValue}
            quantity={coffeeQuantity}
          />

          <button className="removeCoffeeButton" onClick={onRemoveCoffee}>
            <Trash size={16} /> REMOVER
          </button>
        </div>
      </div>
    </CheckoutItemContainer>
  );
}
