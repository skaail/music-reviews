import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect} from 'react'
import Album from './Album';
import ModalNota from './ModalNota';


function AlbumGrid(props) {
  const [albums, setAlbums] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState()

  const fetchAlbums = async () => {
       
   fetch('https://typescript-saily-songs.onrender.com/album')
    .then(response => response.json())
    .then(data => setAlbums(data))
    .catch(error => console.log(error))
   
  }

  function handleOpen(e){
    setIsOpen(true)
    setId(e)
  }

  useEffect(()=>{
      fetchAlbums();
  }, [])

  if(props.page == 'home'){
    return (
        <>
            <div className="results">
                {
                albums?.map((album,i)=>{
                    if(album.nota <= 10){
                        
                    }else{
                        return(
                            <Album id={album.id} name={album.nome} band={album.banda} logo={album.art} nota={album.nota} click={() => {handleOpen(album)}}/>
                        )
                    }
                      
                })
                }
            </div>
            {isOpen && <ModalNota setIsOpen={setIsOpen} id={id}/>}
            
        </>
      )
  }else{
    return(
        <>

            <div className="results">
                {
                albums?.map((album,i)=>{
                    if(album.nota > 0){
                        return(
                            <>
                            <Album id={album.id} name={album.nome} band={album.banda} logo={album.art} nota={album.nota} click={() => {handleOpen(album)}}/>
                            </>

                        )
                    }
                })
                }
            </div>

            
        </>

    )
  }


}

export default AlbumGrid