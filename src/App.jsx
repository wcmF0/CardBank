import "./App.css";
import Footer from "./Componentes/Footer/Footer.jsx";
import MainContent from "./Componentes/MainContent/MainContent.jsx";
import TopBar from "./Componentes/TopBar/TopBar.jsx";

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
