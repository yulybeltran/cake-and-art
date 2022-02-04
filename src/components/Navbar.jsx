import {NavLink} from 'react-router-dom'
import style from "../styles/navbar.module.css"

function Navbar(){
    return(
        <div>
          
        <div className={style.navbar}>
            <img src="https://drive.google.com/uc?export=download&id=1z7jh_4t_JYT9MORCF1wks7g0y51ig1Io" alt="Logotipo"/>
            <ul>
                <li>
                    <NavLink to="/">HOME</NavLink>

                </li>
                <li>
                    <NavLink to="/catalogo">CATÁLOGO</NavLink>
                </li>
                
            </ul>
        </div>
           
        </div>

    )
}

export {Navbar} 
