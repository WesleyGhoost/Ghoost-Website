import { useEffect, useState } from "react"
import { Link } from 'react-scroll'
import { useSelector } from "react-redux"
import { Burger, Menu, NavBurger, NavDefault } from "../../Styles/NavbarStyle"
import './navbar.css'

function Navbar() {
    const language = useSelector((state) => state.language)

    const [colorNav, setColorNav] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [burger, setBurger] = useState('burger-bar unclicked')
    const [showMenu, setShowMenu] = useState('none')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    useEffect(() => {
        const changeColorNav = () => {
            if (window.scrollY > 10) {
                setColorNav(true)
            }
            else {
                setColorNav(false)
            }
        }
        window.addEventListener('scroll', changeColorNav)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const updateMenu = () => {
        if (isMenuClicked === true) {
            setBurger('burger-bar clicked')
            setShowMenu('inherit')
        } else {
            setBurger('burger-bar unclicked')
            setShowMenu('none')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const closeMenu = () => {
        setBurger('burger-bar unclicked')
        setShowMenu('none')
    }

    if (screenWidth >= 1023) {
        return (
            <NavDefault className={colorNav ? 'navChange' : ''}>
                <ul>
                    <li>
                        <Link
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Intro
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            {language === 'pt' ? 'Sobre mim' : 'About me'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="languages"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            {language === 'pt' ? 'Linguagens' : 'Languages'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            {language === 'pt' ? 'Projetos' : 'Projects'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            {language === 'pt' ? 'Detalhes do site' : 'Website Details'}
                        </Link>

                    </li>
                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            {language === 'pt' ? 'Contato' : 'Contact'}
                        </Link>
                    </li>
                </ul>
            </NavDefault>
        )
    }

    if (screenWidth < 1023) {
        return (
            <>
                <NavBurger className={colorNav ? 'navChange' : ''}>
                    <Burger onClick={updateMenu}>
                        <div className={burger}></div>
                        <div className={burger}></div>
                        <div className={burger}></div>
                    </Burger>
                </NavBurger>
                <Menu display={showMenu}>
                    <ul>
                        <li>
                            <Link
                                onClick={closeMenu}
                                to="intro"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Intro
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                {language === 'pt' ? 'Sobre mim' : 'About me'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                to="languages"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                {language === 'pt' ? 'Linguagens' : 'Languages'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                {language === 'pt' ? 'Projetos' : 'Projects'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                to="details"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                {language === 'pt' ? 'Detalhes do site' : 'Website details'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                {language === 'pt' ? 'Contato' : 'Contact'}
                            </Link>
                        </li>
                    </ul>
                </Menu>
            </>
        )
    }
}

export default Navbar