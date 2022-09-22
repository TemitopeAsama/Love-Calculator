import styled from 'styled-components';

export const HeaderStyles = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--s1) var(--s3);
	height: 5.25rem;
	width: 100%;


		img {
			width: var(--s5);
			margin-right: var(--s-3);
		}

		h2 {
			font-size: var(--s1);
			font-weight: 900;
			font-family: "Clash Grotesk", sans-serif;
			color: var(--logo-pink);

			span:hover {
				background: var(--gradient);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

	a {
		text-decoration: none;
		font-family: "Satoshi", sans-serif;
		font-weight: 500;
		color: var(--heading-pink);
	}
`;