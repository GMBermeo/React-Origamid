import React from "react";
import useFetch from "./Hooks/useFetch";

const camposFormulario = [
  { id: "nome", label: "Nome", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "senha", label: "Senha", type: "password" },
  { id: "cep", label: "CEP", type: "text" },
  { id: "rua", label: "Rua", type: "text" },
  { id: "numero", label: "Número", type: "text" },
  { id: "bairro", label: "Bairro", type: "text" },
  { id: "cidade", label: "Cidade", type: "text" },
  { id: "estado", label: "Estado", type: "text" },
];

const App = () => {
  // Faça um fetch (POST) para a API abaixo
  // Para a criação ser aceita é necessário enviar dodos de:
  // nome, email, senha, cep, rua, numero, bairro, cidade e estado

  // Mostre uma mensagem na tela, caso a resposta da API seja positiva

  const [form, setForm] = React.useState(
    camposFormulario.reduce((acc, campo) => {
      return {
        ...acc,
        [campo.id]: "",
      };
    })
  );

  const [response, setResponse] = React.useState(null);

  function preencherFormulario({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function enviarFormulario(event) {
    event.preventDefault();

    // Essa é a função utilizado para realizar o POST
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
    <form onSubmit={enviarFormulario}>
      {camposFormulario.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            name={id}
            type={type}
            value={form[id]}
            onChange={preencherFormulario}
          ></input>
        </div>
      ))}
      {response && response.ok && <p>Formulário enviado!</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
