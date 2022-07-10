import React from "react";
import { GlobalContext } from "./GlobalContext";

const Opcoes = () => {
  const { limparDados, carregarDados } = React.useContext(GlobalContext);

  return (
    <div>
      <button style={{ marginRight: "1rem" }} onClick={limparDados}>
        Limpar
      </button>
      <button onClick={carregarDados}>Carregar</button>
    </div>
  );
};

export default Opcoes;
