import Github from '../img/github.png'
import Hollow from '../img/hollow-knight.png'
import { useSelector } from 'react-redux';
import { IntroContainer, IntroLinks, IntroMain } from "../Styles/IntroStyle";

function Intro() {
    const language = useSelector((state) => state.language)

    return (
        <>
            <IntroContainer>
                <IntroLinks>
                    <a href="https://www.linkedin.com/in/wesley-felix-3b2168234/">
                        <img
                            height="30"
                            width="30"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                            alt="Linkedin"
                        />
                    </a>
                    <a href="https://github.com/WesleyGhoost">
                        <img
                            height="30"
                            width="30"
                            src={Github}
                            alt="Github"
                        />
                    </a>
                </IntroLinks>
                <IntroMain>
                    {language === 'pt' ?
                        <div>
                            <h1>Seja bem-vindo ao Ghoost Website</h1>
                            <h3>Aqui você encontrará mais detalhes sobre a minha pessoa, minha relação com a programação, as linguagens nas quais eu tenho domínio, e claro, meus projetos.</h3>
                        </div> :
                        <div>
                            <h1>Welcome to Ghoost Website</h1>
                            <h3>Here you'll find more details about my person, my relation with programming, the languages in which i am proficient, and course, my projects.</h3>
                        </div>
                    }
                    <img
                        src={Hollow}
                        alt='Hollow Knight'
                    />
                </IntroMain>
            </IntroContainer>
        </>
    )
}

export default Intro