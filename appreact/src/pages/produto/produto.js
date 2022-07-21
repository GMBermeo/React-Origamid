import React from "react";
import { useParams } from "react-router-dom";
import Head from "../../components/common/Head";

const Produto = () => {
  const [produto, setProduto] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
      .then((r) => r.json())
      .then((json) => setProduto(json));
    setLoading(false);

    // console.log(produto);
  }, [id]);

  // console.log(params);

  if (loading || !produto) return <div className="loading" />;

  return (
    <>
      <Head title={produto.nome} />
      <div className="slideLeft flex">
        <div className="flex-initial w-1/2 slideUpSlow">
          {produto.fotos.map((foto) => (
            <img
              className="rounded-lg mb-4"
              src={foto.src}
              alt={foto.titulo}
              key={foto.src}
            />
          ))}
        </div>
        <div className="ml-6 w-1/2">
          <h2 className="font-bold text-3xl">{produto.nome}</h2>
          <label
            className={`${
              produto.vendido ? "bg-green-300" : "bg-red-300"
            } px-3 py-2 my-2 rounded-md text-base w-fit`}
          >
            R$ {produto.preco}
          </label>
          <p className="slideDown">{produto.descricao}</p>
        </div>
      </div>
    </>
  );
};

export default Produto;
