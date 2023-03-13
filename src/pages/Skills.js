import html from '../assets/html.png';
import css from '../assets/css.png';
import sass from '../assets/sass.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mdb.webp';

import git from '../assets/git.png';
import github from '../assets/github.png';
import postman from '../assets/postman.png';
import npm from '../assets/npm.png';
import vscode from '../assets/vscode.png';
import lighthouse from '../assets/lighthouse.png';
import wave from '../assets/wavelogo.svg';


import { useContext } from 'react';
import { ThemeContext } from '../context/Theme'
	


const Skills = () => {
	const [{ theme }] = useContext(ThemeContext); 
	return (
		<>
			<div className="skills" style={{backgroundColor:theme.backgroundColor, color:theme.color}}>
				<h2 className="button">Front-end</h2>
				<div className="frontend_skills">
					<article>
						<img src={html} alt="html_icon" />
						<p>HTML</p>
					</article>
					<article>
						<img src={css} alt="css_icon" />
						<p>CSS</p>
					</article>
					<article>
						<img src={sass} alt="sass_icon" />
						<p>SASS</p>
					</article>
					<article>
						<img src={js} alt="js_icon" />
						<p>JS</p>
					</article>
					<article>
						<img src={react} alt="react_icon" />
						<p>REACT</p>
					</article>
					<article>
						<img src={redux} alt="redux_icon" />
						<p>REDUX</p>
					</article>
				</div>
				<h2 className="button">Back-end</h2>
				<div className="backend_skills">
					<article>
						<img src={nodejs} alt="nodejs_icon" />
						<p>NODEJS</p>
					</article>

					<article>
						<img src={mongodb} alt="mongodb_icon" />
						<p>mongodb</p>
					</article>
				</div>
				<h2 className="button">Autres environements</h2>
				<div className="autres_environements">
					<article>
						<img src={git} alt="git_icon" />
						<p>git</p>
					</article>
					<article>
						<img src={github} alt="github_icon" />
						<p>github</p>
					</article>
					<article>
						<img src={npm} alt="npm_icon" />
						<p>npm</p>
					</article>
					<article>
						<img src={vscode} alt="vsc_icon" />
						<p>vsccode</p>
					</article>
					<article>
						<img src={lighthouse} alt="lighthouse_icon" />
						<p>lighthouse</p>
					</article>
					<article>
						<img src={postman} alt="postman_icon" />
						<p>postman</p>
					</article>
					<article>
						<img src={wave} alt="wave_icon" />
						<p>wave</p>
					</article>
				</div>
			</div>
		</>
	);
};

export default Skills;
