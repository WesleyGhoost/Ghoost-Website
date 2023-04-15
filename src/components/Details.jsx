import ScrollReveal from 'scrollreveal'

import { useEffect } from "react";

import { DetailsContainer, DetailsTitle, DetailsDescrip, DetailsLinkGit, DetailsLinkFigs } from "../Styles/DetailsStyle";

function Details() {
    const revealDetails = () => {
        ScrollReveal().reveal('.details', { reset: false, duration: 2000, delay: 300, origin: 'left', distance: '30px' })
    }

    useEffect(() => {
        revealDetails()
    })

    return (
        <>
            <DetailsContainer className='details' id='details'>
                <DetailsTitle>Detalhes do site</DetailsTitle>
                <DetailsDescrip>Este site foi construído com a utilização da linguagem <em>React</em>, juntamente com a sua mais moderna biblioteca de estilização, o <em>styled-components</em>, sua outra biblioteca voltada ao scroll do site, <em>react-scroll</em>, e por fim, o <em>scroll-reveal</em>, que é capaz de revelar o conteúdo do site conforme o usuário for deslizando-o. Sendo também o mesmo, responsivo nos mais diversos tipos de telas (mobile, tablet, desktop, entre outros.)</DetailsDescrip>
                <DetailsDescrip>Sua documentação pode ser acessada diretamente do <em>Github</em> através do seguinte link: 
                    <DetailsLinkGit href="https://github.com/WesleyGhoost/Ghoost-Website"> Ghoost Website</DetailsLinkGit>
                </DetailsDescrip>
                <DetailsLinkFigs href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones">Github ícones criados por Pixel perfect - Flaticon</DetailsLinkFigs>
                <DetailsLinkFigs href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</DetailsLinkFigs>
                <DetailsLinkFigs href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Vectors Market - Flaticon</DetailsLinkFigs>
                <DetailsLinkFigs href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by mim_studio - Flaticon</DetailsLinkFigs>
                <DetailsLinkFigs href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Smashicons - Flaticon</DetailsLinkFigs>
            </DetailsContainer>
        </>
    )
}

export default Details