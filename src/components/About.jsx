import Computer from '../img/computer.jpg'
import ScrollReveal from 'scrollreveal'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AboutMe, AboutContainer, AboutImg } from "../Styles/AboutStyle"

function About() {
    const language = useSelector((state) => state.language)

    const revealAbout = () => {
        ScrollReveal().reveal(
            '.about',
            {
                reset: false,
                duration: 1500,
                delay: 300,
                origin: 'right',
                distance: '30px'
            }
        )
        ScrollReveal().reveal(
            '.about-img',
            {
                reset: false,
                duration: 1500,
                delay: 500,
                origin: 'left',
                distance: '30px'
            }
        )
    }

    useEffect(() => {
        revealAbout()
    }, [])

    return (
        <>
            <AboutContainer id='about'>
                <AboutImg className='about-img'>
                    <img
                        src={Computer}
                        alt='Computer'
                    />
                </AboutImg>
                {language === 'pt' ?
                    <AboutMe className='about'>
                        <h1>Sobre mim</h1>
                        <h3>
                            Olá, meu nome é <strong>Wesley Felix</strong>, sou um <strong>desenvolvedor front-end</strong>, tenho 20 anos, e nasci e moro atualmente em São Paulo. Terminei o ensino médio e depois de mais de dois anos desenvolvendo programas, eu pretendo me ingressar na área o mais breve possível.
                        </h3>
                        <h3>
                            Eu descobri que a carreira de desenvolvedor é perfeita para mim pois desde pequeno eu sempre utilizei computadores e sou <strong>apaixonado por tecnologia</strong>, eu só não sabia que a programação em si existia, mas ela sempre esteve comigo em todos os lugares, pois sem ela, não existiria absolutamente nada dentro deste mundo que eu tanto gosto.
                        </h3>
                        <h3>
                            O meu hobbie predileto (além de programar é claro) é <strong>jogar videogame</strong>. Descobri o mundo dos games aos 5 anos e daí em diante nunca mais parei. Quando eu misturo <strong>programação com jogos</strong> eu sinto que eu ganho mais desempenho ao codar, pois eu estou trabalhando ali com algo que eu realmente gosto. Obs: <em>Ghoost</em> é meu nickname em praticamente todos os games que jogo atualmente.
                        </h3>
                    </AboutMe> :
                    <AboutMe className='about'>
                        <h1>About Me</h1>
                        <h3>
                            Hello, my name is <strong>Wesley Felix</strong>, I am a <strong>front-end developer</strong>, I am 20 years old, and I was born and live currently in São Paulo. I finished High School, and after studying programming for more than two years , i plan to join the field as soon as possible.
                        </h3>
                        <h3>
                            I discovered that a career as a developer is perfect for me because since I was little, I have always been using computers and I am <strong>passionate about technology</strong>, I just didn't know that programming itself existed, but it has always been with me everywhere, because without it, there would be absolutely nothing in this world that I love so much.
                        </h3>
                        <h3>
                            My favorite hobby (besides programming, of course) is <strong>playing videogames</strong>. I discovered the world of the games at the age of 5, and from then on, i have never stopped. When I mix <strong>programming with games</strong> I feel like I get more performance to coding, because I'm working there with something I really like. Obs: <em>Ghoost</em> is my nickname in pratically all the games I play currently.
                        </h3>
                    </AboutMe>
                }
            </AboutContainer>
        </>
    )
}

export default About