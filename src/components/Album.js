import React from 'react'

function Album(props) {

    return (
            <div className='album' key={props.id}>
            <img src={props.logo}></img>
                <div className='info'>
                    <p className='name'>{props.name}</p>
                    <p className='name'>{props.band}</p>
                    {props.nota >= '0' && <p>{props.nota}</p>}
                </div>         
            </div>
    )
}

export default Album