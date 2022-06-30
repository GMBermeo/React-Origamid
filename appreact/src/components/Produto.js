import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        border: "solid 1px",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
