import React from "react";

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.Constructor = "Constructor";
    this.state = {
      contar: 0,
    };

    this.adicionar = this.adicionar.bind(this);
  }

  componentDidMount() {
    console.log("Montou agora");
    //momento para fazer um fetch
  }

  componentDidUpdate() {
    console.log("Renderizou de novo");
  }

  componentWillUnmount() {
    console.log("Antes do componente sair da tela");
  }

  adicionar() {
    this.setState((state) => ({ contar: state.contar + 1 }));
  }

  render() {
    return (
      <div style={{ marginBottom: "2rem" }}>
        <h2>
          {this.props.titulo} | {this.Constructor}
        </h2>
        <p>{this.state.contar}</p>
        <button
          onClick={() => this.setState({ contar: this.state.contar + 1 })}
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState((state) => ({ contar: state.contar + 1 }))
          }
        >
          +
        </button>
        <button onClick={this.adicionar}>+</button>
      </div>
    );
  }
}

export default Produtos;
