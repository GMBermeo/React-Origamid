import React from "react";
import Radio from "../Form/Radio";

const Pergunta = ({ perguntas, numeroPergunta, resposta, setResposta }) => {
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        borderColor: "#00000022",
        borderRadius: "8px",
      }}
    >
      <legend style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {perguntas[numeroPergunta].pergunta}
      </legend>
      <Radio
        style={{ marginBottom: "1rem" }}
        options={perguntas[numeroPergunta].options}
        value={resposta}
        setValue={setResposta}
      />
    </fieldset>
  );
};

export default Pergunta;
