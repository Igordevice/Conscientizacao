import Styles from './Css/graphic.module.css'
import Graficos from '../assets/img/Grafico.png'

function Graphic() {
    return (
        <div className={Styles.graphic}>
            <div className={Styles.texto_violencia}>
                <h2>As violências se cruzam</h2>
                <p>Entre as vítimas de feminicídio em 2025, 65,1% eram mulheres negras. Entre as pessoas trans assassinadas de 2017 a 2025, em média 77% eram negras.</p>


                <button className={Styles.button_ler}>
                    Ler mais &rarr;
                </button>
            </div>



            <div className={Styles.imagem_grafico}>
                <img src={Graficos} alt="" />
            </div>
        </div>
    )
}

export default Graphic