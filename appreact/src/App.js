import React from "react";
import Pergunta from "./Components/Pergunta";

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = React.useState(0);
  const perguntas = [
    {
      pergunta: "Qual método é utilizado para criar componentes?",
      options: [
        "React.makeComponent()",
        "React.createComponent()",
        "React.createElement()",
      ],
      resposta: "React.createElement()",
      id: "p1",
    },
    {
      pergunta: "Como importamos um componente externo?",
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: "p2",
    },
    {
      pergunta: "Qual hook não é nativo?",
      options: ["useEffect()", "useFetch()", "useCallback()"],
      resposta: "useFetch()",
      id: "p3",
    },
    {
      pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
      options: ["set", "get", "use"],
      resposta: "use",
      id: "p4",
    },
  ];

  let corretas = perguntas.filter(
    ({ id, resposta }) => respostas[id] === resposta
  );

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function proximoSlide(event) {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(5);
    }
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault}>
        {perguntas.map((pergunta, index) => (
          <Pergunta
            active={slide === index}
            key={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
      </form>
      {slide === 5 ? (
        <p>Você acertou {corretas.length} perguntas.</p>
      ) : (
        <button onClick={proximoSlide}>Próxima</button>
      )}
    </>
  );
};

export default App;
