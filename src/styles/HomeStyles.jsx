import styled from 'styled-components';
import { keyframes } from "styled-components";

const textAnimation = keyframes`
    from{
        background-position: 0%;
    } to {
        background-position: 100%;
    }
`;

export const HomeStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 5.25rem);
	width: 100%;

	.copy {
		text-align: center;
		font-family: "Clash Display", sans-serif;

		p {
			font-size: var(--s1);
			font-weight: 500;
			font-family: "Satoshi", sans-serif;
		}

		h1 {
			font-size: var(--s5);
			font-weight: 600;
			background-image: var(--gradient);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-size: 300%;
            background-position: -300%;
			animation: ${textAnimation} 3s ease-in-out infinite alternate-reverse;
		}
	}
`;