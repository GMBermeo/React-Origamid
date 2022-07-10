import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  return (
    <div>
      <h1>Produtos</h1>
      {dados &&
        dados.map((produto) => (
          <div style={{ clear: "left" }} key={produto.id}>
            <img
              style={{
                maxHeight: "200px",
                float: "left",
                borderRadius: "8px",
                margin: "0 1rem 1rem 0",
              }}
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
            />
            <div style={{ minHeight: "200px", overflow: "auto" }}>
              <h3>{produto.nome}</h3>
              <p style={{ fontSize: "1rem" }}>Preço: R$ {produto.preco}</p>
              <p style={{ fontSize: "0.8rem" }}>{produto.descricao}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Produto;
