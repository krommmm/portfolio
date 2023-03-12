import { NavLink } from 'react-router-dom';
import '../styles/index.css';
import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

const Header = () => {
	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

	var classNameButton = isDark ? 'fa-solid fa-moon' : 'fa-regular fa-sun';

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
					Contact G
				</NavLink>
				<div  onClick={toggleTheme}>
					<i className={classNameButton}></i>
				</div>
			</div>
		</>
	);
};

export default Header;
