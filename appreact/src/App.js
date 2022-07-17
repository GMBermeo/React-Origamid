import React from "react";
import Pergunta from "./Components/Pergunta";

const App = () => {
  const [numeroPergunta, setNumeroPergunta] = React.useState(0);
  const [resposta, setResposta] = React.useState(null);
  const [pontuacao, setPontuacao] = React.useState(0);

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

  function proximaPergunta() {
    verificaResposta();
    setNumeroPergunta(numeroPergunta + 1);
    setResposta(null);
  }

  function verificaResposta() {
    if (resposta === perguntas[numeroPergunta].resposta) {
      setPontuacao(pontuacao + 1);
    }
  }

  return (
    <>
      {numeroPergunta <= perguntas.length - 1 ? (
        <>
          <Pergunta
            perguntas={perguntas}
            numeroPergunta={numeroPergunta}
            resposta={resposta}
            setResposta={setResposta}
          />

          {resposta && <button onClick={proximaPergunta}>Próxima</button>}
        </>
      ) : (
        <h1>Você acertou {pontuacao} perguntas.</h1>
      )}
    </>
  );
};

export default App;
