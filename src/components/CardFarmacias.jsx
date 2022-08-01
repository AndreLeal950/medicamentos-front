import React from 'react';
import '../styles/cards.sass';
import { MdFmdGood } from 'react-icons/md';





const Card = (props) => {
  return (
      <div className='card-container-farm' >
          <p className='card-codigo-farm'><a href={props.localizacao}  target='_blank' rel="noreferrer"><MdFmdGood />{props.localizacao}</a></p>
          <h1 className="card-title-farm">{props.Nome}</h1>
          <p className='card-end-farm'>{props.end}</p>
          <p className='card-id-farm'>ID: {props.id }</p>
    </div>
  )
}

export default Card