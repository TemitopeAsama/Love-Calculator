import React from "react";
import { DropdownStyles } from "../styles/InputStyles";


const Sort = ({ handleSort }) => {
	return (
		<div>
			<DropdownStyles
                as="select"
				name='sort-entries'
				id='sort-entries'
				onChange={(e) => handleSort(e.target.value)}
			>
				<option value='Newest To Oldest'>Newest To Oldest</option>
				<option value='Oldest To Newest'>Oldest To Newest</option>
			</DropdownStyles>
		</div>
	);
};

export default Sort;
