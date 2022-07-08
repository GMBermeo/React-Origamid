import React from "react";

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log("Teste func1");
  };
  const func2 = React.useCallback(() => {
    console.log("Teste func2");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log(set1);
  console.log(set2);

  return (
    <>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
