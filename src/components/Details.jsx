import ScrollReveal from 'scrollreveal'
import { useEffect } from "react";
import { DetailsContainer } from "../Styles/DetailsStyle";

function Details() {
    const revealDetails = () => {
        ScrollReveal().reveal(
            '.details',
            {
                reset: false,
                duration: 2000,
                delay: 300,
                origin: 'left',
                distance: '30px'
            }
        )
    }

    useEffect(() => {
        revealDetails()
    })

    return (
        <>
            <DetailsContainer
                className='details'
                id='details'
            >
                <h1>Detalhes do site</h1>
                <h3>Este site foi construído com a utilização da linguagem <em>React</em>, juntamente com a sua mais moderna biblioteca de estilização, o <em>styled-components</em>, sua outra biblioteca voltada ao scroll do site, <em>react-scroll</em>, e por fim, o <em>scroll-reveal</em>, que é capaz de revelar o conteúdo do site conforme o usuário for deslizando-o. Sendo também o mesmo, responsivo nos mais diversos tipos de telas (mobile, tablet, desktop, entre outros.)</h3>
                <h3>Sua documentação pode ser acessada diretamente do <em>Github</em> através do seguinte link:
                    <a href="https://github.com/WesleyGhoost/Ghoost-Website"> Ghoost Website</a>
                </h3>
                <a href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones">Github ícones criados por Pixel perfect - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Vectors Market - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by mim_studio - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Smashicons - Flaticon</a>
            </DetailsContainer>
        </>
    )
}

export default Details