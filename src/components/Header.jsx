import React from 'react'
import {Link} from 'react-router-dom'
import { HeaderContainer, Nav } from '../styles/HeaderStyled'
import logoCollabSabaraMoskitto from '../assets/collabLogo_transp.png'

const Header = () => {
  return (
    <HeaderContainer>
        <Nav>
          <ul>
            <li><img src={logoCollabSabaraMoskitto} alt="Logo" /></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/admin">Administração</Link></li>
          </ul>
      </Nav>
    </HeaderContainer>
   
  )
}

export default Header
