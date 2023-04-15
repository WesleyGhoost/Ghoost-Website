import '../index.css'

import { useEffect, useState } from "react"

import { Link } from 'react-scroll'

import { NavList } from "../Styles/NavbarStyle"

function Navbar() {
    const [colorNav, setColorNav] = useState(false)

    useEffect(() => {
        const changeColorNav = () => {
            if(window.scrollY> 10) {
                setColorNav(true)
            }
            else {
                setColorNav(false)
            }
        }
        window.addEventListener('scroll', changeColorNav)
    })
    
    return(
        <>
            <nav className={colorNav ? 'navChange' : ''}>
                <NavList>
                    <li>
                        <Link to="intro" spy={true} smooth={true} offset={50} duration={500}>Intro</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>Sobre mim</Link>
                    </li>
                    <li>
                        <Link to="languages" spy={true} smooth={true} offset={-100} duration={500}>Linguagens</Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projetos</Link>
                    </li>
                    <li>
                        <Link to="details" spy={true} smooth={true} offset={-100} duration={500}>Detalhes do site</Link>
                    </li>
                </NavList>
            </nav>
        </>
    )
}

export default Navbar