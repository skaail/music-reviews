import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <nav style={{display: "flex", height: "100vh", width: "45wh"}}>
        <div className='Links'>
            <ul><Link to={'/'}>Home</Link></ul>
            <ul><Link to={'/pesquisar'}>Pesquisar</Link></ul>
            <ul><Link to={'/reviews'}>Minhas Reviews</Link></ul>
            <ul><Link to={'/sugestao'}>Sugestao</Link></ul>
        </div>
    </nav>
  )
}

export default Sidebar