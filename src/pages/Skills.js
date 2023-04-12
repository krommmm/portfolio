import html from '../assets/html.png';
import css from '../assets/css.png';
import sass from '../assets/sass.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mdb.webp';
import Defilement from '../components/Defilement';


const Skills = () => {
	const images = [
		{ html: html },
		{ css: css },
		{ sass: sass },
		{ js: js },
		{ react: react },
		{ redux: redux },
		{ nodejs: nodejs },
		{ mongodb: mongodb },
	];
	const urls = [
		{ booki: undefined },
		{ omyfood: undefined },
		{ la_panthere: undefined },
		{ kanap: undefined },
		{ piquantes: undefined },
		{ groupomania: undefined },
		{ vin: undefined },
		{ gw: undefined },
		{ kasa: undefined },
	];

	const texte = [
		{ booki: 'Booki' },
		{ omyfood: 'Omyfood' },
		{ la_panthere: 'La panthere' },
		{ kanap: 'Kanap' },
		{ piquantes: 'Piquantes' },
		{ groupomania: 'Groupomania' },
		{ vin: 'Clone fête du vin' },
		{ vin: 'Clone GamesWorkshop' },
		{ kasa: 'Kasa' },
	];

	return (
		<>
			<div className="skills">
				<div className="skills_left">
					<h2 className="titlePage">Get to know me! </h2>
					<div className="skills_text">
						<p>
							I'm a{' '}
							<strong className="green">
								Frontend Web Developer
							</strong>{' '}
							building the Front-end of Websites and Web
							Applications that leads to the success of the
							overall product. Check out some of my work in the{' '}
							<strong className="green">Projects</strong> section.
							I also like sharing content related to the stuff
							that I have learned over the years in{' '}
							<strong className="green">Web Development</strong>{' '}
							so it can help other people of the Dev Community.
							Feel free to Connect or Follow me on my Linkedin
							where I post useful content related to Web
							Development and Programming I'm open to{' '}
							<strong className="green">Job</strong> opportunities
							where I can contribute, learn and grow. If you have
							a good opportunity that matches my skills and
							experience then don't hesitate to{' '}
							<strong className="green">contact</strong> me.
						</p>
					</div>
				</div>
				<div className="skills_right">
					<div className="skills_container">
						<h2 className="titlePage">What i do </h2>

						<Defilement images={images} urls={urls} texte={texte} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
