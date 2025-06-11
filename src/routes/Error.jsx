import React from 'react'
import img404 from '../assets/404.png'

const Error = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10vh', }}>
        <img src={img404} alt="Não encontrado!" />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'green', fontFamily: 'fantasy', fontSize: 'large', marginBottom: '20vh' }}>
        <h1>404 - Página não encontrada!</h1>
      </div>
    </div>
  )
}

export default Error
