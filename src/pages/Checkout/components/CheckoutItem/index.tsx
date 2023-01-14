import { FormEvent, useState, useContext } from "react";
import { CoffeeContext } from "../../../../context/CoffeeListContext";
import { InputQuantity } from "../../../../components/InputQuantity";
import { CheckoutItemContainer } from "./styles";

interface CheckoutItemProps {
  name: string;
  price: string;
  imgSrc: string;
}

export function CheckoutItem({ name, price, imgSrc }: CheckoutItemProps) {
  const [coffeeQuantity, setcoffeeQuantity] = useState(1);
  const coffeeData = useContext(CoffeeContext);

  function handleIncreaseQuantityValue(event: FormEvent) {
    event.preventDefault();

    if (coffeeQuantity < 99 && coffeeQuantity >= 1) {
      setcoffeeQuantity((prev) => prev + 1);
    }
  }

  function handleDecreaseQuantityValue(event: FormEvent) {
    event.preventDefault();

    if (coffeeQuantity <= 99 && coffeeQuantity > 1) {
      setcoffeeQuantity((prev) => prev - 1);
    }
  }

  function onRemoveCoffee(event: FormEvent) {
    event.preventDefault();

    coffeeData.removeCoffee(name);
  }

  return (
    <CheckoutItemContainer>
      <img src={imgSrc} />

      <div>
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
            REMOVER
          </button>
        </div>
      </div>
    </CheckoutItemContainer>
  );
}
