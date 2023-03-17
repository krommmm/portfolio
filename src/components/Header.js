import { NavLink } from 'react-router-dom';
import '../styles/index.css';
import React from 'react';



const Header = () => {
	



	return (
		<>
			<div className="header">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? 'activeLink' : 'undefined'
					}
				>
					Home
				</NavLink>

				<NavLink
					to="/Skills"
					className={({ isActive }) =>
						isActive ? 'activeLink' : 'undefined'
					}
				>
					Skills
				</NavLink>
				<NavLink
					to="/Portfolio"
					className={({ isActive }) =>
						isActive ? 'activeLink' : 'undefined'
					}
				>
					Portfolio
				</NavLink>
				<NavLink
					to="/Contact"
					className={({ isActive }) =>
						isActive ? 'activeLink' : 'undefined'
					}
				>
					Contact 
				</NavLink>
				
			</div>
		</>
	);
};

export default Header;
