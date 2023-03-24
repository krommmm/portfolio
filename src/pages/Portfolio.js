import booki from '../assets/projets/1_booki.png';
import omyfood from '../assets/projets/2_omyfood.png';
import la_panthere from '../assets/projets/3_la_panthere.png';
import kanap from '../assets/projets/4_kanap.png';
import piquantes from '../assets/projets/5_piquantes.png';
import groupomania from '../assets/projets/6_groupomania.png';
import vin from '../assets/projets/7_vin.png';
import gw from '../assets/projets/8_gw.png';
import kasa from '../assets/projets/kasa.png';
import { useEffect, useState } from 'react';

const Portfolio = () => {
	const [isTabletteOuMoins, setIsTabletteOuMoins] = useState(false);
	useEffect(() => {
		const diapo = document.querySelector('.diapo');
		const slide_container = document.querySelector('.projets');
		var slideWidth = diapo.getBoundingClientRect().width;

		if (
			document.querySelector('body').getBoundingClientRect().width < 1032
		) {
			setIsTabletteOuMoins(true);
		} else {
			setIsTabletteOuMoins(false);
		}

		const carret_left = document.querySelector('.fa-caret-left');
		const carret_right = document.querySelector('.fa-caret-right');

		var compteur = 0;
		var transfert = 0;

		//on clone la première image pour donner l'illusion d'un carousel
		var clone = slide_container.firstElementChild.cloneNode(true);
		if(isTabletteOuMoins){slide_container.appendChild(clone);};
		
		//On indique la largeur du grand rectangle qui contient tous les slides en fonction du nombre de slides (si on est sur desktop ou moins)
		slide_container.style.width = isTabletteOuMoins
			? `${slideWidth * slide_container.childElementCount}px`
			: `100%`;

		var numberProjects =
			document.querySelector('.projets').childElementCount;

		for (var i = 0; i < numberProjects; i++) {
			const nbSec = (i + 1) * 0.2;
			document.querySelector('.projets').childNodes[
				i
			].style.animationDelay = `${nbSec}s`;
		}

		carret_left.addEventListener('click', function goLeft() {
			compteur--;
			if (compteur < 0) {
				setTimeout(() => {
					slide_container.style.transition = '1ms';
					transfert = slideWidth * compteur;
					slide_container.style.transform = `translateX(${-transfert}px)`;
					slide_container.style.transition = '400ms';
					goLeft();
				}, 1);

				slide_container.style.transition = '0ms';
				compteur = slide_container.childElementCount - 1;
			}
			transfert = slideWidth * compteur;
			slide_container.style.transform = `translateX(${-transfert}px)`;
			console.log(compteur);
		});

		carret_right.addEventListener('click', function goRight() {
			compteur++;
			if (compteur === slide_container.childElementCount - 1) {
				setTimeout(() => {
					compteur = 0;
					slide_container.style.transition = '0ms';
					transfert = slideWidth * compteur;
					slide_container.style.transform = `translateX(${-transfert}px)`;
				}, 400);
			}

			console.log(compteur);
			slide_container.style.transition = '400ms';
			transfert = slideWidth * compteur;
			slide_container.style.transform = `translateX(${-transfert}px)`;
		});

		//Redemarage de la fenête à chaque fois que la taille de l'écran change (pour maj)
		window.onresize = () => {
			window.location.reload();
		};
	}, [isTabletteOuMoins]);
	return (
		<>
			<div className="portfolio">
				<div className="portfolio_container">
					<h2 className="titlePage">Some projects</h2>
					<div className="diapo">
						<div className="projets">
							<a href="https://bookitb.netlify.app/">
								<article>
									<p>Booki</p>
									<img src={booki} alt="projet_booki" />
								</article>
							</a>
							<a href="https://ohmyfoodtb.netlify.app/">
								<article>
									<p>OhMyFood</p>
									<img src={omyfood} alt="projet_booki" />
								</article>
							</a>
							<a href="https://lapantheretb.netlify.app/">
								<article>
									<p>La panthère</p>
									<img src={la_panthere} alt="projet_booki" />
								</article>
							</a>
							<a href="https://clonegamesworkshop.netlify.app/">
								<article>
									<p>Kanap</p>
									<img src={kanap} alt="projet_booki" />
								</article>
							</a>
							<a href="https://clonegamesworkshop.netlify.app/">
								<article>
									<p>Piquantes</p>
									<img src={piquantes} alt="projet_booki" />
								</article>
							</a>
							<a href="http://13.38.54.185:3000/">
								<article>
									<p>Groupomania</p>
									<img
										src={groupomania}
										alt="projet_groupomania"
									/>
								</article>
							</a>
							<a href="https://feteduvin.netlify.app/">
								<article>
									<p>Clone de la fête du vin</p>
									<img src={vin} alt="clone_fete_du_vin" />
								</article>
							</a>
							<a href="https://clonegamesworkshop.netlify.app/">
								<article>
									<p>Clone gameWorkshoop</p>
									<img src={gw} alt="clone_gamesworkshop" />
								</article>
							</a>
							<a href="https://kasatb.netlify.app/">
								<article>
									<p>Kasa</p>
									<img src={kasa} alt="projet_kasa" />
								</article>
							</a>
						</div>
						<i className="fa-solid fa-caret-left"></i>
						<i className="fa-solid fa-caret-right"></i>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
