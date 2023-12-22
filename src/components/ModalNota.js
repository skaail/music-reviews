import React, { useState } from 'react'
import { updateDoc , doc } from "firebase/firestore";
import {db} from '../firebase';

function ModalNota({ setIsOpen, id }) {

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
    <div className='modal-back'>
        <div className='modalBody'>
            <p className = 'close' onClick={() => setIsOpen(false)}>X</p>
            <div className='corpito'>
              <p>{id.name}</p>
              <input onChange={(e) => {setNota(e.target.value)}}></input>
              <button onClick={() => {darNota(id.id)}}>Dar nota</button>
            </div>

        </div>
    </div>
  </>
  )
}

export default ModalNota