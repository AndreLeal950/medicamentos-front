import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/CardMedicamentos'


import '../styles/medicamentos.css'




const Listamedicamentos = () => {
    const [lista, setLista] = useState('')
    const [nome, setNome] = useState(' ')
    const [codigo, setCodigo] = useState(' ')
    const [id, setId] = useState(' ')
    

  
  function registroClick() {
    const pDados = {
      nome: nome,
      codigo_barras: codigo
      }
      axios.post("http://localhost:5000/medicamentos/incluir", pDados)
          .then(res => {
            console.log('Tudo OK!');
            setNome('')
            setCodigo('')
            AtualizaInformacao();
       
      })
    }
      
  function updateClick() {
    const pDados = {
      nome: nome,
      codigo_barras: codigo,
      id: id
      }
      axios.post("http://localhost:5000/medicamentos/incluir", pDados)
          .then(res => {
            console.log('Tudo OK!');
            setNome('')
            setCodigo('')
            setId('')
            AtualizaInformacao();
       
      })
    }
  function deleteClick() {
    const pDados = {
        id: id
      }
      axios.post("http://localhost:5000/medicamentos/incluir", pDados)
          .then(res => {
            console.log('Tudo OK!');
            setNome('')
            setCodigo('')
            setId('')
            AtualizaInformacao();
       
      })
    }
      
    
    function AtualizaInformacao() {
        axios.get("http://localhost:5000/medicamentos")
            .then(res => {
                console.log('Vão aparecer os dados?');
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
              placeholder='Nome do Medicamento'
              onChange={e => { setNome(e.target.value)}} />
          </label>
          <label htmlFor="codigo">
            <input
              type="number"
              value={codigo}
              placeholder='Código do Medicamento'
              onChange={e => { setCodigo(e.target.value)}} />
          </label>
          <label htmlFor="id">
            <input
              type="number"
              value={id}
              placeholder='Id do Medicamento'
              onChange={e => { setId(e.target.value)}} />
          </label>
          </div>
          <div className='button-med'>
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
              id={obj.medicamento_codigo}
              nome={obj.medicamento_nome} 
              codigo={obj.medicamento_codigo_barras}  
           ></Card >
        )  
      })}
       
        </div>
    </div>

  )
}

export default Listamedicamentos