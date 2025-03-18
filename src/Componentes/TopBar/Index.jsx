import "./TopBar.css";
import ArrowRigth from "./assets/arrow-right.svg";
import CardBankLogo from "./assets/CardBankLogo.png";

const TopBar = () => {
  return (
    <header>
      <ul className="topbar">
        <li>
          <img className="img" src={CardBankLogo} alt="Logo do CardBank" />
        </li>
        <li>Para você</li>
        <li>Para empresas</li>
        <li>Ajuda</li>
        <li>Busca</li>
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
