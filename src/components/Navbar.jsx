import {NavLink} from 'react-router-dom'
import style from "../styles/navbar.module.css"

function Navbar(){
    return(
        <div>
            <div className={style.navbar}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/catalogo">Catalogo</NavLink>
                </li>
                
            </ul>
        </div>
        </div>

    )
}

export {Navbar} 
