import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Produto from "./Produto";
import Opcoes from "./Opcoes";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Opcoes />
    </GlobalStorage>
  );
};

export default App;
