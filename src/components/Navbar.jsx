
import React, { useEffect, useState} from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {Home} from "../pages/Home"
import {Catalogo} from "../pages/Catalogo"
import style from "../styles/navbar.module.scss";
import { Link} from "react-router-dom";

const Navbar = () => {
    //const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

  

    return (
        <header className={style.header}>
            <div className={style.header__content}>
                <img  className={style.header__content__logo} src="https://drive.google.com/uc?export=download&id=1z7jh_4t_JYT9MORCF1wks7g0y51ig1Io" alt="Logotipo"/>
                <nav
                    className={`${style.header__content__nav} ${
                        menuOpen && size.width < 768 ? style.isMenu : ""
                    }`}
                >


                    <ul>
                   
                   
                        <li>
                            <Link to="/" onClick={<Home/>}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalogo" onClick={<Catalogo/>}>
                                CATALOGO
                            </Link>
                        </li>
                        
                    </ul>
                   
                </nav>
                <div className={style.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export {Navbar};
