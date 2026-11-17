import Styles from './Css/Denuncia.module.css'

function Denuncia() {
    return (
        <div className={Styles.denuncia}>
            <div className={Styles.texto_denuncia}>
                <h2>Sofreu ou presenciou violencia ? 
                    <br></br>
                    <p>Denuncie.</p>
                </h2>
                <p>Os dois canais são gratuitos e funcionam 24 horas</p>
            </div>

            <div className={Styles.numero1}>
                <h3>Disque 100</h3>
                <p>Racismo, LGBTfobia e outras violações de direitos humanos</p>

            </div>
            <div className={Styles.numero2}>
                <h3>ligue 180</h3>
                <p>Violência contra a mulher</p>
            </div>
        </div>
    )
}
export default Denuncia