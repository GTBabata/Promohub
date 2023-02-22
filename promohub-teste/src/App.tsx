import "./App.css";
import DisplayCard from "./components/DisplayCard";

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <img
        className="logo"
        src="https://promohub.com.br/_nuxt/logo.f8018e58.png"
        alt="Promohub"
      />
      {/* Componentes */}
      <DisplayCard />
    </div>
  );
}

export default App;
