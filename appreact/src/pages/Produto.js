import React from "react";
import { useParams, NavLink, Route, Routes } from "react-router-dom";
import ProdutoAvaliacao from "../components/produto/ProdutoAvaliacao";
import ProdutoCustomizado from "../components/produto/ProdutoCustomizado";
import ProdutoDescricao from "../components/produto/ProdutoDescricao";

const Produto = () => {
  const params = useParams();

  return (
    <>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="" end>
          Descrição
        </NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </>
  );
};

export default Produto;
