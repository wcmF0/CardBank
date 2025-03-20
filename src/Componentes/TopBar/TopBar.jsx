import "./TopBar.css";
import ArrowRigth from "./assets/arrow-right.svg";
import CardBankLogo from "./assets/Cardbanklogo.png";

const TopBar = () => {
  return (
    <header>
      <ul className="topbar">
        <li className="hover-effect">
          <img className="img" src={CardBankLogo} alt="Logo do CardBank" />
        </li>
        <li className="hover-effect para-voce">Para você</li>
        <li className="hover-effect empresas">Para empresas</li>
        <li className="hover-effect ajuda">Ajuda</li>
        <li className="hover-effect busca">Busca</li>
        <li>
          <div className="AgenciaConta">
            <input type="text" maxLength={4} placeholder="Agência" />
            <p>/</p>
            <input type="text" maxLength={6} placeholder="Conta" />
          </div>
        </li>
        <button className="botao-buscar">
          <img src={ArrowRigth} alt="" />
        </button>
        <div className="AbraConta">
          <li>Abra sua Conta :)</li>
        </div>
      </ul>
    </header>
  );
};

export default TopBar;
