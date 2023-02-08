import "./App.css";
import FetchData from "./components/FetchData";

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
      <FetchData />
    </div>
  );
}

export default App;
