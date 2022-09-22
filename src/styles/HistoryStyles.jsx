import styled from 'styled-components';

export const HistoryStyles = styled.div`
    height: calc(100vh - 5.25rem);
	padding: var(--s0) var(--s1);


    a {
        color: red;
    }

	.entry__card {
		padding: var(--s1) var(--s2);
		border-bottom: 2px solid red;

		.names__score {
			width: 100%;
			display: flex;
			justify-content: space-between;
			font-family: "Clash Display", sans-serif;
			font-size: var(--s1);
		}

		.message {
			font-size: var(--s0);
            font-family: 'Satoshi', sans-serif;
		}
	}
`;

export const NoHistoryStyles = styled.div`
	height: calc(100vh - 5.25rem);
	padding: var(--s0) var(--s3);

	a {
		color: red;
	}
	.no__history {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Satoshi", sans-serif;
		font-size: var(--s2);
		font-weight: 700;
	}
`;