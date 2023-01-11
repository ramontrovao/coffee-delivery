import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { CartContainer, HeaderContainer, LocationContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img
          src="./assets/logo.svg"
          alt="Uma logo escrita Coffe delivery com a arte de um copo americano de café a esquerda. Uma arte branca de um foguete espacial está contida dentro do copo. "
        />
      </Link>

      <nav>
        <LocationContainer>
          <MapPin size={22} color="#4B2995" weight="fill" /> <p>Vitória, ES</p>
        </LocationContainer>

        <Link to={"/checkout"}>
          <CartContainer>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </CartContainer>
        </Link>
      </nav>
    </HeaderContainer>
  );
}
