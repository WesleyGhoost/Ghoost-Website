import ScrollReveal from 'scrollreveal';
import { useEffect, useState, useRef } from 'react';
import { ProjectsContainer, ProjectsSubTitle, ProjectsTitle, ProjectsColumn, ProjectInfo } from '../Styles/ProjectsStyle';

import GoldStar from '../img/gold star.png'
import BlueStar from '../img/blue star.png'
import RedStar from '../img/red star.png'
import IceStar from '../img/especial star.png'

import Playflix from '../img/playflix.png'
import ClassicTracks from '../img/trilhas-classicas.png'
import FutureCorp from '../img/future-corp.png'
import RelaxingForm from '../img/relaxing-form.png'
import JumperMario from '../img/jumper-mario.png'
import TopMovies from '../img/top-5-filmes.png'
import GithubFinder from '../img/github-finder.png'
import TalkingWithChars from '../img/talking-with-chars.png'
import ShoppingCart from '../img/carrinho-de-compras.png'
import RE4LP from '../img/re4-lp.png'
import WeatherApp from '../img/weather-app.png'

function Projects() {
    const projectRefs = useRef([]);
    const [showMessages, setShowMessages] = useState({});
    const [hoverStates, setHoverStates] = useState({});
    const [hoverEnabled, setHoverEnabled] = useState({});
    const [changePositionMessage, setChangePositionMessage] = useState('static');

    const projects = [
        { id: 1, minScreenWidthForCheckResponsive: [''], title: 'PlayFlix', img: Playflix, stars: [GoldStar, RedStar], link: 'https://playflix-six.vercel.app/', description: 'Serviço de games ao estilo Netflix. Projeto focado no uso de ReactJS, com a utilização de React-Router-Dom para criar diversas rotas, e React-Modal para gerar modais a partir de interações. Com responsivo para todos os aparelhos.', date: 'março de 2023', repo: 'https://github.com/WesleyGhoost/PlayFlix', repo_title: 'playflix' },
        { id: 2, minScreenWidthForCheckResponsive: ['320', '481', '769'], title: 'Trilhas Sonoras de Games', img: ClassicTracks, stars: [GoldStar], link: 'https://wesleyghoost.github.io/Trilhas-Sonoras-Classicas-de-Games/', description: 'Mais um projeto voltado ao mundo de games. Esse projeto tem foco na utilização da tag audio do html, junto com informações precisas sobre o conteúdo, e apresenta responsividade para desktop e aparelhos com tela entre 500 e 600 pixels.', date: 'janeiro de 2023', repo: 'https://github.com/WesleyGhoost/Trilhas-Sonoras-Classicas-de-Games', repo_title: 'trilhas-sonoras-de-games' },
        { id: 3, minScreenWidthForCheckResponsive: [''], title: 'Talking With Chars', img: TalkingWithChars, stars: [GoldStar, IceStar], link: 'https://talking-with-chars.vercel.app/', description: 'Um site de chat. Este é um projeto feito com o intuito de colocar meus conhecimentos de JavaScript em prática, onde o foco é o JavaScript.', date: 'abril de 2023', repo: 'https://github.com/WesleyGhoost/Talking-With-Chars', repo_title: 'talking-with-chars' },
        { id: 4, minScreenWidthForCheckResponsive: [''], title: 'Github Finder', img: GithubFinder, stars: [BlueStar], link: 'https://github-finder-weld-theta.vercel.app/', description: 'Projeto realizado com base no conteúdo do desenvolvedor Matheus Battisti. Ele se trata de um buscador de usuários do Github, Com foco na utilização de ReactJs + Typescript e chamada de API, especifícamente a API do Github. Estilização realizada com o uso de modules.css.', diff: 'Componente de loading e requisição da bio do usuário buscado.', date: 'abril de 2023', repo: 'https://github.com/WesleyGhoost/Github-Finder', repo_title: 'github-finder' },
        { id: 5, minScreenWidthForCheckResponsive: ['320', '481'], title: 'RE4 - LP', img: RE4LP, stars: [GoldStar], link: 'https://resident-evil-4-lp.netlify.app/', description: 'Uma releitura do site oficial do game Resident Evil 4, produzido pela Capcom. Neste projeto utilizei o SCSS (pré-processador CSS) pela primeira vez. Juntamente com Bootstrap em elementos específicos da página (ex: sliders). E juntamente com JS cheguei ao ponto que eu queria da minha releitura.', date: 'abril de 2024', repo: 'https://github.com/WesleyGhoost/RE4-LP', repo_title: 're4-lp' },
        { id: 6, minScreenWidthForCheckResponsive: [''], title: 'Carrinho de Compras', img: ShoppingCart, stars: [BlueStar], link: 'https://carrinho-de-compras-ashen.vercel.app/', description: 'Projeto realizado com base no conteúdo do desenvolvedor Manual do Dev. Este projeto consiste em um carrinho de compras utilizando a API do Mercado Livre, onde o mesmo foi originalmente realizado utilizando Javascript, ReactJS e CSS.', diff: 'utilização do Typescript (ao invés do JS), filtragem de busca, páginas únicas para cada produto baseado em seus IDs, e localStorage para salvar permanentemente os produtos no carrinho caso o usuário reinicie ou feche o browser.', date: 'agosto de 2023', repo: 'https://github.com/WesleyGhoost/Carrinho-de-Compras', repo_title: 'carrinho-de-compras' },
        { id: 7, minScreenWidthForCheckResponsive: [''], title: 'Weather App', img: WeatherApp, stars: [BlueStar], link: 'https://weatherapp-ghoost.netlify.app/', description: 'Projeto realizado com base no conteúdo do desenvolvedor Matheus Battisti. O projeto retorna a climatização de uma cidade ou país digitado pelo usuário. Temos 3 APIs num todo nesse projeto, a API da WeatherMap que retorna informações de temperatura, força do vento, umidade, entre outros, a FlagsAPI que retorna ícones de países diversos, e a API da Unsplash que nesse projeto retorna as imagens das paisagens dos países. Projeto construido com Javascript, CSS e HTML.', diff: 'Utilização das APIs da Unsplash e FlagsAPI, elemento de loader.', date: 'maio de 2024', repo: 'https://github.com/WesleyGhoost/Weather-App', repo_title: 'weather-app' },
        { id: 8, minScreenWidthForCheckResponsive: [''], title: 'Future Corp', img: FutureCorp, stars: [GoldStar], link: 'https://future-corp.vercel.app/', description: 'Landing page para uma empresa de tecnologia fictícia, onde a mesma contém projetos com tecnologias super avançadas. Projeto realizado com ReactJS, utilizando styled-components para estilização, e react-router-dom para alternância das páginas. Responsivo para todos os dispositivos.', date: 'março de 2023', repo: 'https://github.com/WesleyGhoost/Future-Corp', repo_title: 'future-corp' },
        { id: 9, minScreenWidthForCheckResponsive: [''], title: 'Top 5 Filmes', img: TopMovies, stars: [BlueStar], link: 'https://codepen.io/_Ghoost_/pen/PoOMXpr', description: 'Projeto realizado em uma imersão dev da Alura. Um projeto para listar nossos filmes favoritos. Ele utiliza Javascript para a inserção das imagens.', diff: 'Utilizei do que havia aprendido na época para procurar e acrescentar os meus filmes favoritos, fazendo minha própria lista.', date: 'fevereiro de 2022', repo: 'https://github.com/WesleyGhoost/Meu-Top-5-Filmes', repo_title: 'top-5-filmes' },
        { id: 10, minScreenWidthForCheckResponsive: ['320', '481', '769'], title: 'Relaxing Form', img: RelaxingForm, stars: [GoldStar], link: 'https://wesleyghoost.github.io/Relaxing-Form/', description: 'Formulário com músicas relaxantes (lofi) para o usuário preencher o mesmo no seu próprio tempo. Utilizei Glider.js para ocorrer a transição do formulário de etapa em etapa, Bulma.CSS para o container geral do site, Animate.css para abertura no primeiro card e EmailJS para envio das respostas do usuário para o email do mesmo.', date: 'janeiro de 2023', repo: 'https://github.com/WesleyGhoost/Relaxing-Form', repo_title: 'relaxing-form' },
        { id: 11, minScreenWidthForCheckResponsive: ['320', '481', '769'], title: 'Jumper Mario', img: JumperMario, stars: [BlueStar], link: 'https://wesleyghoost.github.io/Jumper-Mario/', description: 'Fiz este projeto me baseando no vídeo do Manual do Dev. Este projeto trás uma projeção bem parecida do que seria o sistema de pulo do personagem Mario em seus jogos. Você utiliza qualquer botão para pular sobre os canos, e quando você encosta em um deles, fim de jogo.', diff: 'Um container de referenciação ao Game Over aparece, e é possível reiniciar o jogo a partir do mesmo.', date: 'novembro de 2022', repo: 'https://github.com/WesleyGhoost/Jumper-Mario', repo_title: 'jumper-mario' }
    ];

    const column1Projects = projects.filter((_, index) => index % 2 === 0)
    const column2Projects = projects.filter((_, index) => index % 2 !== 0)

    const handleMouseEnter = (id) => {
        if (window.innerWidth > 768) {
            setHoverStates(prev => ({ ...prev, [id]: true }));
        }
    }

    const handleMouseLeave = (id) => {
        if (window.innerWidth > 768) {
            setHoverStates(prev => ({ ...prev, [id]: false }));
        }
    }

    const checkMessageForResponsive = (minScreenWidthForCheckResponsive, projectId) => {
        if (window.innerWidth >= 320 && window.innerWidth <= 480 && minScreenWidthForCheckResponsive.includes('320')) {
            setChangePositionMessage('absolute');
            setHoverEnabled(prev => ({ ...prev, [projectId]: false }))
            return 'block'
        } else if (window.innerWidth >= 481 && window.innerWidth <= 768 && minScreenWidthForCheckResponsive.includes('481')) {
            setChangePositionMessage('absolute');
            setHoverEnabled(prev => ({ ...prev, [projectId]: false }))
            return 'block'
        } else if (window.innerWidth >= 769 && window.innerWidth <= 1023 && minScreenWidthForCheckResponsive.includes('769')) {
            setChangePositionMessage('absolute');
            setHoverEnabled(prev => ({ ...prev, [projectId]: false }))
            return 'block'
        }
        setHoverEnabled(prev => ({ ...prev, [projectId]: true }))
        return 'none'
    }

    const removeLink = () => {
        this.addEventListener('click', (e) => {
            e.preventDefault()
        })
    }

    const revealProjects = () => {
        ScrollReveal().reveal('.project-title', { reset: false, duration: 1000, delay: 150 });
        ScrollReveal().reveal('.project-subtitle', { reset: false, duration: 1000, delay: 150 });
        ScrollReveal().reveal('.projects', { reset: false, duration: 1000, delay: 250, origin: 'left', distance: '30px' });
        ScrollReveal().reveal('.project-star', { reset: false, duration: 1000, delay: 250, origin: 'left', distance: '30px' });
        ScrollReveal().reveal('.project-details', { reset: false, duration: 1000, delay: 250, origin: 'left', distance: '30px' });
        ScrollReveal().reveal('.project-descrip', { reset: false, duration: 1000 });
    }

    useEffect(() => {
        revealProjects();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setShowMessages(projects.reduce((acc, project) => ({
                ...acc,
                [project.id]: checkMessageForResponsive(project.minScreenWidthForCheckResponsive, project.id)
            }), {}));
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <ProjectsTitle className='project-title' id='projects'>Principais Projetos</ProjectsTitle>
            <ProjectsSubTitle className='project-subtitle'>
                Esses são os que considero como meus principais projetos, pois sinto que foi principalmente com estes que mais aprendi. Outros projetos podem ser acessados no meu <a href="https://github.com/WesleyGhoost">Github</a>
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                Os projetos estão demarcados com estrelas, onde as mesmas representam certos aspectos.
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img src={GoldStar} alt="estrela dourada" /> = Projeto 100% feito por mim.
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img src={RedStar} alt="estrela vermelha" /> = Melhor projeto (para mim).
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img src={IceStar} alt="estrela de gelo" /> = Melhor estrutura e separação de código.
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img src={BlueStar} alt="estrela azul" /> = Projeto que não é meu, porém, possui diferenciações feitas por mim.
            </ProjectsSubTitle>
            <ProjectsContainer>
                <ProjectsColumn>
                    {column1Projects.map(project => (
                        <ProjectInfo key={project.id}>
                            <div>
                                {project.stars.map((star, index) => (
                                    <img key={index} className='project-star' src={star} alt="estrela" />
                                ))}
                            </div>
                            <a
                                ref={el => projectRefs.current[project.id] = el}
                                className='projects'
                                href={hoverEnabled[project.id] === false ? () => removeLink : project.link}
                            >
                                <img
                                    onLoad={() => setShowMessages(prev => ({
                                        ...prev,
                                        [project.id]: checkMessageForResponsive(project.minScreenWidthForCheckResponsive, project.id)
                                    }))}
                                    style={window.innerWidth < 769 ? (showMessages[project.id] === 'block' ? { opacity: '25%' } : { opacity: '100%' }) : (hoverStates[project.id] ? { opacity: '100%' } : { opacity: '25%' })}
                                    onMouseEnter={hoverEnabled[project.id] !== false ? () => handleMouseEnter(project.id) : undefined}
                                    onMouseLeave={hoverEnabled[project.id] !== false ? () => handleMouseLeave(project.id) : undefined}
                                    src={project.img}
                                    alt={project.title}
                                />
                                <h3 style={{ display: showMessages[project.id], position: changePositionMessage }}>Não disponível para este dispositivo</h3>
                            </a>
                            <details className='project-details'>
                                <summary>{project.title}</summary>
                                <p className='project-descrip'>
                                    <strong>Descrição:</strong> {project.description}
                                </p>
                                {project.diff ?
                                    <p className='project-descrip'>
                                        <strong>Diferenciação:</strong> {project.diff}
                                    </p> : ''
                                }
                                <p className='project-descrip'>
                                    <strong>Realizado em:</strong> {project.date}
                                </p>
                                <p className='project-descrip'>
                                    <strong>Repositório:</strong> <a href={project.repo}>{project.repo_title}</a>
                                </p>
                            </details>
                        </ProjectInfo>
                    ))}
                </ProjectsColumn>
                <ProjectsColumn>
                    {column2Projects.map(project => (
                        <ProjectInfo key={project.id}>
                            <div>
                                {project.stars.map((star, index) => (
                                    <img key={index} className='project-star' src={star} alt="estrela" />
                                ))}
                            </div>
                            <a
                                ref={el => projectRefs.current[project.id] = el}
                                className='projects'
                                href={hoverEnabled[project.id] === false ? () => removeLink : project.link}
                            >
                                <img
                                    onLoad={() => setShowMessages(prev => ({
                                        ...prev,
                                        [project.id]: checkMessageForResponsive(project.minScreenWidthForCheckResponsive, project.id)
                                    }))}
                                    style={window.innerWidth < 769 ? (showMessages[project.id] === 'block' ? { opacity: '25%' } : { opacity: '100%' }) : (hoverStates[project.id] ? {opacity: '100%'} : { opacity: '25%' })}
                                    onMouseEnter={hoverEnabled[project.id] !== false ? () => handleMouseEnter(project.id) : undefined}
                                    onMouseLeave={hoverEnabled[project.id] !== false ? () => handleMouseLeave(project.id) : undefined}
                                    src={project.img}
                                    alt={project.title}
                                />
                                <h3 style={{ display: showMessages[project.id], position: changePositionMessage }}>Não disponível para este dispositivo</h3>
                            </a>
                            <details className='project-details'>
                                <summary>{project.title}</summary>
                                <p className='project-descrip'>
                                    <strong>Descrição:</strong> {project.description}
                                </p>
                                {project.diff ?
                                    <p className='project-descrip'>
                                        <strong>Diferenciação:</strong> {project.diff}
                                    </p> : ''
                                }
                                <p className='project-descrip'>
                                    <strong>Realizado em:</strong> {project.date}
                                </p>
                                <p className='project-descrip'>
                                    <strong>Repositório:</strong> <a href={project.repo}>{project.repo_title}</a>
                                </p>
                            </details>
                        </ProjectInfo>
                    ))}
                </ProjectsColumn>
            </ProjectsContainer>
        </>
    );
}

export default Projects;