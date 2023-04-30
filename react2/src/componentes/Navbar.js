import {Link} from 'react-router-dom'
export const Navbar=() =>{
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/conocenos">Conocenos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}