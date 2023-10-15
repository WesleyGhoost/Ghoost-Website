import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
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

function Projects() {
    const revealProjects = () => {
        ScrollReveal().reveal(
            '.project-title', 
            { 
                reset: false,
                duration: 1000, 
                delay: 150 
            }
        )
        ScrollReveal().reveal(
            '.project-subtitle', 
            { 
                reset: false, 
                duration: 1000, 
                delay: 150 
            }
        )
        ScrollReveal().reveal(
            '.projects', 
            { 
                reset: false, 
                duration: 1000, 
                delay: 250, 
                origin: 'left', 
                distance: '30px' 
            }
        )
        ScrollReveal().reveal(
            '.project-star', 
            { 
                reset: false, 
                duration: 1000, 
                delay: 250, 
                origin: 'left', 
                distance: '30px' 
            }
        )
        ScrollReveal().reveal(
            '.project-details', 
            { 
                reset: false, 
                duration: 1000, 
                delay: 250, 
                origin: 'left', 
                distance: '30px' 
            }
        )
        ScrollReveal().reveal(
            '.project-descrip', 
            { 
                reset: false, 
                duration: 1000 
            }
        )
    }

    useEffect(() => {
        revealProjects()
    })

    return (
        <>
            <ProjectsTitle
                className='project-title'
                id='projects'
            >
                Principais Projetos
            </ProjectsTitle>
            <ProjectsSubTitle className='project-subtitle'>
                Esses são os que considero como meus principais projetos, pois sinto que foi principalmente com estes que mais aprendi. Outros projetos podem ser acessados no meu <a href="https://github.com/WesleyGhoost">Github</a>
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                Os projetos estão demarcados com estrelas, onde as mesmas representam certos aspectos.
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img
                    src={GoldStar}
                    alt="estrela dourada"
                />
                = Projeto 100% feito por mim.
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img
                    src={RedStar}
                    alt="estrela vermelha"
                />
                = Melhor projeto.
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img
                    src={IceStar}
                    alt="estrela de gelo"
                />
                = Melhor estrutura e separação de código.
            </ProjectsSubTitle>
            <ProjectsSubTitle className='project-subtitle'>
                <img
                    src={BlueStar}
                    alt="estrela azul"
                />
                = Projeto que não é meu, porém, possui diferenciações feitas por mim.</ProjectsSubTitle>
            <ProjectsContainer>
                <ProjectsColumn>
                    <ProjectInfo>
                        <div>
                            <img
                                className='project-star'
                                src={GoldStar}
                                alt="estrela dourada"
                            />
                            <img
                                className='project-star'
                                src={RedStar}
                                alt="estrela dourada"
                            />
                        </div>
                        <a
                            className='projects'
                            href="https://playflix-six.vercel.app/"
                        >
                            <img
                                height="200"
                                width="380"
                                src={Playflix}
                                alt="Playflix"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>PlayFlix</summary>
                            <p className='project-descrip'>
                                Serviço de games ao estilo Netflix. Projeto focado no uso de ReactJS, com a utilização de React-Router-Dom para criar diversas rotas, e React-Modal para gerar modais a partir de interações. Com responsivo para todos os aparelhos.
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/PlayFlix">playflix</a>
                            </p>
                        </details>
                    </ProjectInfo>

                    <ProjectInfo>
                        <div>
                            <img
                                className='project-star'
                                src={GoldStar}
                                alt="estrela dourada"
                            />
                            <img
                                className='project-star'
                                src={IceStar}
                                alt="estrela dourada"
                            />
                        </div>
                        <a
                            className='projects'
                            href="https://talking-with-chars.vercel.app/"
                        >
                            <img
                                height="200"
                                width="380"
                                src={TalkingWithChars}
                                alt="Talking With Characters"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>Talking With Characters</summary>
                            <p className='project-descrip'>
                                Um chat com personagens fictícios e não fictícios. As ferramentas e linguagens utilizadas foram: NextJS, Typescript, Styled-Components (estilização), e a API do ChatGPT para o sistema de conversa. As artes dos personagens foram feitas pela IA generativa de imagens BlueWillow.
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Talking-With-Chars">talking-with-chars</a>
                            </p>
                        </details>
                    </ProjectInfo>

                    <ProjectInfo>
                        <img
                            className='project-star'
                            src={GoldStar}
                            alt="estrela dourada"
                        />
                        <a
                            className='projects'
                            href="https://future-corp.vercel.app/"
                        >
                            <img
                                height="200"
                                width="380"
                                src={FutureCorp}
                                alt="Future Corp"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>Future Corp</summary>
                            <p className='project-descrip'>
                                Landing page para uma empresa de tecnologia fictícia, onde a mesma contém projetos com tecnologias super avançadas. Projeto realizado com ReactJS, utilizando styled-components para estilização, e react-router-dom para alternância das páginas. Responsivo para todos os dispositivos.
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Future-Corp">future-corp</a>
                            </p>
                        </details>
                    </ProjectInfo>

                    <ProjectInfo>
                        <img
                            className='project-star'
                            src={BlueStar}
                            alt="estrela dourada"
                        />
                        <a
                            className='projects'
                            href="https://codepen.io/_Ghoost_/pen/PoOMXpr"
                        >
                            <img
                                height="200"
                                width="380"
                                src={TopMovies}
                                alt="Top 5 Movies"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>Top 5 Filmes</summary>
                            <p className='project-descrip'>
                                Projeto realizado em uma imersão dev da <em>Alura</em>. Um projeto para listar nossos filmes favoritos. Ele utiliza Javascript para a inserção das imagens. <strong>Diferenciação:</strong> Utilizei do que havia aprendido na época para procurar e acrescentar os meus filmes favoritos, fazendo minha própria lista.
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Meu-Top-5-Filmes">top-filmes</a>
                            </p>
                        </details>
                    </ProjectInfo>

                    <ProjectInfo>
                        <img
                            className='project-star'
                            src={BlueStar}
                            alt="estrela azul"
                        />
                        <a
                            className='projects'
                            href="https://wesleyghoost.github.io/Jumper-Mario/"
                        >
                            <img
                                height="200"
                                width="380"
                                src={JumperMario}
                                alt="Jumper Mario"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>Jumper Mario</summary>
                            <p className='project-descrip'>
                                Fiz este projeto me baseando no vídeo do <em>Manual do Dev</em>. Este projeto trás uma projeção bem parecida do que seria o sistema de pulo do personagem Mario em seus jogos. Você utiliza qualquer botão para pular sobre os canos, e quando você encosta em um deles, fim de jogo. <strong>Diferenciação:</strong> Um container de referenciação ao Game Over aparece, e é possível reiniciar o jogo a partir do mesmo.
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Jumper-Mario">jumper-mario</a>
                            </p>
                        </details>
                    </ProjectInfo>
                </ProjectsColumn>

                <ProjectsColumn>
                    <ProjectInfo>
                        <img
                            className='project-star'
                            src={GoldStar}
                            alt="estrela dourada"
                        />
                        <a
                            className='projects'
                            href="https://wesleyghoost.github.io/Trilhas-Sonoras-Classicas-de-Games/"
                        >
                            <img
                                height="200"
                                width="380"
                                src={ClassicTracks}
                                alt="Landing Page"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>Trilhas Sonoras de Games</summary>
                            <p className='project-descrip'>
                                Mais um projeto voltado ao mundo de games. Esse projeto tem foco na utilização da tag audio do html, junto com informações precisas sobre o conteúdo, e apresenta responsividade para desktop e aparelhos com tela entre 500 e 600 pixels.
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Trilhas-Sonoras-Classicas-de-Games">trilhas-de-games</a>
                            </p>
                        </details>
                    </ProjectInfo>

                    <ProjectInfo>
                        <img
                            className='project-star'
                            src={BlueStar}
                            alt="estrela azul"
                        />
                        <a
                            className="projects"
                            href="https://github-finder-weld-theta.vercel.app/"
                        >
                            <img
                                height="200"
                                width="380"
                                src={GithubFinder}
                                alt="Github Finder"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>Github Finder</summary>
                            <p className='project-descrip'>
                                Projeto realizado com base no conteúdo do desenvolvedor <em>Matheus Battisti</em>. Ele se trata de um buscador de usuários do Github, Com foco na utilização de ReactJs + Typescript e chamada de API, especifícamente a API do Github. Estilização realizada com o uso de modules.css. <strong>Diferenciação:</strong> Componente de loading e requisição da bio do usuário buscado.
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Github-Finder">github-finder</a>
                            </p>
                        </details>
                    </ProjectInfo>

                    <ProjectInfo>
                        <img
                            className='project-star'
                            src={BlueStar}
                            alt="estrela azul"
                        />
                        <a
                            className="projects"
                            href="https://carrinho-de-compras-ashen.vercel.app/"
                        >
                            <img
                                height="200"
                                width="380"
                                src={ShoppingCart}
                                alt="Carrinho de Compras"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>Carrinho de Compras</summary>
                            <p className='project-descrip'>
                                Projeto realizado com base no conteúdo do desenvolvedor <em>Manual do Dev</em>. Este projeto consiste em um carrinho de compras utilizando a API do Mercado Livre, onde o mesmo foi originalmente realizado utilizando Javascript, ReactJS e CSS. <strong>Diferenciação:</strong> utilização do Typescript (ao invés do JS), filtragem de busca, páginas únicas para cada produto baseado em seus IDs, e localStorage para salvar permanentemente os produtos no carrinho caso o usuário reinicie ou feche o browser .
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Carrinho-de-Compras">carrinho-de-compras</a>
                            </p>
                        </details>
                    </ProjectInfo>

                    <ProjectInfo>
                        <img
                            className='project-star'
                            src={GoldStar}
                            alt="estrela dourada"
                        />
                        <a
                            className='projects'
                            href="https://wesleyghoost.github.io/Relaxing-Form/"
                        >
                            <img
                                height="200"
                                width="380"
                                src={RelaxingForm}
                                alt="Relaxing Form"
                            />
                        </a>
                        <details className='project-details'>
                            <summary>Relaxing Form</summary>
                            <p className='project-descrip'>
                                Formulário com músicas relaxantes (lofi) para o usuário preencher o mesmo no seu próprio tempo. Utilizei Glider.js para ocorrer a transição do formulário de etapa em etapa, Bulma.CSS para o container geral do site, Animate.css para abertura no primeiro card e EmailJS para envio das respostas do usuário para o email do mesmo. Responsivo para Desktop e aparelhos com telas entre 600 e 758 pixels.
                            </p>
                            <p className='project-descrip'>
                                Repositório: <a href="https://github.com/WesleyGhoost/Relaxing-Form">relaxing-form</a>
                            </p>
                        </details>
                    </ProjectInfo>
                </ProjectsColumn>
            </ProjectsContainer>
        </>
    )
}

export default Projects