import React from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 1000000000; i++) {
    c = i + i / 11.1;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);

  // Executa sempre
  const valorLento = operacaoLenta();

  // Executa uma vez quando for renderizado, e guarda o resultado na memória.
  const valorMemo = React.useMemo(() => operacaoLenta(), []);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
