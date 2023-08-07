import Computer from '../img/computer.jpg'

import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import { AboutMe, AboutContainer, AboutImg } from "../Styles/aboutStyle"

function About() {
    const revealAbout = () => {
        ScrollReveal().reveal('.about', { reset: false, duration: 1500, delay: 300, origin: 'right', distance: '30px' })
        ScrollReveal().reveal('.about-img', { reset: false, duration: 1500, delay: 500, origin: 'left', distance: '30px' })
    }

    useEffect(() => {
        revealAbout()
    })

    return (
        <>
            <AboutContainer id='about'>
                <AboutImg className='about-img'>
                    <img
                        src={Computer}
                        alt='Computer'
                    />
                </AboutImg>
                <AboutMe className='about'>
                    <h1>Sobre mim</h1>
                    <h3>
                        Olá, meu nome é <strong>Wesley Felix</strong>, sou um <strong>desenvolvedor front-end jr</strong>, tenho 18 anos, e nasci e moro atualmente em São Paulo. Terminei o ensino médio e depois de mais de um ano estudando programação, eu pretendo me ingressar na área o mais breve possível.
                    </h3>
                    <h3>
                        Eu descobri que a carreira de desenvolvedor é perfeita para mim pois desde pequeno eu sempre utilizei computadores e sou <strong>apaixonado por tecnologia</strong>, eu só não sabia que a programação em si existia, mas ela sempre esteve comigo em todos os lugares, pois sem ela, não existiria absolutamente nada dentro deste mundo que eu tanto gosto.
                    </h3>
                    <h3>
                        O meu hobbie predileto (além de programar é claro) é <strong>jogar videogame</strong>. Descobri o mundo dos games aos 5 anos e daí em diante nunca mais parei. Quando eu misturo <strong>programação com jogos</strong> eu sinto que eu ganho mais desempenho ao codar, pois eu estou trabalhando ali com algo que eu realmente gosto. Obs: <em>Ghoost</em> é meu nickname em praticamente todos os games que jogo atualmente.
                    </h3>
                </AboutMe>
            </AboutContainer>
        </>
    )
}

export default About