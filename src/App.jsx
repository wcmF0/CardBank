import "./App.css";
import MainContent from "./Componentes/MainContent";
import TopBar from "./Componentes/TopBar";

function App() {
  return (
    <div className="conteudo">
      <header>
        <TopBar />
      </header>
      <div>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
