import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FormStyles } from '../styles/FormStyles';
import Result from '../components/Result';
import { InputStyles } from '../styles/InputStyles';

const Form = () => {
    const [firstName, setFirstName] = useState("");
		const [secondName, setSecondName] = useState("");
    const [pastCalculations, setPastCalculations] = useState(JSON.parse(localStorage.getItem("calculations")) || {});
    const [fetchState, setFetchState] = useState({
			status: "idle",
			data: null,
			error: null,
		});

    const handleSubmit = async (e) => {
			e.preventDefault();
            const newKey = `${firstName}|${secondName}`.toLowerCase();
            if (pastCalculations[newKey]) {
                setFetchState(() => {
                    const newState = {
                        status: "success",
                        data: pastCalculations[newKey],
                        error: null
                    }
                    return newState;
                })
                console.log(fetchState)
            } else {
                    try {
                            const response = await axios.get(`https://loverapi.herokuapp.com/api/v1/calculate?personA=${firstName}&personB=${secondName}`);
                            const score = response.data.result;
                            const message = response.data.message;
                            const newCalculation = {
                                ...pastCalculations,
                                [newKey]: { firstName, secondName, score, message }
                            };
                            setPastCalculations(newCalculation);
                            setFetchState({
                                status: "success",
                                data: { score, message },
                                error: null,
                            });
                            localStorage.setItem("calculations", JSON.stringify(newCalculation));
                    } catch (err) {
                            setFetchState({
                                status: "failure",
                                data: null,
                                error: "Make sure none of the fields are empty",
                            });

                    }

            }



		};

    useEffect(() => {
        if (fetchState.status === "failure") {
            setTimeout(() => {
                setFetchState({
                    ...fetchState,
                    status: "idle"
                })
            }, 5000);
            return () => {
                clearTimeout()
            };
        }
    }, [fetchState]);

  return (
		<FormStyles>
			<form onSubmit={handleSubmit}>
				<div className='inputs'>
					<div className='input__label'>
						<label htmlFor='f-name'>First Name</label>
						<InputStyles
							type='text'
							name='f-name'
							id='f-name'
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						/>
					</div>
					<div className='input__label'>
						<label htmlFor='s-name'>Second Name</label>
						<InputStyles
							type='text'
							name='f-name'
							id='s-name'
							onChange={(e) => setSecondName(e.target.value)}
							value={secondName}
						/>
					</div>
				</div>
				<div className='submit'>
					<button type='submit'>Calculate</button>
				</div>
			</form>
			<div>
				{fetchState.status === "failure" && (
					<span>
						<img alt='warning' src='/error-icon.svg' />
						<p>
							{" "}
							Whoa whoa whoa! Make sure none of the fields are empty, loverboy!
						</p>
					</span>
				)}
				{fetchState.status === "success" && <Result fetchState={fetchState} />}
			</div>
		</FormStyles>
	);
}

export default Form