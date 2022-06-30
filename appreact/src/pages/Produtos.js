import React from "react";
import Produto from "../components/Produto";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <section>
      {produtos.map((produto) => (
        <section key={produto.nome}>
          <h3>{produto.nome}</h3>
          <Produto key={produto.nome} {...produto} />
        </section>
      ))}
    </section>
  );
};

export default Produtos;
