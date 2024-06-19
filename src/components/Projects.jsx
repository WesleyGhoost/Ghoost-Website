import ScrollReveal from 'scrollreveal';
import { useEffect, useState, useRef } from 'react';
import { ProjectsContainer, ProjectsSubTitle, ProjectsTitle, ProjectsColumn, ProjectInfo } from '../Styles/ProjectsStyle';
import { useSelector } from 'react-redux';

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
    const language = useSelector((state) => state.language)

    const projectRefs = useRef([]);
    const [showMessages, setShowMessages] = useState({});
    const [hoverStates, setHoverStates] = useState({});
    const [hoverEnabled, setHoverEnabled] = useState({});
    const [changePositionMessage, setChangePositionMessage] = useState('static');

    const projects = [
        { 
            id: 1, 
            minScreenWidthForCheckResponsive: [''], 
            title: 'PlayFlix', 
            img: Playflix, 
            stars: [GoldStar, RedStar], 
            link: 'https://playflix-six.vercel.app/', 
            description: language === 'pt' ? 'Serviço de games ao estilo Netflix. Projeto focado no uso de ReactJS, com a utilização de React-Router-Dom para criar diversas rotas, e React-Modal para gerar modais a partir de interações. Com responsivo para todos os aparelhos.' : 'Netflix-style gaming service. Project focused on using ReactJS, with the utilization of React-Router-Dom for create various rotes, and React-Modal for generate modals from interactions. It is responsive for all devices.',
            date: language === 'pt' ? 'março de 2023' : 'march 2023', 
            repo: 'https://github.com/WesleyGhoost/PlayFlix', 
            repo_title: 'playflix' 
        },
        { 
            id: 2, 
            minScreenWidthForCheckResponsive: ['320', '481', '769'], 
            title: language === 'pt' ? 'Trilhas Sonoras de Games' : 'Videogame Soundtracks', 
            img: ClassicTracks, 
            stars: [GoldStar], 
            link: 'https://wesleyghoost.github.io/Trilhas-Sonoras-Classicas-de-Games/', 
            description: language === 'pt' ? 'Mais um projeto voltado ao mundo de games. Esse projeto tem foco na utilização da tag audio do html, junto com informações precisas sobre o conteúdo' : 'More one project focused on the world of games. This project have focuses on the utilization of the HTML audio tag, along with accurate informations about the content', 
            date: language === 'pt' ? 'janeiro de 2023' : 'january 2023', 
            repo: 'https://github.com/WesleyGhoost/Trilhas-Sonoras-Classicas-de-Games', 
            repo_title: language === 'pt' ? 'trilhas-sonoras-de-games' : 'games-soundtrack' 
        },
        { 
            id: 3, 
            minScreenWidthForCheckResponsive: [''], 
            title: 'Talking With Chars', 
            img: TalkingWithChars, 
            stars: [GoldStar, IceStar], 
            link: 'https://talking-with-chars.vercel.app/', 
            description: language === 'pt' ? 'Um chat com personagens fictícios e não fictícios. As ferramentas e linguagens utilizadas foram: NextJS, Typescript, Styled-Components (estilização), e a API do ChatGPT para o sistema de conversa. As artes dos personagens foram feitas pela IA generativa de imagens BlueWillow.' : 'A chat with fictional and non-fictional characters. The tools and languages used were: NextJS, Typescript, Styled-Components (styling), and the ChatGPT API for the conversation system. The character artwork was created by BlueWillow, a generative image AI.', 
            date: language === 'pt' ? 'abril de 2023' : 'april 2023', 
            repo: 'https://github.com/WesleyGhoost/Talking-With-Chars', 
            repo_title: 'talking-with-chars' 
        },
        {   
            id: 4,
            minScreenWidthForCheckResponsive: [''], 
            title: 'Github Finder', 
            img: GithubFinder, 
            stars: [BlueStar], 
            link: 'https://github-finder-weld-theta.vercel.app/', 
            description: language === 'pt' ? 'Projeto realizado com base no conteúdo do desenvolvedor Matheus Battisti. Ele se trata de um buscador de usuários do Github, com foco na utilização de ReactJs + Typescript e chamada de API, especifícamente a API do Github. Estilização realizada com o uso de modules.css.' : 'Project was developed based on the content by the developer Matheus Battisti. It is a Github user searcher, focused on utilizing ReactJs + Typescript and API calls, specifically the Github API. Styling was done with the use of modules.css.', 
            diff: language === 'pt' ? 'Componente de loading e requisição da bio do usuário buscado.' : 'Loading component and request for the searched user´s bio', 
            date: language === 'pt' ? 'abril de 2023' : 'april 2023', 
            repo: 'https://github.com/WesleyGhoost/Github-Finder', 
            repo_title: 'github-finder' 
        },
        { 
            id: 5, 
            minScreenWidthForCheckResponsive: ['320', '481'], 
            title: 'RE4 - LP', 
            img: RE4LP, 
            stars: [GoldStar], 
            link: 'https://resident-evil-4-lp.netlify.app/', 
            description: language === 'pt' ? 'Uma releitura do site oficial do game Resident Evil 4, produzido pela Capcom. Neste projeto utilizei o SCSS (pré-processador CSS) pela primeira vez. Juntamente com Bootstrap em elementos específicos da página (ex: sliders). E juntamente com JS cheguei ao ponto que eu queria da minha releitura.' : 'A rereading of the Resident Evil 4 game official website, produced by Capcom. In this project I used SCSS (a CSS pre-processor) for the first time. Along with Bootstrap in specific elements of the page (ex: sliders). And with the addition of JS I arrived to the point that I wanted of my rereading.', 
            date: language === 'pt' ? 'abril de 2024' : 'april 2024', 
            repo: 'https://github.com/WesleyGhoost/RE4-LP', 
            repo_title: 're4-lp'
        },
        { 
            id: 6, 
            minScreenWidthForCheckResponsive: [''], 
            title: language === 'pt' ? 'Carrinho de Compras' : 'Shopping Cart', 
            img: ShoppingCart, 
            stars: [BlueStar], 
            link: 'https://carrinho-de-compras-ashen.vercel.app/', 
            description: language === 'pt' ? 'Projeto realizado com base no conteúdo do desenvolvedor Manual do Dev. Este projeto consiste em um carrinho de compras utilizando a API do Mercado Livre, onde o mesmo foi originalmente realizado utilizando Javascript, ReactJS e CSS.' : 'Project was developed based on the content by the developer Manual do Dev. This project consists of a shopping cart using the Mercado Livre API, which was originally developed utilizing Javascript, ReactJS e CSS.', 
            diff: language === 'pt' ? 'utilização do Typescript (ao invés do JS), filtragem de busca, páginas únicas para cada produto baseado em seus IDs, e localStorage para salvar permanentemente os produtos no carrinho caso o usuário reinicie ou feche o browser.' : 'Utilization of Typescript (instead of JS), search filtration, single pages for each product basead in their IDs, and localStorage to save permanently the products in the cart if the user restarts or closes the browser.', 
            date: language === 'pt' ? 'agosto de 2023' : 'august 2023', 
            repo: 'https://github.com/WesleyGhoost/Carrinho-de-Compras', 
            repo_title: language === 'pt' ? 'carrinho-de-compras' : 'shopping-cart' 
        },
        { 
            id: 7, 
            minScreenWidthForCheckResponsive: [''], 
            title: 'Weather App', 
            img: WeatherApp, 
            stars: [BlueStar], 
            link: 'https://weatherapp-ghoost.netlify.app/', 
            description: language === 'pt' ? 'Projeto realizado com base no conteúdo do desenvolvedor Matheus Battisti. O projeto retorna a climatização de uma cidade ou país digitado pelo usuário. Temos 3 APIs num todo nesse projeto, a API da WeatherMap que retorna informações de temperatura, força do vento, umidade, entre outros; a FlagsAPI que retorna ícones de países diversos; e a API da Unsplash que nesse projeto retorna as imagens das paisagens dos países. Projeto construido com Javascript, CSS e HTML.' : 'Project realized based on the content of the developer Matheus Battisti. The project returns the weather conditions of a city or country entered by the user. We have 3 APIs in this project, the WeatherMap API, which returns informations of the temperature, wind strength, humidity, among others; the FlagsAPI, which returns icons of various countries; and the Unsplash API, which in this project returns the images of landscapes from various countries. Project built with Javascript, CSS e HTML.', 
            diff: language === 'pt' ? 'Utilização das APIs da Unsplash e FlagsAPI, elemento de loader.' : 'Utilization of the APIs of Unsplash and FlagsAPI, loader element.', 
            date: language === 'pt' ? 'maio de 2024' : 'may 2024', 
            repo: 'https://github.com/WesleyGhoost/Weather-App', 
            repo_title: 'weather-app' 
        },
        { 
            id: 8, 
            minScreenWidthForCheckResponsive: [''], 
            title: 'Future Corp', 
            img: FutureCorp, 
            stars: [GoldStar], 
            link: 'https://future-corp.vercel.app/', 
            description: language === 'pt' ? 'Landing page para uma empresa de tecnologia fictícia, onde a mesma contém projetos com tecnologias super avançadas. Projeto realizado com ReactJS, utilizando styled-components para estilização, e react-router-dom para alternância das páginas. Responsivo para todos os dispositivos.' : 'Landing page for a fictitious technology enterprise, which contains projects with super-advanced technologies. Project was developed with ReactJS, utilizing styled-components for styling, and react-router-dom for pages navigation. It is responsive for all devices.', 
            date: language === 'pt' ? 'março de 2023' : 'may 2023', 
            repo: 'https://github.com/WesleyGhoost/Future-Corp', 
            repo_title: 'future-corp' 
        },
        { 
            id: 9, 
            minScreenWidthForCheckResponsive: [''], 
            title: language === 'pt' ? 'Top 5 Filmes' : 'Top 5 Movies', 
            img: TopMovies, 
            stars: [BlueStar], 
            link: 'https://codepen.io/_Ghoost_/pen/PoOMXpr', 
            description: language === 'pt' ? 'Projeto realizado em uma imersão dev da Alura. Um projeto para listar nossos filmes favoritos. Ele utiliza Javascript para a inserção das imagens.' : 'Project was developed in a imersão dev of Alura. A project to list our favorite movies. It uses Javascript for the images insertation.', 
            diff: language === 'pt' ? 'Utilizei do que havia aprendido na época para procurar e acrescentar os meus filmes favoritos, fazendo minha própria lista.' : 'I used of what had learned in the season to search for and add my favorite movies, making my own list.', 
            date: language === 'pt' ? 'fevereiro de 2022' : 'february 2022', 
            repo: 'https://github.com/WesleyGhoost/Meu-Top-5-Filmes', 
            repo_title: language === 'pt' ? 'top-5-filmes' : 'top-5-movies' 
        },
        { 
            id: 10, 
            minScreenWidthForCheckResponsive: ['320', '481', '769'], 
            title: 'Relaxing Form', 
            img: RelaxingForm, 
            stars: [GoldStar], 
            link: 'https://wesleyghoost.github.io/Relaxing-Form/', 
            description: language === 'pt' ? 'Formulário com músicas relaxantes (lofi) para o usuário preencher o mesmo no seu próprio tempo. Utilizei Glider.js para ocorrer a transição do formulário de etapa em etapa, Bulma.CSS para o container geral do site, Animate.css para abertura no primeiro card e EmailJS para envio das respostas do usuário para o email do mesmo.' : 'Form with relaxing music (lofi) for the user to fill it in at their own time. I used Glider.js to handle the transition of the form step by step, Bulma.CSS for the general container of the site, Animate.css to open the first card and EmailJS to send the user´s answers to their email.', 
            date: language === 'pt' ? 'janeiro de 2023' : 'january 2023', 
            repo: 'https://github.com/WesleyGhoost/Relaxing-Form', 
            repo_title: 'relaxing-form' 
        },
        { 
            id: 11, 
            minScreenWidthForCheckResponsive: ['320', '481', '769'], 
            title: 'Jumper Mario', 
            img: JumperMario, 
            stars: [BlueStar], 
            link: 'https://wesleyghoost.github.io/Jumper-Mario/', 
            description: language === 'pt' ? 'Fiz este projeto me baseando no vídeo do Manual do Dev. Este projeto trás uma projeção bem parecida do que seria o sistema de pulo do personagem Mario em seus jogos. Você utiliza qualquer botão para pular sobre os canos, e quando você encosta em um deles, fim de jogo.' : 'I made this project based on the vídeo from Manual do Dev. This project brings a good-looking projection of what the jump system of the character Mario would be like in his games. You use any button to jump on the pipes, and when you touch in one of them, game over.', 
            diff: language === 'pt' ? 'Um container de referenciação ao Game Over aparece, e é possível reiniciar o jogo a partir do mesmo.' : 'A referencing container for the Game Over appears, and it is possible restart the game from it.', 
            date: language === 'pt' ? 'novembro de 2022' : 'november 2022', 
            repo: 'https://github.com/WesleyGhoost/Jumper-Mario', 
            repo_title: 'jumper-mario' 
        }
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
            <ProjectsTitle className='project-title' id='projects'>
                {language === 'pt' ? 'Principais Projetos' : 'Main Projects'}
            </ProjectsTitle>
            {language === 'pt' ?
                <ProjectsSubTitle className='project-subtitle'>
                    Esses são os que considero como meus principais projetos, pois sinto que foi principalmente com estes que mais aprendi. Outros projetos podem ser acessados no meu <a href="https://github.com/WesleyGhoost">Github</a>
                </ProjectsSubTitle> :
                <ProjectsSubTitle className='project-subtitle'>
                    These are the ones I consider to be my main projects, because i feel that was chiefly with these that I learned the most. others projects can be accessed on my <a href="https://github.com/WesleyGhoost">Github</a>
                </ProjectsSubTitle>
            }
            <ProjectsSubTitle className='project-subtitle'>
                {language === 'pt' ? 
                'Os projetos estão demarcados com estrelas, onde as mesmas representam certos aspectos.' : 
                'The projects are demarcated with stars, which represent certain aspects.'}
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img src={GoldStar} alt="estrela dourada" />
                {language === 'pt' ? '= Projeto 100% feito por mim.' : '= Project 100% made by myself.'}
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img src={RedStar} alt="estrela vermelha" />
                {language === 'pt' ? '= Melhor projeto (para mim).' : '= Best project (for me)'}
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img src={IceStar} alt="estrela de gelo" />
                {language === 'pt' ? '= Melhor estrutura e separação de código.' : '= Best structure and separation of code'}
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img src={BlueStar} alt="estrela azul" /> 
                {language === 'pt' ? '= Projeto que não é meu, porém, possui diferenciações feitas por mim.' : '= Project that is not mine, however, has differentiations made by myself'}
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
                                    style={window.innerWidth < 769 ? 
                                        (showMessages[project.id] === 'block' ? { opacity: '25%' } : { opacity: '100%' }) : 
                                        (hoverStates[project.id] ? { opacity: '100%' } : { opacity: '25%' })}
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
                                    <strong>
                                        {language === 'pt' ? 'Linguagem: ' : 'Language: '}
                                    </strong> 
                                    {project.description}
                                </p>
                                {project.diff ?
                                    <p className='project-descrip'>
                                        <strong>
                                            {language === 'pt' ? 'Diferenciação: ' : 'Differentiation: '}
                                        </strong> 
                                        {project.diff}
                                    </p> : ''
                                }
                                <p className='project-descrip'>
                                    <strong>
                                        {language === 'pt' ? 'Realizado em: ' : 'Realized in: '}
                                    </strong> 
                                    {project.date}
                                </p>
                                <p className='project-descrip'>
                                    <strong>
                                        {language === 'pt' ? 'Repositório: ' : 'Repository: '}
                                    </strong> 
                                    <a href={project.repo}>{project.repo_title}</a>
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
                                    style={window.innerWidth < 769 ? 
                                        (showMessages[project.id] === 'block' ? { opacity: '25%' } : { opacity: '100%' }) : 
                                        (hoverStates[project.id] ? { opacity: '100%' } : { opacity: '25%' })}
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
                                    <strong>
                                        {language === 'pt' ? 'Linguagem: ' : 'Language: '}
                                    </strong> 
                                    {project.description}
                                </p>
                                {project.diff ?
                                    <p className='project-descrip'>
                                        <strong>
                                            {language === 'pt' ? 'Diferenciação: ' : 'Differentiation: '}
                                        </strong> 
                                        {project.diff}
                                    </p> : ''
                                }
                                <p className='project-descrip'>
                                    <strong>
                                        {language === 'pt' ? 'Realizado em: ' : 'Realized in: '}
                                    </strong> 
                                    {project.date}
                                </p>
                                <p className='project-descrip'>
                                    <strong>
                                        {language === 'pt' ? 'Repositório: ' : 'Repository: '}
                                    </strong> 
                                    <a href={project.repo}>{project.repo_title}</a>
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