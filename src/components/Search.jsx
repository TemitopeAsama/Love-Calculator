import React from 'react'
import { SearchStyles } from '../styles/InputStyles'


const Search = ({setSearchEntry}) => {
  return (
		<div>
			<SearchStyles
				type='text'
				placeholder='Search history....'
				onChange={(e) => setSearchEntry(e.target.value)}
			/>
		</div>
	);
}

export default Search