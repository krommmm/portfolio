
import { NavLink } from 'react-router-dom';

const Home = () => {
	
	
	return (
		<>
			<div className="home" >
				<p><span class="dropFromLeft">Hi! I'm </span> <span class="green dropFromTop">Thibault Boutaud</span></p>
				<p><span class="dropFromLeft">Web</span> <span class="dropFromRight">developer</span></p>
				<p><span class="dropFromLeft">Front-end javascript</span> <span class="green"><span class="dropFromBot">&</span></span> <span class="dropFromRight">react</span></p>
				<NavLink to="/Portfolio">
					<button type="button" className="button">View my work</button>
				</NavLink>
			</div>
		</>
	);
};

export default Home;
