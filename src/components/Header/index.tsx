import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { CartContainer, HeaderContainer, LocationContainer } from "./styles";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeListContext";

export function Header() {
  const coffeeData = useContext(CoffeeContext);

  return (
    <HeaderContainer>
      <nav>
        <Link to={"/"}>
          <img
            src="./assets/logo.svg"
            alt="Uma logo escrita Coffe delivery com a arte de um copo americano de café a esquerda. Uma arte branca de um foguete espacial está contida dentro do copo. "
          />
        </Link>

        <div>
          <LocationContainer>
            <MapPin size={22} color="#4B2995" weight="fill" />{" "}
            <p>Vitória, ES</p>
          </LocationContainer>

          <Link to={"/checkout"}>
            <div>
              <CartContainer>
                <ShoppingCart size={22} color="#C47F17" weight="fill" />
              </CartContainer>
              <div className="NumOnTop">
                <p>{coffeeData.coffeeState.coffeeList.length}</p>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </HeaderContainer>
  );
}
