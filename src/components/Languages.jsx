import ScrollReveal from 'scrollreveal'

import { useEffect } from "react";

import { LanguagesContainer, LanguagesTitle, LanguagesExamples, LanguagesExamplesTitle, LanguagesExamplesLang, LanguagesExamplesDescrips } from "../Styles/LanguagesStyle";

function Languages() {
    const revealLanguages = () => {
        ScrollReveal().reveal('.lang-title', {reset: false, duration: 1500, delay: 150})
        ScrollReveal().reveal('.langs', {reset: false, duration: 1500, delay: 150})
        ScrollReveal().reveal('.lang-reposit', {reset: false, duration: 1500, delay: 400, origin: 'left', distance: '30px'})
    }

    useEffect(() => {
        revealLanguages()
    })

    return (
        <>
            <LanguagesTitle className='lang-title' id='languages'>Linguagens utilizadas</LanguagesTitle>
            <LanguagesContainer>
                <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" />
                <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Typescript" />
                <LanguagesExamples className='lang-reposit'>
                    <LanguagesExamplesTitle>Exemplos do que sei fazer em tais linguagens:</LanguagesExamplesTitle>
                    <LanguagesExamplesDescrips>
                        <LanguagesExamplesLang>HTML: </LanguagesExamplesLang>Criação de divs, navbar, footer, select/options e tabelas.
                    </LanguagesExamplesDescrips>
                    <LanguagesExamplesDescrips>
                        <LanguagesExamplesLang>CSS: </LanguagesExamplesLang>Estilização de cores, tamanhos, posições dos itens, animações, display flex e grid, e responsivo. 
                    </LanguagesExamplesDescrips>
                    <LanguagesExamplesDescrips>
                        <LanguagesExamplesLang>Javascript: </LanguagesExamplesLang>Criação de variáveis, funções, loops, condições, classes, manipulação do DOM e assíncrono.
                    </LanguagesExamplesDescrips>
                    <LanguagesExamplesDescrips>
                        <LanguagesExamplesLang>ReactJS: </LanguagesExamplesLang>Utilização de JSX, imports, props e hooks(useState, useEffect, useContext...)
                    </LanguagesExamplesDescrips>
                    <LanguagesExamplesDescrips>
                        <LanguagesExamplesLang>Git: </LanguagesExamplesLang>Commits, branchs, e deploy no Github.
                    </LanguagesExamplesDescrips>
                    <LanguagesExamplesDescrips>
                        <LanguagesExamplesLang>Typescript: </LanguagesExamplesLang>Tipos, enums e interfaces.
                    </LanguagesExamplesDescrips>
                </LanguagesExamples>
            </LanguagesContainer>
        </>
    )
}

export default Languages