import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { FormEvent, ChangeEvent, useState } from "react";
import { CoffeeCardContainer } from "./styles";
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

  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    if (coffeeQuantity < 99 && coffeeQuantity > 1) {
      setcoffeeQuantity(Number(event.target.value));
    }
  }

  function handleDecreaseQuantityValue(event: FormEvent) {
    event.preventDefault();

    if (coffeeQuantity <= 99 && coffeeQuantity > 1) {
      setcoffeeQuantity((prev) => prev - 1);
    }
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
        <form>
          <div>
            <button onClick={handleIncreaseQuantityValue}>
              <Plus weight="bold" />
            </button>
            <input
              type="number"
              onChange={handleChangeQuantity}
              value={coffeeQuantity}
              min="1"
              max="99"
            />
            <button onClick={handleDecreaseQuantityValue}>
              <Minus weight="bold" />
            </button>
          </div>

          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </footer>
    </CoffeeCardContainer>
  );
}
