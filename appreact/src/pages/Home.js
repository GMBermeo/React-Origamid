import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/common/Head";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Essa é a rota.</p>
      <Link to="produto/notebook">Notebook</Link> <br />
      <Link to="produto/smartphone">Smartphone</Link>
    </>
  );
};

export default Home;
