import styled from 'styled-components';

export const PaginationStyles = styled.nav`
	margin-top: var(--s2);

	ul {
		width: 100%;
		display: flex;
		justify-content: center;

		* + * {
			margin-left: 1rem;
		}

		.page-link.is-active {
			color: var(--logo-pink);
            font-weight: 700;
		}

		/* .previous button, .next button {
				padding: var(--s-2) var(--s0);
				background-color: transparent;
				color: var(--logo-pink);
			} */

		button {
			padding: var(--s-2) var(--s0);
			background-color: transparent;
			color: black;
			font-family: "Satoshi", sans-serif;
			font-weight: 500;
		}
	}
`;

// export const PaginationButtonStyles = styled.button`
// 		padding: var(--s-2) var(--s0);
// 		background-color: transparent;
// 		color: ${(props) => (props.active ? "green" : "red")};
// `;
