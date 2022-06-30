import React from "react";

const Titulo = ({ pathname }) => {
  var titulo = "Home";
  if (pathname !== "/") {
    titulo = pathname.replace("/", "");
  }

  return <h1 style={{ color: "#4c8b64" }}>{titulo}</h1>;
};

export default Titulo;
