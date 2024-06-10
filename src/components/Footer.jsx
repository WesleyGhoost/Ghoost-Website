import React from 'react'
import { useSelector } from 'react-redux'
import { FooterContainer } from '../Styles/FooterStyle'

function Footer() {
  const language = useSelector((state) => state.language)

  return (
    <FooterContainer>
        <h4>@GhoostWebsite</h4>
        <h4>
          {language === 'pt' ? 
            'Site realizado por Wesley Felix da Silva. Imagens originais foram geradas com IAs generativas.' :
            'Website was developed by Wesley Felix da Silva. Original Images were generated using generative AI.'
          }
        </h4>
        <div>
            <a href="https://github.com/WesleyGhoost">Linkedin</a>
            <a href="https://www.linkedin.com/in/wesley-felix-3b2168234/">Github</a>
        </div>
    </FooterContainer>
  )
}

export default Footer