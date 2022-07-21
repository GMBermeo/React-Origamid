import React from "react";
import Head from "../components/common/Head";
import fotoContato from "../public/contato.jpg";

const Sobre = () => {
  return (
    <>
      <Head title="Contato" />
      <div className="flex">
        <div className="flex-initial w-1/2">
          <img
            src={fotoContato}
            alt="Imagem de uma máquina de escrever.'"
            className="w-full h-auto rounded-md slideUpSlow"
          />
        </div>
        <div className="ml-6 w-1/2 slideLeft">
          <h3 className="font-bold text-3xl">Entre em contato.</h3>
          <ul className="ml-4 mt-4 slideDown">
            <li> Guilherme Bermêo</li>
            <li> 99999-9999</li>
            <li> Rua Ali Perto, 999</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sobre;
