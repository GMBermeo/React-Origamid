import React from "react";
import Button from "./Components/Button";
import Produto from "./Components/Produto";

const App = () => {
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
  const [produto, setProduto] = React.useState(null);

  //Executa uma vez
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function fetchProduto({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <Button onClick={fetchProduto} style={{ margin: ".5rem" }}>
        notebook
      </Button>
      <Button onClick={fetchProduto}>smartphone</Button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
