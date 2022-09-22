import styled from 'styled-components';


export const FormStyles = styled.div`
	width: 100%;
	font-family: "Satoshi", sans-serif;

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--s3) var(--s3);

		.inputs {
			width: 100%;
			display: flex;
			justify-content: space-around;

			.input__label {
				display: flex;
				flex-direction: column;

				label {
					text-align: center;
                    margin-bottom: var(--s-1);
                    font-weight: 500;
				}

				input {
					width: 400px;
					border: 1px solid var(--border-orange);
					border-radius: 7px;
					padding: var(--s0) var(--s1);


                    &:focus {
                        outline: 2px solid var(--logo-pink);
                    }
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