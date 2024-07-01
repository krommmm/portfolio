import { NavLink } from 'react-router-dom';
import '../styles/index.css';
import React from 'react';
import { useEffect } from 'react';
import fr from '../assets/flags/fr.svg';
import uk from '../assets/flags/uk.svg';
import { useContext } from "react";
import { ThemeContext } from '../context/Theme';


const Header = () => {



	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);



	useEffect(() => {
		// Gestionnaire d'évènement qui change la classe de la nav bar
		window.addEventListener('scroll', () => {
			const nav = document.querySelector('.header');
			if (window.scrollY >= 100) {
				nav.classList.add('nav__black');
			} else {
				nav.classList.remove('nav__black');
			}
		});
	}, []);
	return (
		<>
			<header>
				<div className="headerTop">
				<div className={isDark ? "uk" : "fr"} >
						<img
							src={fr}
							onClick={toggleTheme}
							className="uk_flag"
							alt="drapeau uk"
						/>
					</div>
					<div className={isDark ? "fr" : "uk"} >
						<img
							src={uk}
							onClick={toggleTheme}
							className="fr_flag"
							alt="drapeau fr"
						/>
					</div>
				</div>
				<div className="header">
					<NavLink id="home"
						to="/"
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'undefined'
						}
					>
						<div className={isDark ? "uk cool" : "fr cool"}  >Home</div>
						<div className={isDark ? "fr cool" : "uk cool"} >Accueil</div>

					</NavLink>

					<NavLink id="skills"
						to="/About"
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'undefined'
						}
					>
						<div className={isDark ? "uk" : "fr"} >About</div>
						<div className={isDark ? "fr" : "uk"} >A-propos</div>
					</NavLink>
					<NavLink id="project"
						to="/Portfolio"
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'undefined'
						}
					>
						<div className={isDark ? "uk" : "fr"} >Portfolio</div>
						<div className={isDark ? "fr" : "uk"} >Projets</div>
					</NavLink>
					<NavLink id="contact"
						to="/Contact"
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'undefined'
						}
					>
						Contact
					</NavLink>
			
				</div>
			</header>
		</>
	);
};

export default Header;
