import { NavLink } from 'react-router-dom';
import '../styles/index.css';
import React from 'react';
import { useEffect } from 'react';

const Header = () => {
	//set le addEventListener après le montage du composant(sinon le return n'existe pas encore donc pas de selection)
	useEffect(() => {
		var sun = document.querySelector('.fa-sun');
		var moon = document.querySelector('.fa-moon');

		sun.addEventListener('click', reverseSun);
		moon.addEventListener('click', reverseMoon);

		function reverseSun() {
			if (sun.style.display !== 'none') {
				sun.style.display = 'none';
				moon.style.display = 'flex';
			}
		}

		function reverseMoon() {
			if (moon.style.display !== 'none') {
				moon.style.display = 'none';
				sun.style.display = 'flex';
			}
		}
	}, []);

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
				<i className="fa-solid fa-moon"></i>
				<i className="fa-regular fa-sun"></i>
			</div>
		</>
	);
};

export default Header;
