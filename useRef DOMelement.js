import React from "react";

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  function enviarComentário() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={enviarComentário}>Enviar</button>
    </>
  );
};

export default App;
