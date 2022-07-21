import React from "react";
import "../assets/animations.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./produtos";
import Contato from "./contato";
import Produto from "./produto/produto";
import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import NotFound from "./notFound";

const App = () => {
  return (
    <div className="container px-5 mx-auto min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id/*" element={<Produto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
