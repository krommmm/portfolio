
import { NavLink } from 'react-router-dom';
import {useContext} from "react";
import {ThemeContext} from '../context/Theme';
const Home = () => { 

	const [{theme, isDark},toggleTheme] = useContext(ThemeContext);
	

	return (
		<>
			<div className="home" >
				<div className="left">
				<div className={isDark ?  "uk" : "fr"} >
				<p><span className="dropFromLeft">Hi! I'm </span> <span className="green dropFromTop">Thibault Boutaud</span></p>
				<p><span className="dropFromLeft">Web</span> <span className="dropFromRight">developer</span></p>
				<p><span className="dropFromLeft">Front-end javascript</span> <span className="green"><span className="dropFromBot">&</span></span> <span className="dropFromRight">react</span></p>
				<NavLink to="/Portfolio">
					<button type="button" className="button">View my work</button>
				</NavLink>
				</div> 
				<div className={isDark ?  "fr" : "uk"} >
				<p><span className="dropFromLeft">Bonjour! Je suis </span> <span className="green dropFromTop">Thibault Boutaud</span></p>
				<p><span className="dropFromLeft">Développeur</span> <span className="dropFromRight">web</span></p>
				<p><span className="dropFromLeft">Front-end javascript</span> <span className="green"><span className="dropFromBot">&</span></span> <span className="dropFromRight">react</span></p>
				<NavLink to="/Portfolio">
					<button type="button" className="button">Voir mon travail</button>
				</NavLink>
				</div>
				</div>
			</div>
		
		</>
	);
};

export default Home;
