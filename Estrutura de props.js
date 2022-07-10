import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}
      {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <Titulo cor="tomato">via children</Titulo>
      <Titulo cor="blue" texto="via props" />
    </>
  );
};

export default App;
