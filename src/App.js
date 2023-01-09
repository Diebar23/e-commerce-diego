import './App.css';
import Card from "./components/Card";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer";

function App() {
  // const title = "Mis Compras";

  function hacerAlgo() {
    alert("Bienvenidos");
  }

  const miEstilo = {
    backgroundColor: "pink",
    margin: "30px",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <div>
      <NavBar />
      <div style={miEstilo} className="catalogo">
      {/* <ItemListContainer title='Bienvenidos a Mis Compras'/> */}
        <Card
          img="/img/Hamburguesa Paty.jpg"
          title="Hamburguesa Paty"
          price={500}
          detail="Hamburguesa de carne x 4"
        />
      </div>
      <button onClick={hacerAlgo}>Hacer Algo</button>

      <Button color="black">Click</Button>
    </div>
  );
}

export default App;

