import "./App.css";
import Footer from "./Componentes/Footer";
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
