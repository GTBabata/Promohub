import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <img
        className="logo"
        src="https://promohub.com.br/_nuxt/logo.f8018e58.png"
        alt="Promohub"
      />
      {/* Components */}
      <Outlet />
    </div>
  );
}

export default App;
