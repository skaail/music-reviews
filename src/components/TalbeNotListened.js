import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, updateDoc , doc } from "firebase/firestore";
import {db} from '../firebase';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import { useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal';

function TableNotListened() {
  const [todos, setTodos] = useState([]);
  const [album, setAlbum] = useState("")
  const [albumID, setAlbumID] = useState("")

  const [nota, setNota] = useState('')

  const [show, setShow] = useState(false);

  const fetchPost = async () => {
       
    await getDocs(collection(db, "todos"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setTodos(newData);                
            console.log(todos, newData);
        })
   
}

useEffect(()=>{
    fetchPost();
}, [])

const handleClose = () => {
  setShow(false)
};

const handleSave = async (e) => {
  const albumref = doc(db, "todos", albumID);

  await updateDoc(albumref, {
    nota: parseInt(nota)
  });
  setShow(false)
  window.location.reload(false);
};

const handleShow = () => {
  setShow(true)
};
  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{album}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Container>
        <InputGroup className='mb-3' size='lg'>
        <FormControl 
            placeholder='Digite a nota'
            type='number'
            onChange={e => {setNota(e.target.value)}}
          />
        </InputGroup>
      </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
        <div className="results">
            {
            todos?.map((todo,i)=>{
                if(todo.nota === '' || todo.nota === 100){
                return(
                    <div className="results" onClick={() => {setAlbumID(todo.id); setAlbum(todo.name); handleShow()}}>
                        <div className='album' key={todo.id}>
                            <img src={todo.logo}></img>
                            {todo.name}
                            <br></br>
                            {todo.band}
                        </div>
                </div>
                )
                }else{}
            })
            } 
        </div>
    </>

  )
}

export default TableNotListened