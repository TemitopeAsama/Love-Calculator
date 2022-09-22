import styled from 'styled-components';


export const FormStyles = styled.div`
	width: 100%;
	font-family: "Satoshi", sans-serif;

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--s1) var(--s2);

		.inputs {
			width: 100%;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;

			.input__label {
				display: flex;
				flex-direction: column;

				label {
					text-align: center;
                    margin-bottom: var(--s-1);
                    font-weight: 500;
				}
			}
		}

		button {
            margin-top: var(--s1);
			padding: var(--s0) var(--s4);
            border-radius: 5px;
            color: white;
            font-weight: 500;
		}

        span {
            margin-top: var(--s0);
            display: flex;
            font-weight: 500;
            color: red;

            img {
                margin-right: var(--s-1);
            }
        }
	}
`;