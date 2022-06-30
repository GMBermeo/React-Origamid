import React from "react";
import Menu from "./components/Menu";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";
import Titulo from "./components/Titulo";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  let Pagina = Home;
  const { pathname } = window.location;
  if (pathname === "/Produtos") {
    Pagina = Produtos;
  }

  return (
    <>
      <Menu />
      <Titulo pathname={pathname} />
      <Pagina />
    </>
  );
};

export default App;
