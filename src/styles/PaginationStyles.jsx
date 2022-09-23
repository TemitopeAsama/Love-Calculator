import styled from 'styled-components';

export const PaginationStyles = styled.nav`
	margin-top: var(--s1);
	margin-bottom: var(--s0);

	ul {
		width: 100%;
		display: flex;
		justify-content: center;
		/* margin-bottom: var(--s2); */

		* + * {
			margin-left: 1rem;
		}

		.page-link.is-active {
			color: var(--logo-pink);
			font-weight: 700;
		}

		button {
			padding: var(--s-2) var(--s0);
			background-color: transparent;
			color: black;
			font-family: "Satoshi", sans-serif;
			font-weight: 500;
		}
	}
`;

