import React from 'react';
import '../styles/cards.css';
import { MdFmdGood } from 'react-icons/md';


const Card = (props) => {
  return (
      <div className='card-container-farm'>
          <p className='card-codigo-farm'><MdFmdGood />{props.localizacao}</p>
          <h1 className="card-title-farm">{props.Nome}</h1>
          <p className='card-end-farm'>{props.end}</p>
          <p className='card-id-farm'>ID: {props.id }</p>
    </div>
  )
}

export default Card