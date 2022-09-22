import React from 'react'
import Form from '../components/Form'
import { HomeStyles } from '../styles/HomeStyles';

const Home = () => {
	return (
		<HomeStyles>
			<div className='copy'>
				<p className='smaller__text'>
					Check out your love compatibility with your partner with my
				</p>
				<h1>Love Calculator</h1>
			</div>

			<Form />
		</HomeStyles>
	);
};

export default Home