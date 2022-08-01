import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/modal.css'

function ContentModal() {
    const [modalIsOpen, steModalIsOpen] = useState(false);

    function OpenModal() {
        steModalIsOpen(true);
        
    }
    function CloseModal() {
        steModalIsOpen(false);
        
    }

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
          <button onClick={CloseModal}>fechar</button>
          </Modal>  
    </div>
  )
}

export default ContentModal;