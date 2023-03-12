
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

const Home = () => {
	const [{ theme }] = useContext(ThemeContext);
	
	return (
		<>
			<div className="home" style={{backgroundColor:theme.backgroundColor, color:theme.color}}>
				<p>Hello</p>
				<p>I'm web developer</p>
				<p>Front-end js/react</p>
				<NavLink to="/Portfolio">
					<button type="button" className="button">Voir mon travail</button>
				</NavLink>
			</div>
		</>
	);
};

export default Home;
