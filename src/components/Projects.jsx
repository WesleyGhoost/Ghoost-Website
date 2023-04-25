import ScrollReveal from 'scrollreveal';

import { useEffect } from 'react';

import { ProjectSoon, ProjectsContainer, ProjectsDescrip, ProjectsDetails, ProjectsImgs, ProjectsSubTitle, ProjectsTitle, ProjectsColumn, ProjectInfo } from '../Styles/ProjectsStyle';

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
import BattleCards from '../img/battle-cards.png'

function Projects() {
    const revealProjects = () => {
        ScrollReveal().reveal('.project-title', { reset: false, duration: 1000, delay: 150 })
        ScrollReveal().reveal('.project-subtitle', { reset: false, duration: 1000, delay: 150 })
        ScrollReveal().reveal('.projects', { reset: false, duration: 1000, delay: 250, origin: 'left', distance: '30px' })
        ScrollReveal().reveal('.project-details', { reset: false, duration: 1000, delay: 250, origin: 'left', distance: '30px' })
        ScrollReveal().reveal('.project-descrip', { reset: false, duration: 1000 })
    }

    useEffect(() => {
        revealProjects()
    })

    return (
        <>
            <ProjectsTitle className='project-title' id='projects'>Principais Projetos</ProjectsTitle>
            <ProjectsSubTitle className='project-subtitle'>Esses são os que considero como meus principais projetos, pois sinto que foi principalmente com estes que mais aprendi. Outros projetos podem ser acessados no meu <a href="https://github.com/WesleyGhoost">Github</a></ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>Os projetos estão demarcados com estrelas, onde as mesmas representam certos aspectos.</ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'><img src={GoldStar} alt="estrela dourada" />= Projeto 100% feito por mim.</ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'><img src={RedStar} alt="estrela vermelha" />= Melhor projeto.</ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'><img src={IceStar} alt="estrela de gelo" />= Melhor estrutura e separação de código.</ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'><img src={BlueStar} alt="estrela azul" />= Projeto que não é meu, porém, possui diferenciações feitas por mim.</ProjectsSubTitle>
            <ProjectsContainer>
                <ProjectsColumn>
                    <ProjectInfo>
                        <a className='projects' href="https://playflix-six.vercel.app/"><ProjectsImgs height="200" width="380" src={Playflix} alt="Playflix" /></a>
                        <ProjectsDetails className='project-details'>
                            <summary>PlayFlix</summary>
                            <ProjectsDescrip className='project-descrip'>
                                Serviço de games ao estilo Netflix. Projeto focado no uso de ReactJS, com a utilização de React-Router-Dom para criar diversas rotas, e React-Modal para gerar modais a partir de interações. Com responsivo para todos os aparelhos.
                            </ProjectsDescrip>
                            <ProjectsDescrip className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/PlayFlix">playflix</a>
                            </ProjectsDescrip>
                        </ProjectsDetails>
                    </ProjectInfo>

                    <ProjectInfo>
                        <a className='projects' href="https://wesleyghoost.github.io/Relaxing-Form/"><ProjectsImgs height="200" width="380" src={RelaxingForm} alt="Relaxing Form" /></a>
                        <ProjectsDetails className='project-details'>
                            <summary>Relaxing Form</summary>
                            <ProjectsDescrip className='project-descrip'>
                                Formulário com músicas relaxantes (lofi) para o usuário preencher o mesmo no seu próprio tempo. Utilizei Glider.js para ocorrer a transição do formulário de etapa em etapa, Bulma.CSS para o container geral do site, Animate.css para abertura no primeiro card e EmailJS para envio das respostas do usuário para o email do mesmo. Responsivo para Desktop e aparelhos com telas entre 600 e 758 pixels.
                            </ProjectsDescrip>
                            <ProjectsDescrip className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Relaxing-Form">relaxing-form</a>
                            </ProjectsDescrip>
                        </ProjectsDetails>
                    </ProjectInfo>

                    <ProjectInfo>
                        <a className="projects" href="https://github-finder-weld-theta.vercel.app/"><ProjectsImgs height="200" width="380" src={GithubFinder} alt="Github Finder" /></a>
                        <ProjectsDetails className='project-details'>
                            <summary>Github Finder</summary>
                            <ProjectsDescrip className='project-descrip'>
                                Projeto realizado com base no conteúdo do desenvolvedor <em>Matheus Battisti</em>. Ele se trata de um buscador de usuários do Github, Com foco na utilização de ReactJs + Typescript e chamada de API, especifícamente a API do Github. Estilização realizada com o uso de modules.css. <strong>Diferenciação:</strong> Componente de loading e requisição da bio do usuário buscado.
                            </ProjectsDescrip>
                            <ProjectsDescrip className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Github-Finder">github-finder</a>
                            </ProjectsDescrip>
                        </ProjectsDetails>
                    </ProjectInfo>

                    <ProjectInfo>
                        <a className='projects' href="https://codepen.io/_Ghoost_/pen/PoOMXpr"><ProjectsImgs height="200" width="380" src={TopMovies} alt="Top 5 Movies" /></a>
                        <ProjectsDetails className='project-details'>
                            <summary>Top 5 Filmes</summary>
                            <ProjectsDescrip className='project-descrip'>
                                Projeto realizado em uma imersão dev da <em>Alura</em>. Um projeto para listar nossos filmes favoritos. Ele utiliza Javascript para a inserção das imagens. <strong>Diferenciação:</strong> Utilizei do que havia aprendido na época para procurar e acrescentar os meus filmes favoritos, fazendo minha própria lista.
                            </ProjectsDescrip>
                            <ProjectsDescrip className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Meu-Top-5-Filmes">top-filmes</a>
                            </ProjectsDescrip>
                        </ProjectsDetails>
                    </ProjectInfo>
                </ProjectsColumn>

                <ProjectsColumn>
                    <ProjectInfo>
                        <a className='projects' href="https://wesleyghoost.github.io/Trilhas-Sonoras-Classicas-de-Games/"><ProjectsImgs height="200" width="380" src={ClassicTracks} alt="Landing Page" /></a>
                        <ProjectsDetails className='project-details'>
                            <summary>Trilhas Sonoras de Games</summary>
                            <ProjectsDescrip className='project-descrip'>
                                Mais um projeto voltado ao mundo de games. Esse projeto tem foco na utilização da tag audio do html, junto com informações precisas sobre o conteúdo, e apresenta responsividade para desktop e aparelhos com tela entre 500 e 600 pixels.
                            </ProjectsDescrip>
                            <ProjectsDescrip className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Trilhas-Sonoras-Classicas-de-Games">trilhas-de-games</a>
                            </ProjectsDescrip>
                        </ProjectsDetails>
                    </ProjectInfo>

                    <ProjectInfo>
                        <a className='projects' href="https://future-corp.vercel.app/"><ProjectsImgs height="200" width="380" src={FutureCorp} alt="Future Corp" /></a>
                        <ProjectsDetails className='project-details'>
                            <summary>Future Corp</summary>
                            <ProjectsDescrip className='project-descrip'>
                                Landing page para uma empresa de tecnologia fictícia, onde a mesma contém projetos com tecnologias super avançadas. Projeto realizado com ReactJS, utilizando styled-components para estilização, e react-router-dom para alternância das páginas. Responsivo para todos os dispositivos.
                            </ProjectsDescrip>
                            <ProjectsDescrip className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Future-Corp">future-corp</a>
                            </ProjectsDescrip>
                        </ProjectsDetails>
                    </ProjectInfo>

                    <ProjectInfo>
                        <a className='projects' href="https://wesleyghoost.github.io/Jumper-Mario/"><ProjectsImgs height="200" width="380" src={JumperMario} alt="Jumper Mario" /></a>
                        <ProjectsDetails className='project-details'>
                            <summary>Jumper Mario</summary>
                            <ProjectsDescrip className='project-descrip'>
                                Fiz este projeto me baseando no vídeo do <em>Manual do Dev</em>. Este projeto trás uma projeção bem parecida do que seria o sistema de pulo do personagem Mario em seus jogos. Você utiliza qualquer botão para pular sobre os canos, e quando você encosta em um deles, fim de jogo. <strong>Diferenciação:</strong> Um container de referenciação ao Game Over aparece, e é possível reiniciar o jogo a partir do mesmo.
                            </ProjectsDescrip>
                            <ProjectsDescrip className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Jumper-Mario">jumper-mario</a>
                            </ProjectsDescrip>
                        </ProjectsDetails>
                    </ProjectInfo>

                    <ProjectInfo>
                        <ProjectsImgs className="projects" id='project-soon' height="200" width="380" src={BattleCards} alt="Battle Cards" />
                        <ProjectSoon className='project-details'>Em breve...</ProjectSoon>
                    </ProjectInfo>
                </ProjectsColumn>
            </ProjectsContainer>
        </>
    )
}

export default Projects