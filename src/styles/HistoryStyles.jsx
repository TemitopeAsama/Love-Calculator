import styled from 'styled-components';

export const HistoryStyles = styled.div`
	/* max-height: ; */
	height: min(100%, calc(100vh - 5.25rem));
	padding: 0 var(--s1) var(--s1);


	a {
		color: red;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Satoshi", sans-serif;
		font-weight: 500;
	}

	.search__sort {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: center;
		border: 2px solid red;
		margin-top: var(--s-1);
	}

	.entry__card {
		padding: var(--s1) var(--s0);
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
			font-family: "Satoshi", sans-serif;
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