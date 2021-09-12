import React from 'react'

function Search(props) {
    const { onInputChange, onButtonClick} = props;
    return (
        <div >
            <input type='text'
            className='search'
            placeholder='search for a plant...'
            onChange={onInputChange}
            />
        </div>
    )
}

export default Search
