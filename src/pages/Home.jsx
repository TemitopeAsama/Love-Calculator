import React from 'react'
import Form from '../components/Form'
import { HomeStyles } from '../styles/HomeStyles';

const Home = ({
	firstName,
	setFirstName,
	secondName,
	setSecondName,
}) => {
	return (
		<HomeStyles>
			<div className='copy'>
				<p className='smaller__text'>
					Check out your love compatibility with your partner with my
				</p>
				<h1>Love Calculator</h1>
			</div>

			<Form
				firstName={firstName}
				secondName={secondName}
				setFirstName={setFirstName}
				setSecondName={setSecondName}
			/>
		</HomeStyles>
	);
};

export default Home