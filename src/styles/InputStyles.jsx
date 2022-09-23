import styled from 'styled-components';

export const InputStyles = styled.input`
		width: 21.875rem;
		border: 1px solid var(--border-orange);
		border-radius: 7px;
		padding: var(--s0) var(--s1);
        font-family: 'Satoshi', sans-serif;

		&:focus {
			outline: 2px solid var(--logo-pink);
		}

`;

export const DropdownStyles = styled(InputStyles)`
	width: unset;
	padding: var(--s-1) var(--s3) var(--s-1) var(--s1);
	background-color: white;
	background-image: var(--icon);
	background-repeat: no-repeat;
	background-size: calc(0.6rem + 0.25vw);
	background-position: 90% 50%;
	-moz-appearance: none;
	-webkit-appearance: none;
	-ms-apperance: none;
	appearance: none;
`;

export const SearchStyles = styled(InputStyles)`
	width: unset;
	padding: var(--s-1) var(--s1) var(--s-1) var(--s0);
`;