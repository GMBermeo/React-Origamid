import React from "react";

const Produto = ({ dados }) => {
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>Preço: R$ {dados.preco}</p>
      {dados.fotos.map((foto) => (
        <img src={foto.src} alt={foto.titulo} />
      ))}
      <p>{dados.descricao}</p>
      <p>{dados.vendido}</p>
    </>
  );
};

export default Produto;
