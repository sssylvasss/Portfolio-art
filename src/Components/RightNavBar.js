import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	li {
		padding: 18px 10px;
		color: #fc4103;
		&:hover {
			color: #fac78c;
			}
	}

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #fc4103;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		height: 100vh;
		width: 100px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		li {
			color: #fff;
				&:hover {
			color: #fac78c;
			}
		}

	}
`;

const NavLink = styled(Link)`
	color: #fc4103;
	text-decoration: none;
`


export const RightNavBar = ({ open }) => {
	return (
		<Ul open={open}>
			<NavLink to='/art'>
			<li>ART</li>
			</NavLink>
			<NavLink to='/cv'>
			<li>CV</li>
			</NavLink>
			<NavLink to='/sapasisters'>
			<li>SAPA</li>
			</NavLink>
			<NavLink to='/code'>
			<li>CODE</li>
			</NavLink>

		</Ul>
	);
};
