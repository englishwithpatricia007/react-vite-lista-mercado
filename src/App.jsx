import { useRef, useState } from "react";
import ItemLista from "./ItemLista";

function App() {
  //Hook
  //useState, useRef

  const [listaMercado, setListaMercado] = useState([
    "Banana",
    "Maçã",
    "Laranja",
  ]);

  const inputAdicionar = useRef();

  const adicionarElementoNaLista = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdicionar.current.value;

    if (valorInput) {
      novaLista.push(valorInput);
      setListaMercado(novaLista);
      inputAdicionar.current.value = "";
    }
  };

  return (
    <>
      <h1>Lista de Mercado</h1>
      <input ref={inputAdicionar} type="text" placeholder="Digite um item" />
      <button onClick={() => adicionarElementoNaLista()}>Adicionar</button>

      {listaMercado.length > 0 ? (
        <ul>
          {listaMercado.map((itemLista, index) => (
            <ItemLista
              key={index}
              itemLista={itemLista}
              listaMercado={listaMercado}
              setListaMercado={setListaMercado}
            />
          ))}
        </ul>
      ) : (
        <p>Você não tem nenhum item na sua lista do mercado</p>
      )}
    </>
  );
}

export default App;
