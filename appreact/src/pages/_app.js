import React from "react";
import "../assets/main.css";
import Slide from "../components/slide/Slide";
import foto from "../public/foto.jpg";
import { ReactComponent as Dog } from "../public/dog.svg";
import DogSvg from "../components/svg/DogSvg";

const App = () => {
  const [olho, setOlho] = React.useState(2);

  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
    },
    {
      id: "slide2",
      text: "Slide 2",
    },
    {
      id: "slide3",
      text: "Slide 3",
    },
  ];

  function crescerOlho() {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 30 * i);
    }
  }

  return (
    <div>
      <Slide slides={slides} />
      <div className="fundo" />
      <Dog />
      <button onClick={crescerOlho}>Crescer olho</button>
      <DogSvg color="#84e" olho={olho} />
      <DogSvg />
      <img src={foto} alt="cachorro" />
    </div>
  );
};

export default App;
