import React from 'react'
import '../styles/home.css'
import {VscArrowRight} from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div className="container">
          <h2>Sobre o Nosso Aplicativo</h2>
          <h3> Sobre este app:</h3>
          <p className='home'>Tudo o que você procura na farmácia pode ser encontrado com facilidade no app do Consulta Medicamentos sem sair de casa!
              Só aqui você pode pesquisar e comparar os preços de mais de 120 mil itens... Saiba mais    <Link to={'/sobre'}><VscArrowRight className='seta'/></Link></p>
   </div>
  )
}

export default Home