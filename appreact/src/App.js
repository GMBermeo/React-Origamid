import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
    }
    fetchData();
  }, [request]);

  console.log(data);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <div>Erro: {error}</div>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <button style={{ marginRight: "1rem" }} onClick={handleClick}>
          notebook
        </button>
        <button onClick={handleClick}>celular</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <img
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
              style={{ height: "120px", borderRadius: "100px", aspectRatio: 1 }}
            />
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
          </div>
        ))}
      </div>
    );
  else {
    return null;
  }
};

export default App;
