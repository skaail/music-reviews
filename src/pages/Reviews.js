import React from 'react'
import Table from 'react-bootstrap/Table';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect} from 'react'


function TableReview() {
  const [todos, setTodos] = useState([]);

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


  return (
    <>
        <div className="results">
        {
        todos?.map((todo,i)=>{

            if(todo.nota >= 0){
                return(
                    <div className="results">
                        <div className='album' key={todo.id}>
                            <img src={todo.logo}></img>
                            {todo.name}
                            <br></br>
                            {todo.band}
                            <br></br>
                            {todo.nota}
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

export default TableReview