import React from "react";
import Frutas from "../components/useReducer";
import Produtos from "../components/classes";
import Header from "../components/ui/header";

function reducer(contar, action) {
  switch (action) {
    case "AUMENTAR":
      return contar + 1;
    case "DIMINUIR":
      return contar - 1;
    default:
      throw new Error("Action não existe");
  }
}

const App = () => {
  const [contar, dispatchContar] = React.useReducer(reducer, 0);
  const [ativar, setAtivar] = React.useState(true);

  return (
    <div>
      <Header />
      <Frutas />
      <div>{contar}</div>
      <button onClick={() => dispatchContar("DIMINUIR")}>-</button>
      <button onClick={() => dispatchContar("AUMENTAR")}>+</button>
      {ativar && <Produtos titulo="Esses são os Produtos" />}
      <button
        onClick={() => {
          setAtivar(!ativar);
        }}
      >
        Toggle sessão de classes
      </button>
    </div>
  );
};

export default App;
