import React from "react";
import Input from "./Form/Input";

const App = () => {
  const componentes = [
    "Camera",
    "Som",
    "Bluetooth",
    "Luz",
    "GPS",
    "NFC",
    "Wi-Fi",
  ];
  const cores = [
    "Vermelho",
    "Azul",
    "Verde",
    "Amarelo",
    "Laranja",
    "Roxo",
    "Branco",
  ];
  const [select, setSelect] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [radio, setRadio] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const [selectMultiple, setSelectMultiple] = React.useState(["Bluetooth"]);

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleRadioChange({ target }) {
    setRadio(target.value);
  }

  function handleMultipleChange({ target }) {
    if (target.checked) {
      setSelectMultiple([...selectMultiple, target.value]);
    } else {
      setSelectMultiple(selectMultiple.filter((item) => item !== target.value));
    }
  }

  function verifyMultiple(component) {
    if (selectMultiple.includes(component)) {
      return true;
    }
    return false;
  }

  return (
    <>
      <h1>Inputs</h1>
      <form>
        <h2>Produtos</h2>
        <Input label="Nome" id="nome" value={nome} setValue={setNome} />
        <Input
          label="E-mail"
          id="email"
          value={email}
          setValue={setEmail}
          required
        />
        <label>
          <input
            type="radio"
            name="produto"
            value="smartphone"
            onChange={handleRadioChange}
          />
          Smartphone
        </label>
        <label>
          <input
            type="radio"
            name="produto"
            value="notebook"
            onChange={handleRadioChange}
          />
          Notebook
        </label>

        <h2>Cores</h2>
        {cores.map((corLoop) => (
          <label key={corLoop}>
            <input
              type="radio"
              checked={cor === corLoop}
              value={corLoop}
              onChange={({ target }) => {
                setCor(target.value);
              }}
            />
            {corLoop}
          </label>
        ))}

        <h2>Marca</h2>
        <select
          value={select}
          onChange={({ target }) => {
            setSelect(target.value);
          }}
          id="marca"
        >
          <option disabled value="">
            Selecione uma marca
          </option>
          <option value="Xing-Ling">Xing-Ling</option>
          <option value="Null">Null</option>
          <option value="Gettygetty">Gettygetty</option>
          <option value="Hongue Kongue">Hongue Kongue</option>
        </select>

        <h2>Componentes</h2>
        {componentes.map((componente) => (
          <label key={componente}>
            <input
              type="checkbox"
              checked={verifyMultiple(componente)}
              value={componente}
              onChange={handleMultipleChange}
            />
            {componente}
          </label>
        ))}

        {radio && (
          <h4>
            Você escolheu o {radio} {cor && cor}{" "}
            {select && "da marca " + select}{" "}
            {selectMultiple && "com " + selectMultiple.join(", ")}.
          </h4>
        )}
        <h2>Termos de uso</h2>
        <label>
          <input
            type="checkbox"
            value="Termos"
            checked={checkbox}
            onChange={({ target }) => setCheckbox(target.checked)}
          />
          Aceito os termos
        </label>
      </form>
      <br />
      {checkbox && <button>Comprar</button>}
    </>
  );
};

export default App;
