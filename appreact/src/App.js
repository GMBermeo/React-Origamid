import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar(contar + 1);
    setItems((item) => [...item, `Item ${contar + 1}`]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>Add Item {contar + 1}</button>
    </>
  );
};

export default App;
