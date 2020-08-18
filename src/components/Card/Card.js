import React from 'react'
//import Home from '../Home'

export default function Card(props) {
    //console.log(props.monsters)
    return (
        <div className='card-container'>

            <img className='holder' alt='monsters' src={`https://robohash.org/${props.monsters.id}?set=set2`} />
            <h2 > {props.monsters.name} </h2>
            <p>{props.monsters.email}</p>

        </div>
    )
}

