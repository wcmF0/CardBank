import "./MainContent.css";
import Banner from "./assets/Banner.png";
import { ChevronRight } from "lucide-react";
import Serviço1 from "./assets/Serviço1.jpg";
import Serviço2 from "./assets/Serviço2.jpg";
import Serviço3 from "./assets/Serviço3.jpg";
import Serviço4 from "./assets/Serviço4.avif";
import { CalendarCheck2 } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Lock } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Calendar } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { WifiHigh } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { GripHorizontal } from "lucide-react";
import { Landmark } from "lucide-react";

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
            <img src={Serviço1} />
            <h1>Simular compra futura</h1>
            <p>Acesse no app CardBank:</p>
            <div className="teste">
              <p>
                Serviços <ChevronRight /> Cartões <ChevronRight /> Simular
                Compra
              </p>
            </div>
            <div className="lista_figura">
              <div className="lista_figura2">
                <p>
                  <CalendarCheck2 />
                </p>
                <p> Tenha maior clareza do seu poder de compra</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <ReceiptText />
                </p>
                <p>Simule transações acima do seu limite</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <Smartphone />
                </p>
                <p>Jornada 100% digital</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <Lock />
                </p>
                <p>Reforce a segurança das suas operações</p>
              </div>
            </div>
          </li>

          <li className="lista_padrao">
            <img src={Serviço2} alt="" />
            <h1>Cartão virtual</h1>
            <p>Acesse no app Cardbank:</p>
            <div className="teste">
              <p>
                Produtos <ChevronRight /> Cartões
                <ChevronRight /> Cartão Virtual
              </p>
            </div>
            <div className="lista_figura">
              <div className="lista_figura2">
                <p>
                  <Lock />
                </p>
                <p>Camada extra de segurança para compras online</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <CreditCard />
                </p>
                <p>Proteja os dados do seu cartão físico</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <Calendar />
                </p>
                <p>Utilize de forma recorrente ou pontual</p>
              </div>
            </div>
          </li>

          <li className="lista_padrao">
            <img src={Serviço3} alt="" />
            <h1>Carteira digital</h1>
            <p>Acesse no app Cardbank:</p>
            <div className="teste">
              <p>
                Serviços <ChevronRight /> Cartões
                <ChevronRight /> Carteiras Digitais
              </p>
            </div>
            <div className="lista_figura">
              <div className="lista_figura2">
                <p>
                  <TabletSmartphone />
                </p>
                <p>Seus cartões de débito e crédito no celular</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <WifiHigh />
                </p>
                <p>Pagamento por aproximação</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <Smartphone />
                </p>
                <p>Saia sem precisar do cartão físico</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <TriangleAlert />
                </p>
                <p>Evite o golpe da troca de cartão</p>
              </div>
            </div>
          </li>

          <li className="lista_padrao">
            <img src={Serviço4} alt="" />
            <h1>Pague contas</h1>
            <p>Acesse no app Cardbank:</p>
            <div className="teste">
              <p>
                Serviços <ChevronRight /> Cartões
                <ChevronRight /> Pague Contas
              </p>
            </div>
            <div className="lista_figura">
              <div className="lista_figura2">
                <p>
                  <ReceiptText />
                </p>
                <p>Concentre e gerencie contas numa só fatura</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <CalendarCheck2 />
                </p>
                <p>Extensão de prazo para pagar boletos</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <GripHorizontal />
                </p>
                <p>Ganhe até 40 dias extras de vencimento</p>
              </div>
              <div className="lista_figura2">
                <p>
                  <Landmark />
                </p>
                <p>Pague boletos de forma parcelada</p>
              </div>
            </div>
          </li>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
