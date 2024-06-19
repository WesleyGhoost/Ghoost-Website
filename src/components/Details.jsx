import ScrollReveal from 'scrollreveal'
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { DetailsContainer } from "../Styles/DetailsStyle";

function Details() {
    const language = useSelector((state) => state.language)

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
    }, [])

    return (
        <>
            <DetailsContainer
                className='details'
                id='details'
            >
                <h1>{language === 'pt' ? 'Detalhes do site' : 'Website details'}</h1>
                {language === 'pt' ?
                    <h3>Este site foi construído com a utilização da linguagem <em>React</em>; juntamente com a sua mais moderna biblioteca de estilização, o <em>styled-components</em>; sua outra biblioteca voltada ao scroll do site, <em>react-scroll</em>; o <em>scroll-reveal</em>, que é capaz de revelar o conteúdo do site conforme o usuário for deslizando-o; e por fim, para gerenciar estados globais fiz uso do react-redux. Sendo também o mesmo, responsivo nos mais diversos tipos de telas (mobile, tablet, desktop, entre outros.)</h3> :
                    <h3>This website has developed with the use of the language <em>React</em>, along with their more modern styling library, the <em>styled-components</em>, their other library focused on the scroll of the site, <em>react-scroll</em>, the <em>scroll-reveal</em>, which is capable of revealing the content of the website as the user slides it; and in the end, to manage global states I used react-redux. It is also responsive on various types of screens (mobile, tablet, desktop, entre outros.)</h3>
                }
                {language === 'pt' ?
                    <h3>Sua documentação pode ser acessada diretamente do <em>Github</em> através do seguinte link:
                        <a href="https://github.com/WesleyGhoost/Ghoost-Website"> Ghoost Website</a>
                    </h3> :
                    <h3>Their documentation can be accessed directly from <em>Github</em> through the following link:
                        <a href="https://github.com/WesleyGhoost/Ghoost-Website"> Ghoost Website</a>
                    </h3>
                }
                <a href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones">Github ícones criados por Pixel perfect - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Vectors Market - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by mim_studio - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Smashicons - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/brazil" title="brazil icons">Brazil icons created by verluk - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/usa" title="usa icons">Usa icons created by Iconiyo - Flaticon</a>
            </DetailsContainer>
        </>
    )
}

export default Details