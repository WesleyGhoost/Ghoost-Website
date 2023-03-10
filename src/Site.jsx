import ScrollReveal from 'scrollreveal'

import Github from './img/github.png'
import GoldStar from './img/gold star.png'
import BlueStar from './img/blue star.png'

import Playflix from './img/playflix.png'
import ClassicTracks from './img/trilhas-classicas.png'
import LandingPage from './img/landing-page.png'
import RelaxingForm from './img/relaxing-form.png'
import JumperMario from './img/jumper-mario.png'
import TopMovies from './img/top-5-filmes.png'

import { Navbar } from "./components/Navbar";
import { useEffect } from 'react'

import { ContainerAll, Intro, IntroTitle, IntroDescrip, IntroImgs } from "./Styles/Intro";
import { AboutMe, AboutMeTitle, AboutMeDescrip } from "./Styles/AboutMe"
import { Languages, LanguagesTitle, LanguagesExamples, LanguagesExamplesTitle, LanguagesExamplesLang, LanguagesExamplesDescrips } from "./Styles/Languages";
import { Details, DetailsTitle, DetailsDescrip, DetailsLinkGit, DetailsLinkFigs } from "./Styles/Details";
import { ContainerFooter, Contact, ContactForms, ContactFormsLink } from "./Styles/FooterStyle";
import { Projects, ProjectsDescrip, ProjectsDetails, ProjectsImgs, ProjectsSubTitle, ProjectsTitle } from './Styles/Projects';

const Site = () => {
  const revealAbout = () => {
    ScrollReveal().reveal('.about', {reset: false, duration: 1500, delay: 300, origin: 'right', distance: '30px'})
  }

  const revealLanguages = () => {
    ScrollReveal().reveal('.lang-title', {reset: false, duration: 1500, delay: 150})
    ScrollReveal().reveal('.langs', {reset: false, duration: 1500, delay: 150})
    ScrollReveal().reveal('.lang-reposit', {reset: false, duration: 1500, delay: 400, origin: 'left', distance: '30px'})
  }

  const revealProjects = () => {
    ScrollReveal().reveal('.project-title', {reset: false, duration: 1000, delay: 150})
    ScrollReveal().reveal('.project-subtitle', {reset: false, duration: 1000, delay: 150})
    ScrollReveal().reveal('.projects', {reset: false, duration: 1000, delay: 250, origin: 'left', distance: '30px'})
    ScrollReveal().reveal('.project-details', {reset: false, duration: 1000, delay: 250, origin: 'left', distance: '30px'})
    ScrollReveal().reveal('.project-descrip', {reset: false, duration: 1000})
  }

  const revealDetails = () => {
    ScrollReveal().reveal('.details', {reset: false, duration: 2000, delay: 300, origin: 'left', distance: '30px'})
  }

  useEffect(() => {
    revealAbout()
    revealLanguages()
    revealProjects()
    revealDetails()
  })

  return (
    <ContainerAll id='intro'>
      <Navbar />
      <Intro>
        <IntroImgs>
          <a href="https://www.linkedin.com/in/wesley-felix-3b2168234/"><img height="30" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"  alt="linkedin" /></a>
          <a href="https://github.com/WesleyGhoost"><img height="30" width="30" src={Github} alt="Github"/></a>
        </IntroImgs>
        <IntroTitle>Seja bem-vindo/a ao Ghoost Website</IntroTitle>
        <IntroDescrip>Aqui voc?? encontrar?? mais detalhes sobre a minha pessoa, minha rela????o com a programa????o, as linguagens na qual eu tenho dom??nio, e claro, meus projetos.</IntroDescrip>
      </Intro>

      <AboutMe className='about' id='about'>
        <AboutMeTitle>Sobre mim</AboutMeTitle>
        <AboutMeDescrip>
          Ol??, meu nome ?? Wesley Felix, tenho 18 anos e eu nasci e moro atualmente em S??o Paulo. Terminei o ensino m??dio e depois de mais de um ano estudando a ??rea, eu pretendo me ingressar nela o mais poss??vel.
        </AboutMeDescrip>
        <AboutMeDescrip>
          Eu descobri que a carreira de desenvolvedor ?? perfeita para mim pois desde pequeno eu sempre utilizei computadores e sou apaixonado por tecnologia, eu s?? n??o sabia que a programa????o em si existia, mas ela sempre esteve comigo em todos os lugares, pois sem ela, n??o existiria absolutamente nada dentro deste mundo que eu tanto gosto.
        </AboutMeDescrip>
        <AboutMeDescrip>
          O meu hobbie predileto (al??m de programar ?? claro) ?? jogar videogame. Descobri o mundo dos games aos 5 anos e da?? em diante nunca mais parei. Quando eu misturo programa????o com jogos eu sinto que eu ganho mais desempenho ao codar, pois eu estou trabalhando ali com algo que eu realmente gosto. Obs: <em>Ghoost</em> ?? meu nickname em praticamente todos os games que jogo atualmente
        </AboutMeDescrip>
      </AboutMe>
      
      <LanguagesTitle className='lang-title' id='languages'>Linguagens utilizadas</LanguagesTitle>
      <Languages>
        <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/>
        <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/>        
        <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript"/>
        <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"/>
        <img className='langs' height="65" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
        <LanguagesExamples className='lang-reposit'>
          <LanguagesExamplesTitle>Exemplos do que sei fazer em tais linguagens:</LanguagesExamplesTitle>
          <LanguagesExamplesDescrips><LanguagesExamplesLang>HTML: </LanguagesExamplesLang>Cria????o de divs, navbar, footer, select/options e tabelas.</LanguagesExamplesDescrips>
          <LanguagesExamplesDescrips><LanguagesExamplesLang>CSS: </LanguagesExamplesLang>Estiliza????o de cores, tamanhos, posi????es dos itens, anima????es, display flex e grid, e responsivo. </LanguagesExamplesDescrips>
          <LanguagesExamplesDescrips><LanguagesExamplesLang>Javascript: </LanguagesExamplesLang>Cria????o de vari??veis, fun????es, loops, condi????es, classes, manipula????o do DOM e ass??ncrono.</LanguagesExamplesDescrips>
          <LanguagesExamplesDescrips><LanguagesExamplesLang>ReactJS: </LanguagesExamplesLang>Utiliza????o de JSX, imports, props e hooks(useState, useEffect, useContext...)</LanguagesExamplesDescrips>
          <LanguagesExamplesDescrips><LanguagesExamplesLang>Git: </LanguagesExamplesLang>Commits, branchs, e deploy no Github.</LanguagesExamplesDescrips>
        </LanguagesExamples>
      </Languages>
      
      <ProjectsTitle className='project-title' id='projects'>Principais Projetos</ProjectsTitle>
      <ProjectsSubTitle className='project-subtitle'>Esses s??o os que considero como meus principais projetos, pois sinto que foi principalmente com estes que mais aprendi. Outros projetos podem ser acessados no meu <a href="https://github.com/WesleyGhoost">Github</a></ProjectsSubTitle>
      <ProjectsSubTitle className='project-subtitle'>Os projetos com a estrela dourada <img src={GoldStar} alt="estrela dourada" /> representam os projetos que foram feitos 100% por mim, j?? os com a estrela azul <img src={BlueStar} alt="estrela azul" />representam projetos nos quais eu somente acrescentei novos conte??dos.</ProjectsSubTitle>
      <Projects>
        <a className='projects' id='firstElement' href="https://playflix-six.vercel.app/"><ProjectsImgs height="200" width="380" src={Playflix} alt="Playflix" /></a>
        <a className='projects' id='thirdElement' href="https://wesleyghoost.github.io/Trilhas-Sonoras-Classicas-de-Games/"><ProjectsImgs height="200" width="380" src={ClassicTracks} alt="Landing Page" /></a>
        <ProjectsDetails className='project-details' id='secondElement'>
          <summary>PlayFlix</summary>
          <ProjectsDescrip className='project-descrip'>
            Servi??o de games ao estilo Netflix. Projeto focado no uso de ReactJS, com a utiliza????o de React-Router-Dom para criar diversas rotas, e React-Modal para gerar modais a partir de intera????es. Com responsivo para todos os tipos de aparelhos.
          </ProjectsDescrip>
          <ProjectsDescrip>
            Reposit??rio: <a href="https://github.com/WesleyGhoost/PlayFlix">playflix</a>
          </ProjectsDescrip>
        </ProjectsDetails>
        <ProjectsDetails className='project-details' id='fourthElement'>
          <summary>Trilhas Sonoras de Games</summary>
          <ProjectsDescrip className='project-descrip'>
            Mais um projeto voltado ao mundo de games. Esse projeto tem foco na utiliza????o da tag audio do html, junto com informa????es precisas sobre o conte??do, e apresenta responsividade para desktop e aparelhos com tela entre 500 e 600 pixels.
          </ProjectsDescrip>
          <ProjectsDescrip>
            Reposit??rio: <a href="https://github.com/WesleyGhoost/Trilhas-Sonoras-Classicas-de-Games">trilhas-de-games</a>
          </ProjectsDescrip>
        </ProjectsDetails>
        <a className='projects' id='fifthElement' href="https://wesleyghoost.github.io/Relaxing-Form/"><ProjectsImgs height="200" width="380" src={RelaxingForm} alt="Relaxing Form" /></a>
        <a className='projects' id='seventhElement'href="https://wesleyghoost.github.io/Landing-page/"><ProjectsImgs height="200" width="380" src={LandingPage} alt="Landing Page" /></a>
        <ProjectsDetails className='project-details' id='sixthElement'>
          <summary>Relaxing Form</summary>
          <ProjectsDescrip className='project-descrip'>
            Formul??rio com m??sicas relaxantes (lofi) para o usu??rio preencher o mesmo no seu pr??prio tempo. Utilizei Glider.js para ocorrer a transi????o do formul??rio de etapa em etapa, Bulma.CSS para o container geral do site, Animate.css para abertura no primeiro card e EmailJS para envio das respostas do usu??rio para o email do mesmo. Responsivo para Desktop e aparelhos com telas entre 600 e 758 pixels.
          </ProjectsDescrip>
          <ProjectsDescrip>
            Reposit??rio: <a href="https://github.com/WesleyGhoost/Relaxing-Form">relaxing-form</a>
          </ProjectsDescrip>
        </ProjectsDetails>
        <ProjectsDetails className='project-details' id='eighthElement'>
          <summary>Landing Page</summary>
          <ProjectsDescrip className='project-descrip'>
            Landing page para uma empresa de tecnologia fict??cia, onde a mesma produz chips cibern??ticos, garantindo certos benef??cios para o cliente.
          </ProjectsDescrip>
          <ProjectsDescrip>
            Reposit??rio: <a href="https://github.com/WesleyGhoost/Landing-page">landing-page</a>
          </ProjectsDescrip>
        </ProjectsDetails>  
        <a className='projects' id='ninthElement' href="https://codepen.io/_Ghoost_/pen/PoOMXpr"><ProjectsImgs height="200" width="380" src={TopMovies} alt="Top 5 Movies" /></a>  
        <a className='projects' id='eleventhElement' href="https://wesleyghoost.github.io/Jumper-Mario/"><ProjectsImgs height="200" width="380" src={JumperMario} alt="Jumper Mario" /></a>
        <ProjectsDetails className='project-details' id='tenthElement'>
          <summary>Top 5 Filmes</summary>
          <ProjectsDescrip className='project-descrip'>
            Projeto realizado em uma imers??o dev da <em>Alura</em>. Um projeto para listar nossos filmes favoritos. Ele utiliza Javascript para a inser????o das imagens. <strong>Diferencia????o:</strong> Utilizei do que havia aprendido na ??poca para procurar e acrescentar os meus filmes favoritos, fazendo minha pr??pria lista.
          </ProjectsDescrip>
          <ProjectsDescrip>
            Reposit??rio: <a href="https://github.com/WesleyGhoost/Meu-Top-5-Filmes">top-filmes</a>
          </ProjectsDescrip>
        </ProjectsDetails>
        <ProjectsDetails className='project-details' id='twelfthElement'>
          <summary>Jumper Mario</summary>
          <ProjectsDescrip className='project-descrip'>
          Fiz este projeto me baseando no v??deo do <em>Manual do Dev</em>. Este projeto tr??s uma proje????o bem parecida do que seria o sistema de pulo do personagem Mario em seus jogos. Voc?? utiliza qualquer bot??o para pular sobre os canos, e quando voc?? encosta em um deles, fim de jogo. <strong>Diferencia????o:</strong> Um container de referencia????o ao Game Over aparece, e ?? poss??vel reiniciar o jogo a partir do mesmo.
          </ProjectsDescrip>
          <ProjectsDescrip>
            Reposit??rio: <a href="https://github.com/WesleyGhoost/Jumper-Mario">jumper-mario</a>
          </ProjectsDescrip>
        </ProjectsDetails>
      </Projects>

      <Details className='details' id='details'>
        <DetailsTitle>Detalhes do site</DetailsTitle>
        <DetailsDescrip>Este site foi constru??do com a utiliza????o da linguagem <em>React</em>, juntamente com a sua mais moderna biblioteca de estiliza????o, o <em>styled-components</em>, sua outra biblioteca voltada ao scroll do site, <em>react-scroll</em>, e por fim, o <em>scroll-reveal</em>, que ?? capaz de revelar o conte??do do site conforme o usu??rio for deslizando-o. Sendo tamb??m o mesmo, responsivo nos mais diversos tipos de telas (mobile, tablet, desktop, entre outros.)</DetailsDescrip>
        <DetailsDescrip>Sua documenta????o pode ser acessada diretamente do <em>Github</em> atrav??s do seguinte link: <DetailsLinkGit href="https://github.com/WesleyGhoost/Ghoost-Website">Ghoost Website</DetailsLinkGit></DetailsDescrip>
        <DetailsLinkFigs href="https://www.flaticon.com/br/icones-gratis/github" title="github ??cones">Github ??cones criados por Pixel perfect - Flaticon</DetailsLinkFigs>
        <DetailsLinkFigs href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</DetailsLinkFigs>
        <DetailsLinkFigs href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Vectors Market - Flaticon</DetailsLinkFigs>
      </Details>

      <ContainerFooter>
        <Contact>Contatos:</Contact>
        <ContactForms>Email: <ContactFormsLink>wesley.felix12@hotmail.com</ContactFormsLink></ContactForms>
        <ContactForms>Linkedin: <ContactFormsLink href='https://www.linkedin.com/in/wesley-felix-3b2168234/'>Wesley Felix</ContactFormsLink></ContactForms>
        <ContactForms>Celular: <ContactFormsLink>11 91347-6468</ContactFormsLink></ContactForms>
      </ContainerFooter>
    </ContainerAll>
  );
}

export default Site;