import React from 'react'
import { collection, getDocs, limit } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect} from 'react'

function Sugestao() {

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

    let rand = new Date().getDay()
    useEffect(()=>{
        fetchPost();
    }, [])


  return (
    <div className='Layout'>
        <div className='sugestao'>
        {
            todos?.map((todo,i)=>{
                
                if(todo.nota === '' || todo.nota === 100){
                    if(i == rand){
                        console.log(rand)
                        return(
                            <div className="results">
                                <div className='album' key={todo.id}>
                                    <img src={todo.logo}></img>
                                    {todo.name}
                                    <br></br>
                                    {todo.band}
                                </div>
                        </div>
                        )
                    }

                }else{}
            })
            } 
        </div>
    </div>
  )
}

export default Sugestao