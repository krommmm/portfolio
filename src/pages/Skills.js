import { NavLink } from 'react-router-dom';

import html from '../assets/html.png';
import css from '../assets/css.png';
import sass from '../assets/sass.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mdb.png';
import php from '../assets/php.png';
import mysql from '../assets/mysql.png';
import phpmyadmin from '../assets/phpmyadmin.png';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import typescript from '../assets/typescript.svg';
import jest from '../assets/jest.png';
import npm from '../assets/npm.png';
import github from '../assets/github.png';
import debian from '../assets/debian.jpg';
import aws from '../assets/aws.png';
import ovh from '../assets/ovh.jpg';

import planet from '../assets/new/planet.png';
import invader from '../assets/new/invader.png';

import postman from '../assets/postman.png';
import wave from '../assets/wave.webp';
import lighthouse from '../assets/lighthouse.png';

import express from '../assets/express.png';
import webpack from '../assets/webpack.png';

const Skills = () => {
	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

	useEffect(() => {
		const slide_container = document.querySelectorAll('.mySkills');
		slide_container.forEach((slide) => {
			const numberProjects = slide.childElementCount;

			//fonction pour le défilement des slides
			for (let i = 0; i < numberProjects; i++) {
				const nbSec = (i + 1) * 0.1;
				slide.childNodes[i].style.animationDelay = `${nbSec}s`;
			}
		});
	}, []);

	return (
		<>
			<div className="skills">
				<div className="titre_skill">
					<div className={isDark ? 'uk' : 'fr'}>
						<h2 className="titlePage">GET TO KNOW ME! </h2>
					</div>
					<div className={isDark ? 'fr' : 'uk'}>
						<h2 className="titlePage">APPRENEZ A ME CONNAITRE !</h2>
					</div>
				</div>
				<div className={isDark ? 'uk' : 'fr'}>
					<NavLink to="/Contact">
						<button type="button" className="button">
							Contact me
						</button>
					</NavLink>
				</div>
				<div className={isDark ? 'fr' : 'uk'}>
					<NavLink to="/Contact">
						<button type="button" className="button">
							Me contacter
						</button>
					</NavLink>
				</div>
				<div className="skill_container">
					<div className="skills_left">
						<div className="skills_text">
							<div className="left">
								<div className={isDark ? 'fr' : 'uk'}>
									<h3>Un développeur web passionné</h3>
									<div className="texte">
										<p>
											Développeur web
											passionné, je souhaiterai acquérir de nouvelles expériences professionnelles afin d'enrichir mes compétences et
											contribuer au développement des
											projets de l'entreprise.
										</p>
										<p>
											Ma passion pour le développement web
											commence en 2022 et m'a demandé un
											changement radical de cursus afin de
											pouvoir pleinement l'exploiter.
										</p>
										<p>
											Dès lors, je mis tout en oeuvre pour
											percer dans cette voie, tout en
											prenant du plaisir sur les divers
											projets développés.
										</p>
									</div>
								</div>
								<div className={isDark ? 'uk' : 'fr'}>
									<h3>A Passionate Web Developer</h3>
									<div className="texte">
										<p>
											Passionate web
											developer with a solid background in
											web development, I am seeking a
											position to apply my skills and
											contribute to the company's project
											development.
										</p>
										<p>
											My passion for web development began
											in 2022, leading to a radical change
											in my academic path to fully harness
											it.
										</p>
										<p>
											Since then, I have dedicated myself
											to excelling in this field while
											enjoying the various projects I have
											worked on.
										</p>
									</div>
								</div>
							</div>
							<div className="center">
								<div className="mySkills">
									<img src={html} alt="" />
									<img src={css} alt="" />
									<img src={js} alt="" />
									<img src={react} alt="" />
									<img src={redux} alt="" />
									<img src={nodejs} alt="" />
									<img src={php} alt="" />
									<img src={mongodb} alt="" />
									<img src={typescript} alt="" />
									<img src={jest} alt="" />
									<img src={npm} alt="" />
									<img src={github} alt="" />
									<img src={postman} alt="" />
									<img src={wave} alt="" />
									<img src={lighthouse} alt="" />
									<img src={webpack} alt="" />
								</div>
							</div>
							<div className="right">
								<div className={isDark ? 'fr' : 'uk'}>
									<h3>Expérience en développement</h3>
									<div className="texte">
										<p>Ma maîtrise de la POO et de la PF me permet de créer des applications modulaires, réutilisables et faciles à maintenir. J'ai travaillé avec des langages comme js et php, appliquant des concepts avancés comme l'héritage, le polymorphisme et les fonctions pures.</p>
										<p>En PHP, j'ai développé de nombreuses applications web en utilisant le modèle MVC ce qui m'a permis de structurer le code de manière claire et maintenable. J'ai également conçu et implémenté des API RESTful, facilitant une communication efficace entre les services.</p>
										<p>Avec Node.js et Express, j'ai construit des applications serveur performantes et évolutives. Ma gestion des routes, des middlewares et des requêtes HTTP avec Express m'a permis de créer des API RESTful et des applications web en temps réel.</p>
										<p>J'ai une expérience pratique dans la gestion et le déploiement d'applications sur des serveurs mutualisés, optimisant les performances et la sécurité. De plus, j'ai administré des SPV, assurant des solutions performantes et sécurisées.</p>
										<p>Je code souvent en vanilla, mais j'ai également réalisé plusieurs projets avec React. J'ai développé des interfaces utilisateur dynamiques et réactives, en utilisant les composants, les hooks et Redux pour la gestion d'état. L'intégration des API et l'optimisation des performances sont également au cœur de mon travail.</p>
										<p>Enfin, j'adhère fermement aux principes SOLID et aux pratiques de Clean Code. Je suis convaincu que la lisibilité et la simplicité du code sont essentielles pour une maintenance à long terme et une collaboration efficace en équipe.</p>
								
									</div>
								</div>
								<div className={isDark ? 'uk' : 'fr'}>
									<h3>Development Experience</h3>
									<div className="texte">
										<p>My mastery of OOP and FP allows me to create modular, reusable, and maintainable applications. I have worked with languages like JavaScript and PHP, applying advanced concepts such as inheritance, polymorphism, and pure functions.</p>
										<p>In PHP, I have developed numerous web applications using the MVC model, which has allowed me to structure the code in a clear and maintainable way. I have also designed and implemented RESTful APIs, facilitating effective communication between services.</p>
										<p>With Node.js and Express, I have built high-performance and scalable server applications. My management of routes, middleware, and HTTP requests with Express has enabled me to create RESTful APIs and real-time web applications.</p>
										<p>I have practical experience in managing and deploying applications on shared servers, optimizing performance and security. Additionally, I have administered VPS, ensuring high-performing and secure solutions.</p>
										<p>I often code in vanilla, but I have also completed several projects with React. I have developed dynamic and responsive user interfaces using components, hooks, and Redux for state management. API integration and performance optimization are also at the core of my work.</p>
										<p>Finally, I firmly adhere to SOLID principles and Clean Code practices. I believe that code readability and simplicity are essential for long-term maintenance and effective team collaboration.</p>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
