import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../../svg/DogSvg";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("Muda a rota");
  }, [location]);

  return (
    <header>
      <nav>
        <NavLink to="/" end>
          <Logo />
        </NavLink>{" "}
        <NavLink to="sobre">Sobre</NavLink> |{" "}
        <NavLink to="login">Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
