import React from 'react'
import '../styles/cards.css'

const Card = (props) => {
  return (
      <div className='card-container-med'>
          <p className="card-codigo-med">Código: {props.codigo}</p>
          <h1 className="card-title-med">{props.nome}</h1>
          <p className="card-id-med">ID: {props.id }</p>
    </div>
  )
}

export default Card