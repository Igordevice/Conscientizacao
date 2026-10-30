import Styles from './Css/Crumb.module.css'

function Crumb() {
  return (
    <div className={Styles.miolo}>
      <div className={Styles.texto_cabecalho}>
        <h2>
          O problema em números reais
        </h2>
        <p>
          Dados de 2025 de fontes oficiais e de organizações de referência.
        </p>
      </div>
      <div className={Styles.conteudocrumb}>
        <div className={Styles.card1_crumb}>
          <h2>30.743</h2>
          <p>Registro Anuario Brasileiro de Segurança</p>
          <span>Fonte: Anuário Brasileiro de Segurança Pública 2026 (dados de 2025)</span>
        </div>
        <div className={Styles.card2_crumb}>
          <h2>80</h2>
          <p>pessoas trans assassinadas em 2025</p>
          <span>Fonte: Anuário Brasileiro de Segurança Pública 2026 (dados de 2025)</span>
        </div>
        <div className={Styles.card3_crumb}>
          <h2>3.481</h2>
          <p>Vítimas de racismo por homofobia ou transfobia em 2025</p>
          <span>Fonte: Anuário Brasileiro de Segurança Pública 2026 (dados de 2025)</span>
        </div>
        <div className={Styles.card4_crumb}>
          <h2>1.571</h2>
          <p>feminicidios em 2025, o mair numero já registrado</p>
          <span>Fonte: Anuário Brasileiro de Segurança Pública 2026 (dados de 2025)</span>
        </div>
      </div>
    </div>
  )
}

export default Crumb