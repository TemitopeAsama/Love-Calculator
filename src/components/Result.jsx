import React from 'react'
import { ResultStyles } from "../styles/ResultStyles";

const Result = ({fetchState}) => {
  return (
		<ResultStyles>
			<h1 className="score">Your Score: {fetchState.data.score}%</h1>
			<p className="message">{fetchState.data.message}</p>
		</ResultStyles>
	);
}

export default Result