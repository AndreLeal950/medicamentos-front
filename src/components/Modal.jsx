import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../styles/modal.sass'

function ContentModal() {
    
  
  const [modalIsOpen, steModalIsOpen] = useState(false);
  console.log("esses são os dados:");

    function OpenModal() {
      steModalIsOpen(true);
   
        
    }
    function CloseModal() {
        steModalIsOpen(false);
        
  }
  useEffect(() => {
    
  }, [])

  return (
    <div className="container">
          <button onClick={OpenModal}>Abre o Modal</button>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={CloseModal}
          contentLabel="Exemple Modal"
          overLayClasseName="modal-overlay"
          className="modal-content"
          >
            <h1>Título do Modal</h1>
            
            <button onClick={CloseModal}>fechar</button>
          </Modal>  
    </div>
  )
}

export default ContentModal;