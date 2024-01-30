import React, { useState } from 'react'
import { updateDoc , doc } from "firebase/firestore";
import {db} from '../firebase';
import { Button, Modal } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import ModalHeader from 'rsuite/esm/Modal/ModalHeader';


function ModalNota({ setIsOpen, id }) {

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [nota, setNota] = useState()

  async function darNota(id){
    const albumref = doc(db, "todos", id);

    await updateDoc(albumref, {
      nota: parseInt(nota)
    });
    setIsOpen(false)
    window.location.reload(true);
  }

  return (
    <>
    <Modal open={handleOpen} onClose={handleClose} aria-label='modal-title' aria-describedby='modal-description' size={'50rem'} backdrop={true}>
      <ModalHeader>
        <Modal.Title id="modal-title">Dar nota</Modal.Title>
      </ModalHeader>
      <Modal.Body id="modal-description">
            <div className='corpito'>
              <p>{id.name}</p>
              <input onChange={(e) => {setNota(e.target.value)}}></input>
              <Button onClick={() => {darNota(id.id)}}>Dar nota</Button>

            </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default ModalNota