import React from 'react'
import { Link } from "react-router-dom";
import { HeaderStyles } from '../styles/HeaderStyles';

const Header = () => {
  return (
		<HeaderStyles>
			<h2>Love-<span>O-meter</span></h2>
			<Link to='/history'>History</Link>
		</HeaderStyles>
	);
}

export default Header