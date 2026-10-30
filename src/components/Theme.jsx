import Styles from './Css/Theme.module.css'
import { Link } from 'react-router-dom'
import Image1 from '../assets/img/racismo_theme.jpg'
import Image2 from '../assets/img/Transfobia_theme.jpg'
import Image3 from '../assets/img/Homofobia_theme.jpg'
import Image4 from '../assets/img/Misoginia_theme.jpg'

function Theme() {
    return (
        
        <div className={Styles.theme}>
            <br></br>
            <div className={Styles.titulo_theme}>
                <h2>Entenda cada tema</h2>
                <p>Cada página traz o que é, dados, oque diz a lei e o que fazer</p>
            </div>
            <div className={Styles.conteudo_theme}>
                <div className={Styles.card1_theme}>
                    <div className={Styles.image_theme}>
                        <img src={Image1} alt="Imagem de manifestação contra o racismo" />
                    </div>
                    <h2>Racismo</h2>
                    <p>O que é, como a lei trata e o que mostram os dados sobre o racismo e inkúria racial.</p>
                    <Link to="/temas/racismo">Saiba mais &rarr;</Link>
                </div>
                <div className={Styles.card2_theme}>
                    <div className={Styles.image_theme}>
                        <img src={Image2} alt="Imagem de manifestação contra a tranfobia" />
                    </div>
                    <h2>Transfobia</h2>
                    <p>Violencia e discriminação contra pessoas trans e travestis, e o que dizem os dados da ANTRA.</p>
                    <Link to="/temas/transfobia">Saiba mais &rarr;</Link>
                </div>
                <div className={Styles.card3_theme}>
                    <div className={Styles.image_theme}>
                        <img src={Image3} alt="Imagem de manifestação contra a homofobia" />
                    </div>
                    <h2>Homofobia</h2>
                    <p>Preconceito por orientação sexual, a decisão do STF e os números de violência contra pessoas LGBTQIA+.</p>
                    <Link to="/temas/homofobia">Saiba mais &rarr;</Link>
                </div>
                <div className={Styles.card4_theme}>
                    <div className={Styles.image_theme}>
                        <img src={Image4} alt="Imagem de manifestação contra a homofobia" />
                    </div>
                    <h2>Misoginia</h2>
                    <p>Do assédio ao feminicidío: Como o odío às mulheres se manifesta e como pedir ajuda.</p>
                    <Link to="/temas/misoginia">Saiba mais &rarr;</Link>
                </div>
            </div>
        </div>
    )
}

export default Theme
