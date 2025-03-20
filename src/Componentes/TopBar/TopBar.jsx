import "./TopBar.css";
import ArrowRigth from "./assets/arrow-right.svg";
import CardBankLogo from "./assets/CardBanklogo.png";

const TopBar = () => {
  return (
    <header>
      <ul className="topbar">
        <li className="hover-effect">
          <img className="img" src={CardBankLogo} alt="Logo do CardBank" />
        </li>
        <li className="hover-effect">Para você</li>
        <li className="hover-effect">Para empresas</li>
        <li className="hover-effect">Ajuda</li>
        <li className="hover-effect">Busca</li>
        <li>
          <div className="AgenciaConta">
            <input type="text" maxLength={4} placeholder="Agência" />
            <p>/</p>
            <input type="text" maxLength={6} placeholder="Conta" />
          </div>
        </li>
        <button>
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
