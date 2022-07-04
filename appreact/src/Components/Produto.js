import React from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);
  if (dados === null) return null;
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
