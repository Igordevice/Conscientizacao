import { Link, useParams } from 'react-router-dom'
import Styles from './Css/TemaDetalhe.module.css'
import RacismoImage from '../assets/img/racismo_theme.jpg'
import TransfobiaImage from '../assets/img/Transfobia_theme.jpg'
import HomofobiaImage from '../assets/img/Homofobia_theme.jpg'
import MisoginiaImage from '../assets/img/Misoginia_theme.jpg'

// Edite aqui os textos e a imagem de cada tema.
const temas = {
  racismo: {
    titulo: 'Racismo',
    imagem: RacismoImage,
    alt: 'Manifestação contra o racismo',
    resumo: 'O que é, como a lei trata e o que mostram os dados sobre o racismo e a injúria racial.',
    sobre: 'Racismo é a discriminação ou o preconceito baseado em raça, cor, etnia ou origem. Pode aparecer em atitudes individuais e também em práticas e estruturas que criam ou mantêm desigualdades.',
    lei: 'A legislação brasileira prevê punição para crimes de racismo e injúria racial. A situação concreta deve ser analisada pelas autoridades competentes.',
    ajuda: 'Registre, se for seguro, data, local, mensagens e nomes de testemunhas. Procure uma delegacia ou serviço de atendimento a vítimas e peça orientação.'
  },
  transfobia: {
    titulo: 'Transfobia',
    imagem: TransfobiaImage,
    alt: 'Manifestação contra a transfobia',
    resumo: 'Violência e discriminação contra pessoas trans e travestis, e o que dizem os dados da ANTRA.',
    sobre: 'Transfobia é o preconceito, a discriminação ou a violência dirigida a pessoas trans e travestis por sua identidade ou expressão de gênero. Pode ocorrer em espaços públicos, no trabalho, na escola e dentro de instituições.',
    lei: 'No Brasil, decisões do Supremo Tribunal Federal determinaram a aplicação da legislação sobre racismo a condutas homotransfóbicas, conforme cada caso.',
    ajuda: 'Em uma situação de violência, priorize sua segurança. Guarde registros se puder, procure uma delegacia ou serviço de apoio e informe uma pessoa de confiança.'
  },
  homofobia: {
    titulo: 'Homofobia',
    imagem: HomofobiaImage,
    alt: 'Manifestação contra a homofobia',
    resumo: 'Preconceito por orientação sexual, a decisão do STF e os números de violência contra pessoas LGBTQIA+.',
    sobre: 'Homofobia é o preconceito, a discriminação ou a violência contra pessoas por sua orientação sexual. Ela pode se manifestar em insultos, ameaças, exclusão e agressões.',
    lei: 'Decisões do Supremo Tribunal Federal estabeleceram que condutas homotransfóbicas podem ser enquadradas na legislação sobre racismo, conforme as circunstâncias.',
    ajuda: 'Se houver risco imediato, busque um local seguro e acione os serviços de emergência. Quando possível, registre o ocorrido e procure uma delegacia ou serviço de apoio.'
  },
  misoginia: {
    titulo: 'Misoginia',
    imagem: MisoginiaImage,
    alt: 'Manifestação contra a violência de gênero',
    resumo: 'Do assédio ao feminicídio: como o ódio às mulheres se manifesta e como pedir ajuda.',
    sobre: 'Misoginia é o desprezo, a aversão ou o ódio dirigido às mulheres. Pode aparecer em discursos e práticas discriminatórias e se relaciona a diferentes formas de violência de gênero.',
    lei: 'A legislação brasileira prevê medidas de proteção e punições para diferentes formas de violência contra mulheres. O atendimento especializado pode orientar sobre os direitos e os próximos passos.',
    ajuda: 'Em caso de emergência, ligue 190. Para orientação e acolhimento, o Ligue 180 funciona como canal de atendimento à mulher. Busque também uma rede de confiança e os serviços locais.'
  }
}

function TemaDetalhe() {
  const { temaId } = useParams()
  const tema = temas[temaId]

  if (!tema) {
    return (
      <main className={Styles.detalhe}>
        <h1>Tema não encontrado</h1>
        <Link to="/Theme">Voltar para Temas</Link>
      </main>
    )
  }

  return (
    <main className={Styles.detalhe}>
      <Link className={Styles.voltar} to="/Theme">&larr; Voltar para Temas</Link>
      <section className={Styles.cabecalho}>
        <div>
          <p className={Styles.etiqueta}>Entenda o tema</p>
          <h1>{tema.titulo}</h1>
          <p className={Styles.resumo}>{tema.resumo}</p>
        </div>
        <img src={tema.imagem} alt={tema.alt} />
      </section>
      <section className={Styles.conteudo}>
        <article>
          <h2>O que é</h2>
          <p>{tema.sobre}</p>
        </article>
        <article>
          <h2>O que diz a lei</h2>
          <p>{tema.lei}</p>
        </article>
        <article>
          <h2>Como buscar ajuda</h2>
          <p>{tema.ajuda}</p>
        </article>
      </section>
    </main>
  )
}

export default TemaDetalhe
