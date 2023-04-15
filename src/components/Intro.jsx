import Github from '../img/github.png'

import { IntroContainer, IntroTitle, IntroDescrip, IntroImgs } from "../Styles/IntroStyle";

function Intro() {
    return (
        <>
            <IntroContainer>
                <IntroImgs>
                    <a href="https://www.linkedin.com/in/wesley-felix-3b2168234/"><img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" /></a>
                    <a href="https://github.com/WesleyGhoost"><img height="30" width="30" src={Github} alt="Github" /></a>
                </IntroImgs>
                <IntroTitle>Seja bem-vindo/a ao Ghoost Website</IntroTitle>
                <IntroDescrip>Aqui você encontrará mais detalhes sobre a minha pessoa, minha relação com a programação, as linguagens na qual eu tenho domínio, e claro, meus projetos.</IntroDescrip>
            </IntroContainer>
        </>
    )
}

export default Intro