import React from 'react'

const Search = ({setSearchEntry}) => {

  return (
    <div>
        <input type="text" placeholder='Search history....' onChange={(e) => setSearchEntry(e.target.value)} />
    </div>
  )
}

export default Search