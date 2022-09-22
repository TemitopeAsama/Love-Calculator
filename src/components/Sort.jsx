import React from 'react'

const Sort = ({handleSort}) => {
  return (
		<div>
			<select name='sort-entries' id='sort-entries' onChange={(e) => handleSort(e.target.value)}>
				<option value='Sort Entries by...'>Sort Entries by...</option>
				<option value='Newest To Oldest'>Newest To Oldest</option>
				<option value='Oldest To Newest'>Oldest To Newest</option>
			</select>
		</div>
	);
}

export default Sort