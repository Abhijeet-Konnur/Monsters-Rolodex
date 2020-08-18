import React from 'react'


export default function SearchBox({ placeholder, handleChange }) {
    return (
        <div className='Box'>
            <input type='search' id='search' className='search' placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}
