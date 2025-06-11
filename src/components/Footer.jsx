import React from 'react'
import { FooterContainer, FooterContent } from '../styles/FooterStyled'
// import logoCollabSabaraMoskitto from '../assets/collabLogo.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
      <div>
        {/* <img src={logoCollabSabaraMoskitto} alt="Logo" /> */}
        <p>&copy; Grupo Moskitto - 2025 </p>
      </div>

    </FooterContent>
    </FooterContainer>
    
  )
}

export default Footer
