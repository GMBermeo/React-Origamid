import React from "react";
import useForm from "./Hooks/useForm";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

const App = () => {
  const componentesOptions = [
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

  function handleSubmit(event) {
    event.preventDefault();
    if (nome.validate() && cep.validate() && email.validate()) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  const nome = useForm();
  const sobrenome = useForm(false);
  const email = useForm("email");
  const cep = useForm("cep");
  const [produto, setProduto] = React.useState("");
  const [marca, setMarca] = React.useState("");
  const [cor, setCor] = React.useState("Branco");
  const [componentes, setComponentes] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <>
      <h1>Inputs</h1>
      <form onSubmit={handleSubmit}>
        <h2>Comprar</h2>
        <Input label="Nome" id="nome" value={nome} {...nome} />
        <Input
          label="Sobrenome"
          id="sobrenome"
          value={sobrenome}
          {...sobrenome}
        />
        <Input label="E-mail" id="email" type="email" {...email} />
        <Input
          label="CEP"
          id="CEP"
          placeholder="00000-000"
          maxLength={9}
          {...cep}
        />

        <h2>Produto</h2>
        <Select
          options={["Smartphone", "Tablet", "Smartspeaker"]}
          value={produto}
          setValue={setProduto}
        />

        <h2>Marca</h2>
        <Select
          options={["Xing-Ling", "Null Phone", "Gettygetty", "Hongue Kongue"]}
          value={marca}
          setValue={setMarca}
        />

        <h2>Cor</h2>
        <Radio options={cores} value={cor} setValue={setCor} />

        <h2>Componentes</h2>
        <Checkbox
          options={componentesOptions}
          value={componentes}
          setValue={[setComponentes]}
        />

        {produto && (
          <h4>
            Você escolheu o {produto} {cor && cor}
            {marca && " da marca " + marca}
            {componentes.length > 0 && " com " + componentes.join(", ")}.
          </h4>
        )}

        <h2>Termos de uso</h2>
        <Checkbox
          options={["Li e aceito os termos"]}
          value={termos}
          setValue={setTermos}
        />
      </form>
      <br />
      {termos.length > 0 && <button>Comprar</button>}
    </>
  );
};

export default App;
