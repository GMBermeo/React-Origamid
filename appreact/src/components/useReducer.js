import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "REMOVER":
      return state.filter((item) => item !== action.content);
    case "ADICIONAR":
      return [...state, action.content];
    case "POP":
      if (state.length > 0) state.pop();
      return [...state];
    default:
      throw new Error("Action não existe");
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, [
    "🍎",
    "🍑",
    "🍌",
    "🥭",
    "🍊",
    "🍅",
  ]);

  return (
    <div style={{ marginBottom: "2rem" }}>
      <p style={{ fontSize: "5rem" }}>{state}</p>
      <button onClick={() => dispatch({ type: "REMOVER", content: "🍌" })}>
        Remover Banana
      </button>
      <button onClick={() => dispatch({ type: "ADICIONAR", content: "🍋" })}>
        Adicionar Limão
      </button>
      <button onClick={() => dispatch({ type: "POP" })}>Remover último</button>
    </div>
  );
};

export default Exemplo;
