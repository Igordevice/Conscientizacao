import {Link} from 'react-router-dom'

import Styles from './Css/Header.module.css'

function Header() {
  return (
        <header>
            <nav className={Styles.menu}>
                <Link to="/">Home</Link>
                <Link to="Theme">Temas</Link>
                <Link to="graphic">Gráfico</Link>
                <Link to="Crumb">Estimativa</Link>
            

            </nav>

            <div className={Styles.Denuncia}>
               <button>Denuncie</button>
            </div>
        </header>
  )
}

export default Header