
import html from '../assets/html.png';
import css from '../assets/css.png';
import sass from '../assets/sass.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mdb.webp';
import { useEffect } from "react";



const Skills = () => {

//Changer le nombre de skills en conséquence lors de l'ajout (8)
	useEffect(()=>{
		var frontend_skills_nb = document.querySelector('.frontend_skills').childElementCount;
		
		for(var i=0;i<frontend_skills_nb;i++){
			var number = (i+1)*0.1;
		document.querySelector(".frontend_skills").childNodes[i].style.animationDelay=`${number}s`;
		}
	
	},[]);


	return (
		<>
			<div className="skills">
				<div className="skills_left">
				<h2 className="titlePage">Get to know me! </h2>
				<div className="skills_text">
					<p>

I'm a <strong className="green">Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong className="green">Projects</strong> section.

I also like sharing content related to the stuff that I have learned over the years in <strong className="green">Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming

I'm open to <strong className="green">Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong className="green">contact</strong> me.
</p>
				</div>
				</div>
				<div className="skills_right">
				<div className="skills_container">
					<h2 className="titlePage">What i do </h2>
					<div className="frontend_skills">
						<article >
							<img src={html} alt="html_icon" />
							<p>HTML</p>
						</article>
						<article >
							<img src={css} alt="css_icon" />
							<p>CSS</p>
						</article>
						<article >
							<img src={sass} alt="sass_icon" />
							<p>SASS</p>
						</article>
						<article >
							<img src={js} alt="js_icon" />
							<p>JS</p>
						</article>
						<article >
							<img src={react} alt="react_icon" />
							<p>REACT</p>
						</article>
						<article >
							<img src={redux} alt="redux_icon" />
							<p>REDUX</p>
						</article>

						<article >
							<img src={nodejs} alt="nodejs_icon" />
							<p>NODEJS</p>
						</article>

						<article >
							<img src={mongodb} alt="mongodb_icon" />
							<p>mongodb</p>
						</article>
					</div>
				</div>
				</div>

				
			</div>
		</>
	);
};

export default Skills;
