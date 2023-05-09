

import "./Navbar.css";
import {Link} from 'react-router-dom'
export const Navbar=() =>{
    return(
        <div>

            <nav>
            <ul class="container">
               
                    <div class="container-logo">

                        
                     <h2><span>  Jhosua </span> González <span>.</span></h2>
                    </div>


                    <ul class="links">   
            
                        <Link class="link" to="/">Inicio</Link>
                    
                    
                        <Link class="link" to="/empresa">Carne</Link>
                    
                
                        <Link class="link" to="/contacto">Hamburguesa</Link>
                    
                    
                        <Link  class="link"  to="/conocenos">Bebidas</Link>
                    
                    </ul>

                    <div class="toggle">
                        |||
                    </div>
            </ul>
            </nav>
        </div>
    )
}   