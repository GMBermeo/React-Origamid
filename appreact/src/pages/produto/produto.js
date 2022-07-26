import React from "react";
import { useParams } from "react-router-dom";
import Head from "../../components/common/Head";
import useFetch from "../../lib/hooks/useFetch";

const Produto = () => {
  const { request, data: produto, loading, error } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData() {
      await request(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    }
    fetchData();
  }, [id, request]);

  if (loading) return <div className="loading" />;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <>
      <Head title={produto.nome} description={produto.descricao} />
      <div className="slideLeft flex">
        <div className="slideUpSlow w-1/2 flex-initial">
          {produto.fotos.map((foto) => (
            <img
              className="mb-4 rounded-lg"
              src={foto.src}
              alt={foto.titulo}
              key={foto.src}
            />
          ))}
        </div>
        <div className="ml-6 w-1/2">
          <h2 className="text-3xl font-bold">{produto.nome}</h2>
          <label
            className={`${
              produto.vendido ? "bg-green-300" : "bg-red-300"
            } my-2 w-fit rounded-md px-3 py-2 text-base`}
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
