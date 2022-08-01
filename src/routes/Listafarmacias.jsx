import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/CardFarmacias';

import '../styles/farmacias.sass'


const ListaFarmacias = () => {
    const [lista, setLista] = useState('')
    const [nome, setNome] = useState(' ')
    const [endereco, setEndereco] = useState(' ')
    const [localizacao, setLocalizacao] = useState(' ')
    const [codigo, setCodigo] = useState(' ')
   
    

  
  function registroClick() {
    const pDados = {
      nome: nome,
      endereco: endereco,
      localizacao: localizacao
      }
      axios.post("http://localhost:5000/farmacias/incluir", pDados)
          .then(res => {
            console.log('Tudo OK!');
            setNome('')
            setEndereco('')
            setLocalizacao('')
            AtualizaInformacao('');
            
             
      })
    }
  function updateClick() {
    const pDados = {
      nome: nome,
      endereco: endereco,
      localizacao: localizacao,
      id: codigo
      }
      axios.post("http://localhost:5000/farmacias/update", pDados)
          .then(res => {
            console.log('Tudo OK!');
            setNome('')
            setEndereco('')
            setLocalizacao('')
            setCodigo('')
            AtualizaInformacao('');
            
             
      })
    }
  function deleteClick() {
    const pDados = {
      id: codigo
     
      }
      axios.post("http://localhost:5000/farmacias/exclui", pDados)
          .then(res => {
            console.log('Tudo OK!');
            setNome('')
            setEndereco('')
            setLocalizacao('')
            AtualizaInformacao('');
            
             
      })
    }
      
    
    function AtualizaInformacao() {
        axios.get("http://localhost:5000/farmacias")
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
    <div className='container'>
      <div className='input'>
        <label htmlFor="nome">
          <input
            type="text"
            value={nome}
            placeholder='Nome da Farmácia'
            onChange={e => { setNome(e.target.value)}} />
        </label>
        <label htmlFor="endereco">
          <input
            type="text"
            value={endereco}
            placeholder='Endereço'
            onChange={e => { setEndereco(e.target.value)}} />
        </label>
        <label htmlFor="localizacao">
          <input
            type="text"
            value={localizacao}
            placeholder='Localização GPS'
            onChange={e => { setLocalizacao(e.target.value)}} />
        </label>
        <label htmlFor="codigo">
          <input
            type="text"
            value={codigo}
            placeholder='Id da farmácia'
            onChange={e => { setCodigo(e.target.value)}} />
        </label>
      </div>
      <div className='button-farm'>
       <button onClick={registroClick}>Cadastrar</button>
       <button onClick={updateClick}>Alterar</button>
       <button onClick={deleteClick}>Excluir</button>
      </div>
      <div className='lista'>
        {typeof lista !== "undefined" &&
          lista.map((obj) => {
           return(
           <Card
               key={obj.id}
               list={lista}
               setList={setLista}
              id={obj.farma_id}
              Nome={obj.farma_nome} 
              end={obj.farma_endereco}
              localizacao={obj.farma_localizacao}  
              ></Card >
        )  
      })}
       
        </div>
    </div>

  )
}

export default ListaFarmacias