import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/CardMedicamentos'


import '../styles/medicamentos.sass'




const Listamedicamentos = () => {
    const [lista, setLista] = useState('')
    const [nome, setNome] = useState(' ')
    const [barras, setBarras] = useState(' ')
    const [codigo, setCodigo] = useState(' ')
    

  
  function registroClick() {
    const pDados = {
      nome: nome,
      codigo_barras: barras
      }
      axios.post("http://localhost:5000/medicamentos/incluir", pDados)
          .then(res => {
           
            setNome('')
            setBarras('')
            AtualizaInformacao('');
       
      })
    }
      
  function updateClick() {
    const pDados = {
      nome: nome,
      codigo_barras: barras,
      codigo: codigo
      }
      axios.post("http://localhost:5000/medicamentos/update", pDados)
          .then(res => {
            
            setNome('')
            setBarras('')
            setCodigo('')
            AtualizaInformacao('');
       
      })
    }
 
  function deleteClick() {
    const pDados = {
      codigo: codigo
     
      }
      axios.post("http://localhost:5000/medicamentos/exclui", pDados)
          .then(res => {
           
            setNome('')
            setBarras('')
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
              value={barras}
              placeholder='Código de Barras'
              onChange={e => { setBarras(e.target.value)}} />
          </label>
          <label htmlFor="codigo">
            <input
              type="number"
              value={codigo}
              placeholder='Codigo do Medicamento'
              onChange={e => { setCodigo(e.target.value)}} />
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
              key={obj.codigo}
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