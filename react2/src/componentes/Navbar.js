

import "./Navbar.css";
import {Link} from 'react-router-dom'
export const Navbar=() =>{
    return(
        <div>
            <nav class="container">
               
                    <div class="container-logo">
                     <h2><span>Logo</span> <span>Pague</span></h2>
                    </div>


                    <ul class="links">   
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/empresa">Carne</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Hamburguesa</Link>
                    </li>
                    <li>
                        <Link to="/conocenos">Bebidas</Link>
                    </li>
                    </ul>

                    <div class="toggle">
                        |||
                    </div>
            </nav>
        </div>
    )
}   