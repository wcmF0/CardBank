import "./MainContent.css";
import Banner from "./assets/Banner.png";
import { ChevronRight } from "lucide-react";

const MainContent = () => {
  return (
    <div className="maincontent">
      <section className="image-text-container">
        <img
          src={Banner}
          alt="Banner do Cartão CardBank Black"
          className="background-image"
        />
        <div className="overlay-text">
          <h3>Cartão CardBank Black</h3>
          <p>Os benefícios que você merece ao seu alcance.</p>
          <button>Garatir o meu</button>
        </div>
      </section>

      <section>
        <div className="beneficios_text">
          <h2>Beneficios de ser CardBank</h2>
        </div>
        <div className="beneficios_lista">
          <li>
            <h1>Cashback Infinito:</h1>
            Receba até 5% de cashback em todas as suas compras, sem limites
            mensais e com o valor depositado diretamente em sua conta.
          </li>
          <li>
            <h1>Viagem Sem Limites:</h1>
            Acesse salas VIP nos principais aeroportos do mundo, além de
            descontos exclusivos em passagens aéreas e pacotes de viagens.
          </li>
          <li>
            <h1>Proteção Inteligente:</h1>
            Seguro contra roubo e perda de cartão ativado automaticamente, com
            reposição gratuita em até 24 horas, onde quer que você esteja.
          </li>
          <li>
            <h1> Concierge Tech:</h1>
            Assistente virtual disponível 24/7 para resolver problemas
            financeiros, planejar eventos ou até encontrar aquele presente
            perfeito.
          </li>
        </div>
      </section>

      <section>
        <div className="serviços_text">
          <h2>Serviços destaque do seu CardBank</h2>
        </div>
        <div className="serviços_lista">
          <li className="lista_padrao">
            <img src="" alt="" />
            <h1>Simular compra futura</h1>
            <p>
              Acesse no app CardBank: Produtos{" "}
              <ChevronRight className="ChevronRight" /> Cartões <ChevronRight />{" "}
              Gestão do Cartão - Simular Compra Futura
            </p>
          </li>
          <li>
            <h1>Cartão virtual</h1>
            <p>
              Acesse no app Cardbank: Produtos <ChevronRight /> Cartões{" "}
              <ChevronRight /> Cartão Virtual
            </p>
          </li>
          <li>
            <h1>Carteira digital</h1>
            <p>
              Acesse no app Itaú: Serviços <ChevronRight /> Cartões{" "}
              <ChevronRight /> Carteiras Digitais
            </p>
          </li>
          <li>
            {" "}
            <h1>
              Pague contas
              <p>
                Acesse no app Itaú: Serviços <ChevronRight /> Cartões{" "}
                <ChevronRight /> Pague Contas
              </p>
            </h1>
          </li>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
