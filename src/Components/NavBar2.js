// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import 'Components/NavBar2.css';

// export const NavBar2 = () => {
// 	const [click, setClick] = useState(false);

// 	const handleClick = () => setClick(!click);
// 	return (
// 		<>
// 			<nav className='navbar'>
// 				<div className='nav-container'>
// 					<NavLink exact to='/' className='nav-logo'>
// 						HOME
// 					</NavLink>
// 					<ul className={click ? 'nav-menu .active' : 'nav-menu'}>
// 						<li className='nav-item'>
// 							<NavLink
// 								exact
// 								to='/art'
// 								activeClassName='active'
// 								className='nav-link'
// 								onClick={handleClick}
// 							>
// 								ART
// 							</NavLink>
// 						</li>
// 						<li className='nav-item'>
// 							<NavLink
// 								exact
// 								to='/cv'
// 								activeClassName='active'
// 								className='nav-link'
// 								onClick={handleClick}
// 							>
// 								CV
// 							</NavLink>
// 						</li>
// 						<li className='nav-item'>
// 							<NavLink
// 								exact
// 								to='/code'
// 								activeClassName='active'
// 								className='nav-link'
// 								onClick={handleClick}
// 							>
// 								CODE
// 							</NavLink>
// 						</li>
// 						<li className='nav-item'>
// 							<NavLink
// 								exact
// 								to='/sapasisters'
// 								activeClassName='active'
// 								className='nav-link'
// 								onClick={handleClick}
// 							>
// 								Sapa
// 							</NavLink>
// 						</li>
// 					</ul>
// 					<div className='nav-icon' onClick={handleClick}>
// 						<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
// 					</div>
// 				</div>
// 			</nav>
// 		</>
// 	);
// };
