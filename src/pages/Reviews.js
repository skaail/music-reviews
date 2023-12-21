import React from 'react'
import Table from 'react-bootstrap/Table';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect} from 'react'
import AlbumGrid from '../components/AlbumGrid';


function Review() {
  return (
    <>
        <div className="Layout results">
            <AlbumGrid page='review'/>
        </div>
    </>
  )
}

export default Review