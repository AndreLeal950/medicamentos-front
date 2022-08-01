import React, {useState, useEffect} from 'react'
import '../styles/cards.sass'
import axios from 'axios'
// import Modal from './Modal'

const Card = (props) => {

      
    const [lista, setLista] = useState('')
    const [ , setCodigo] = useState(' ')
 

  function handlesubmit() {
    const pDados = {
      codigo: (props.id)
      
    }
   
  
      axios.post("http://localhost:5000/medicamentos/codigo", pDados)
          .then(res => {
            
            setCodigo('')
            AtualizaInformacao('');
            
      })
    }
      
    function AtualizaInformacao() {
        axios.get("http://localhost:5000/medicamentos")
            .then(res => {
                
                console.log(res.data);
                setLista(res.data)
        })
    }  
    useEffect(() => {
        AtualizaInformacao();
  }, [])
  if (!lista) return null;
  return (
     
    <button type='submit' className='button-card-med' onClick={handlesubmit}>
      
    <div className='card-container-med'>
          <p className="card-codigo-med">Código: {props.codigo}</p>
          <h1 className="card-title-med">{props.nome}</h1>
          <p className="card-id-med"> ID: {props.id} </p>
    </div>
    </button>
   
  )
  
};

export default Card