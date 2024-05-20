import ScrollReveal from 'scrollreveal'
import { useEffect } from "react";
import { LanguagesTitle, LanguagesContainer, LanguagesExamples } from "../Styles/LanguagesStyle";

import NextIcon from '../img/nextjs.png'

function Languages() {
    const revealLanguages = () => {
        ScrollReveal().reveal(
            '.lang-title',
            {
                reset: false,
                duration: 1500,
                delay: 150
            }
        )
        ScrollReveal().reveal(
            '.langs',
            {
                reset: false,
                duration: 1500,
                delay: 150
            }
        )
        ScrollReveal().reveal(
            '.lang-reposit',
            {
                reset: false,
                duration: 1500,
                delay: 400,
                origin: 'left',
                distance: '30px'
            }
        )
    }

    useEffect(() => {
        revealLanguages()
    })

    return (
        <>
            <LanguagesTitle
                className='lang-title'
                id='languages'
            >
                Linguagens e ferramentas utilizadas
            </LanguagesTitle>
            <LanguagesContainer>
                <img
                    className='langs'
                    height="65"
                    width="65"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
                    alt="HTML"
                />
                <img
                    className='langs'
                    height="65"
                    width="65"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                    alt="CSS"
                />
                <img
                    className='langs'
                    height="65"
                    width="65"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="Javascript"
                />
                <img
                    className='langs'
                    height="65"
                    width="65"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="React"
                />
                <img
                    className='langs'
                    height="65"
                    width="65"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
                    alt="Git"
                />
                <img
                    className='langs'
                    height="65"
                    width="65"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="Typescript"
                />
                <img
                    className='langs'
                    height="65"
                    width="65"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" 
                    alt="SASS" 
                />
                <img
                    className='langs'
                    height="65"
                    width="65"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" 
                    alt="Bootstrap" 
                />
                <img
                    className='langs'
                    height="55"
                    width="95"
                    src={NextIcon}
                    alt="NextJS"
                />
                <LanguagesExamples className='lang-reposit'>
                    <h3>Exemplos do que sei fazer em tais linguagens:</h3>
                    <p>
                        <strong>HTML: </strong>Criação de divs, navbar, footer, select/options e tabelas.
                    </p>

                    <p>
                        <strong>CSS: </strong>Estilização de cores, tamanhos, posições dos itens, animações, display flex e grid, e responsivo.
                    </p>

                    <p>
                        <strong>Javascript: </strong>Criação de variáveis, funções, loops, condições, classes, manipulação do DOM e assíncrono.
                    </p>

                    <p>
                        <strong>ReactJS: </strong>Utilização de JSX, componentes, props e hooks(useState, useEffect, useContext...)
                    </p>

                    <p>
                        <strong>Git: </strong>Commits, branchs, e deploy no Github.
                    </p>

                    <p>
                        <strong>Typescript: </strong>Tipos, enums e interfaces.
                    </p>

                    <p>
                        <strong>NextJS: </strong>Renderização do lado do servidor e cliente, paginação dinâmica e simples, codificação básica do framework.
                    </p>
                </LanguagesExamples>
            </LanguagesContainer>
        </>
    )
}

export default Languages