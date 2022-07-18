import React from "react";

const Pergunta = ({ pergunta, options, id, value, onChange, active }) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        borderColor: "#00000022",
        borderRadius: "6px",
      }}
    >
      <legend style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {pergunta}
      </legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
            id={id}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Pergunta;
