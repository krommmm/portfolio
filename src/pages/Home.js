
import { NavLink } from 'react-router-dom';

const Home = () => {
	
	
	return (
		<>
			<div className="home" >
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
