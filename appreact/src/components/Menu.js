import React from "react";

const Menu = () => {
  function navegar(e) {
    window.location.href = `http://localhost:3000/${e.target.innerText}`;
    // console.log(e.target.innerText);
  }

  return (
    <header>
      <ul>
        <li onClick={navegar}>Home</li>
        <li onClick={navegar}>Produtos</li>
      </ul>
    </header>
  );
};

export default Menu;
