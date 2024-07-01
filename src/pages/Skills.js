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
										<p>
											Du site vitrine, en passant par des
											applications comme 
											l'e-commerce, la réservation, la
											mise en place d'API sécurisées.
										</p>
										<p>
											Mon engagement envers l'excellence
											technique garantit la réalisation
											réussie de projets variés, alignés
											sur les exigences spécifiques de
											chaque domaine d'activité.
										</p>
									</div>
								</div>
								<div className={isDark ? 'uk' : 'fr'}>
									<h3>Development Experience</h3>
									<div className="texte">
										<p>
											From showcase websites to more
											complex projects such as e-commerce,
											reservations, implementation of
											secure APIs, and the development of
											custom applications.
										</p>
										<p>
											My commitment to technical
											excellence ensures the successful
											completion of diverse projects,
											aligned with the specific
											requirements of each business
											domain.
										</p>
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
