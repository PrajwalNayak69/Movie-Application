import React from 'react'

const Search = (props) => {
    const { searchTerm, setSearchTerm } = props;

    return (
       <div className="search">
        <div className="">
            <img src="search.svg" alt='search image'/>
            <input 
              type='text'
              placeholder='Search through thousands of Movies'
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
       </div>
    )
}

export default Search