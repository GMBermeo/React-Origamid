import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/common/Head";
import useFetch from "../lib/hooks/useFetch";

const Produtos = () => {
  const { request, data: produtos, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      await request("https://ranekapi.origamid.dev/json/api/produto/");
    }
    fetchData();
  }, [request]);

  if (loading) return <div className="loading" />;
  if (error) return <p>{error}</p>;
  if (produtos === null) return null;
  return (
    <>
      <Head />
      <div className="slideLeft grid grid-cols-3 gap-4 md:gap-8">
        {produtos &&
          produtos.map((produto, index) => (
            <Link to={`/produto/${produto.id}`} key={produto.id}>
              <div>
                <img
                  src={produto.fotos[0].src}
                  alt={produto.fotos[0].titulo}
                  className="fadeIn w-full cursor-pointer rounded-md"
                  style={{
                    animationDelay: `${produtos.indexOf(produto) * 2}00ms`,
                  }}
                />
                <p
                  className="fadeIn mt-2 text-center text-base"
                  style={{
                    animationDelay: `${produtos.indexOf(produto) * 2}00ms`,
                  }}
                >
                  {produto.nome}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Produtos;
