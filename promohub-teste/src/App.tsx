import "./App.css";
<<<<<<< HEAD
import DisplayCard from "./components/DisplayCard";
=======
import { Outlet } from "react-router-dom";
>>>>>>> e7c582d (criada pagina e css para cada card)

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <img
        className="logo"
        src="https://promohub.com.br/_nuxt/logo.f8018e58.png"
        alt="Promohub"
      />
<<<<<<< HEAD
      {/* Componentes */}
      <DisplayCard />
=======
      <Outlet />
>>>>>>> e7c582d (criada pagina e css para cada card)
    </div>
  );
}

export default App;
