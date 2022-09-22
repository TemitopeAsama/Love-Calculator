import styled from 'styled-components';

export const HeaderStyles = styled.header`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 0 max(var(--s0), 5vw);
	height: 5.25rem;
	width: 100%;

	h2 {
		font-size: clamp(1rem, 1rem + 1vw, var(--s1));
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