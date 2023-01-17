import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { FormEvent, useState, useContext, useEffect } from "react";
import { CoffeeCardContainer } from "./styles";
import { CoffeeContext } from "../../../../context/CoffeeListContext";
import { InputQuantity } from "../../../../components/InputQuantity";

interface CoffeeCardProps {
  imgSrc: string;
  name: string;
  description: string;
  price: string;
  tags: Array<string>;
}

export function CoffeeCard({
  imgSrc,
  name,
  description,
  price,
  tags,
}: CoffeeCardProps) {
  const [coffeeQuantity, setcoffeeQuantity] = useState(1);

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

  const coffeeData = useContext(CoffeeContext);

  function handleAddCoffeeSubmit(event: FormEvent) {
    event.preventDefault();

    alert("Produto adicionado!");

    const newCoffee = {
      name,
      quantity: coffeeQuantity,
      price,
      isPurchased: false,
      imgSrc,
    };

    coffeeData.addNewCoffee(newCoffee);
  }

  return (
    <CoffeeCardContainer>
      <header>
        <img src={imgSrc} />

        <div className="tags">
          {tags &&
            tags.map((tag) => (
              <div className="tag" key={tag}>
                <p>{tag}</p>
              </div>
            ))}
        </div>
      </header>
      <main>
        <h2>{name}</h2>

        <p>{description}</p>
      </main>
      <footer>
        <div>
          <span>R$</span> <strong>{price}</strong>
        </div>
        <form onSubmit={handleAddCoffeeSubmit}>
          <InputQuantity
            quantity={coffeeQuantity}
            increase={handleIncreaseQuantityValue}
            decrease={handleDecreaseQuantityValue}
          />

          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </footer>
    </CoffeeCardContainer>
  );
}
