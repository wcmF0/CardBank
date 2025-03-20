import "./Footer.css";
import { LaptopMinimalCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer_start">
          <h1>
            Cartão de Crédito CardBank: Peça o Seu e Aproveite Benefícios
            Exclusivos
          </h1>
          <div className="underline"></div>
        </div>

        <div className="footer-grid">
          <div>
            <h4>Nossos serviços</h4>
            <ul>
              <li>
                <a href="#">Conta digital CardBank</a>
              </li>
              <li>
                <a href="#">Cartões de crédito premium</a>
              </li>
              <li>
                <a href="#">Programas de cashback</a>
              </li>
              <li>
                <a href="#">Seguros CardBank</a>
              </li>
              <li>
                <a href="#">Planejamento financeiro</a>
              </li>
              <li>
                <a href="#">Empréstimos flexíveis</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Sobre o CardBank</h4>
            <ul>
              <li>
                <a href="#">História da empresa</a>
              </li>
              <li>
                <a href="#">Carreiras no CardBank</a>
              </li>
              <li>
                <a href="#">Notícias e eventos</a>
              </li>

              <li>
                <a href="#">Programa de integridade</a>
              </li>

              <li>
                <a href="#">Termos e condições</a>
              </li>
              <li>
                <a href="#">Política de privacidade</a>
              </li>
              <li>
                <a href="#">Acessibilidade digital</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Suporte</h4>
            <ul>
              <li>
                <a href="#">Central de atendimento</a>
              </li>
              <li>
                <a href="#">FAQ CardBank</a>
              </li>
              <li>
                <a href="#">Encontre nossos parceiros</a>
              </li>
              <li>
                <a href="#">Dicas de segurança</a>
              </li>
              <li>
                <a href="#">Acesso exclusivo para clientes</a>
              </li>
              <li>
                <a href="#">Ouvidoria premium</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_dev">
          <div className="underline2"></div>
          <div className="footer_dev2">
            <h1>
              Desenvolvido por <a href="https://github.com/wcmF0">wcmF0</a>
            </h1>
            <div>
              <LaptopMinimalCheck />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
