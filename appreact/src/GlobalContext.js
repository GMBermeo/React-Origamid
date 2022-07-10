import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  function carregarDados() {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }

  React.useEffect(() => {
    carregarDados();
  }, []);

  React.useEffect(() => {
    console.log("GlobalStorage: ", dados);
  }, [dados]);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados, carregarDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
