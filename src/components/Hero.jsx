import Image from '../assets/img/Conscientização.png'
import Styles from './Css/Hero.module.css'

function Hero() {
  return (
    <section className={Styles.hero}>
      <div className={Styles.conteudo}>
        <span className={Styles.etiqueta}>Site educativo</span>

        <h2 className={Styles.titulo}>
          Informação é a primeira defesa contra o preconceito
        </h2>

        <p className={Styles.descricao}>
          Dados reais, leis e caminhos de denúncia sobre racismo, transfobia,
          homofobia e misoginia no Brasil.
        </p>

        <div className={Styles.botoes}>
          <button className={Styles.botao_conhecer}>Conhecer os temas</button>
          <button className={Styles.botao_denunciar}>Como denunciar</button>
        </div>
      </div>

      <div className={Styles.imagem}>
        <img src={Image} alt="Quadro com a frase 'Not today racism'" />
      </div>
    </section>
  )
}

export default Hero