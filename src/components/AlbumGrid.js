import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect} from 'react'
import Album from './Album';


function AlbumGrid(props) {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
       
    await getDocs(collection(db, "todos"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setAlbums(newData);                
            console.log(albums, newData);
        })
   
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
                            <Album id={album.id} name={album.name} band={album.band} logo={album.logo} nota={album.nota} />
                        )
                    }
                      
                })
                }
            </div>
        </>
      )
  }else{
    return(
        <div className="results">
                {
                albums?.map((album,i)=>{
                    if(album.nota > 0){
                        return(
                            <Album id={album.id} name={album.name} band={album.band} logo={album.logo} nota={album.nota} />
                        )
                    }
                })
                }
            </div>
    )
  }


}

export default AlbumGrid