import React from 'react'
import { useState, useEffect } from 'react'

import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';

function Pesquisar() {
    const CLIENT_ID = "47d629387eff4cc2a731e7f2c290302e"
    const CLIENT_SECRET = "5bcf17b2ac36460480687f83171004ae"

    const [searchInput, setSearchInput] = useState("")
    const [accessToken, setAccessToekn] = useState("")
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        //API Access Token
        var auth = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
    
          body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', auth)
          .then(result => result.json())
          .then(data => setAccessToekn(data.access_token))
    }, [])

    async function addAlbum(nome, banda, nota){
      const url = "https://typescript-saily-songs.onrender.com/album"
      const response = await fetch(url, {
          method: "post",
          body: JSON.stringify({nome: nome, banda: banda, nota: nota}),
          headers: { "Content-Type": "application/json" }
      })
      const responseJson = await response.json()
      console.log(responseJson)
  }



    async function search() {
        
        
        var artistParameters = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
            'Authorization' : 'Bearer ' + accessToken
        }
    }

    var returnAlbums = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album&limit=20', artistParameters)
    .then(response => response.json())
    .then(async data => {
        setAlbums([])
        for(let i = 0; i < data.albums.items.length; i++){
            setAlbums(oldArray => [...oldArray, data.albums.items[i]]);
        }
        console.log(albums)
    })


    

  }



    return (
        <div className='Layout'>
            <input
                type="text"
                onKeyPress={e => {
                    if(e.key === 'Enter'){
                      search()
                    }
                  }}
                onChange={e => {
                    setSearchInput(e.target.value)
                    
                    search()
                  }}
            />
            <button onClick={search}>Default</button>

            <div className="results">
                {albums.map(album => (
                    <div className='album' key={album.id} onClick={() => addAlbum(album.name, album.artists[0].name)}>
                        <img alt='' src={album.images[0].url}></img>
                        {album.name}
                        <br></br>
                        {album.artists[0].name}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pesquisar