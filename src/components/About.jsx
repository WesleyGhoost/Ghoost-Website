import Computer from '../img/computer.jpg'

import ScrollReveal from 'scrollreveal'

import { useEffect } from 'react'

import { AboutMe, AboutMeTitle, AboutMeDescrip, AboutMeStrong, AboutContainer, AboutImg, Img } from "../Styles/AboutStyle"

function About() {
    const revealAbout = () => {
        ScrollReveal().reveal('.about', {reset: false, duration: 1500, delay: 300, origin: 'right', distance: '30px'})
        ScrollReveal().reveal('.about-img', {reset: false, duration: 1500, delay: 500, origin: 'left', distance: '30px'})
    }

    useEffect(() => {
        revealAbout()
    })

    return (
        <>
            <AboutContainer id='about'>
                <AboutImg className='about-img'>
                    <Img src={Computer}/>
                </AboutImg>
                <AboutMe className='about'>
                    <AboutMeTitle>Sobre mim</AboutMeTitle>
                    <AboutMeDescrip>
                        Olá, meu nome é <AboutMeStrong>Wesley Felix</AboutMeStrong>, sou um <AboutMeStrong>desenvolvedor front-end jr</AboutMeStrong>, tenho 18 anos, e nasci e moro atualmente em São Paulo. Terminei o ensino médio e depois de mais de um ano estudando programação, eu pretendo me ingressar na área o mais breve possível.
                    </AboutMeDescrip>
                    <AboutMeDescrip>
                        Eu descobri que a carreira de desenvolvedor é perfeita para mim pois desde pequeno eu sempre utilizei computadores e sou <AboutMeStrong>apaixonado por tecnologia</AboutMeStrong>, eu só não sabia que a programação em si existia, mas ela sempre esteve comigo em todos os lugares, pois sem ela, não existiria absolutamente nada dentro deste mundo que eu tanto gosto.
                    </AboutMeDescrip>
                    <AboutMeDescrip>
                        O meu hobbie predileto (além de programar é claro) é <AboutMeStrong>jogar videogame</AboutMeStrong>. Descobri o mundo dos games aos 5 anos e daí em diante nunca mais parei. Quando eu misturo <AboutMeStrong>programação com jogos</AboutMeStrong> eu sinto que eu ganho mais desempenho ao codar, pois eu estou trabalhando ali com algo que eu realmente gosto. Obs: <em>Ghoost</em> é meu nickname em praticamente todos os games que jogo atualmente.
                    </AboutMeDescrip>
                </AboutMe>
            </AboutContainer>
        </>
    )
}

export default About