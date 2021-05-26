import React from 'react';
import styled from 'styled-components';

import { Burger } from './Burger';

const Nav = styled.nav`
	width: 100%;
	height: 100px;
	border-botton: 2px solid #f1f1f1;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		padding: 15px 0;
		font-size: 30px;
		font-weight: 600;
		color: #fc4103;
		font-family: 'Roboto Mono', monospace;
	}
	
`;

export const NavBar3 = () => {
	return (
		<Nav>
			<h1>YLVA LANDOFF LINDBERG</h1>
			<Burger />
		</Nav>
	);
};
