import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect} from 'react'
import Album from './Album';
import ModalNota from './ModalNota';


function AlbumGrid(props) {
  const [albums, setAlbums] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState()

  const fetchAlbums = async () => {
       
    await getDocs(query(collection(db, "todos"), orderBy('nota', 'desc')))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setAlbums(newData);                
            console.log(albums, newData);
        })
   
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
                            <Album id={album.id} name={album.name} band={album.band} logo={album.logo} nota={album.nota} click={() => {handleOpen(album)}}/>
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
                                <Album id={album.id} name={album.name} band={album.band} logo={album.logo} nota={album.nota} />
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