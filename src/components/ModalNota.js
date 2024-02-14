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
      const url = "https://typescript-saily-songs.onrender.com/album/" + id
      const response = await fetch(url, {
          method: "patch",
          body: JSON.stringify({nota: nota}),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
            'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'}
      })
      const responseJson = await response.json()
      console.log(responseJson)
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