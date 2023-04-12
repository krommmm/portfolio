import booki from '../assets/projets/1_booki.png';
import omyfood from '../assets/projets/2_omyfood.png';
import la_panthere from '../assets/projets/3_la_panthere.png';
import kanap from '../assets/projets/4_kanap.png';
import piquantes from '../assets/projets/5_piquantes.png';
import groupomania from '../assets/projets/6_groupomania.png';
import vin from '../assets/projets/7_vin.png';
import gw from '../assets/projets/8_gw.png';
import kasa from '../assets/projets/kasa.png';
import cuisine from '../assets/projets/cuisine.png';
import { useEffect, useState } from 'react';
import Defilement from '../components/Defilement';
import Carousel from '../components/carousel';

const Portfolio = () => {

	const images = [
		{booki:booki},
		{omyfood:omyfood},
		{la_panthere:la_panthere},
		{kanap:kanap},
		{piquantes: piquantes},
		{groupomania:groupomania},
		{vin: vin},
		{vin: gw},
		{kasa: kasa},
		{cuisine : cuisine}
	];

	const urls = [
		{booki:"https://bookitb.netlify.app/"},
		{omyfood: "https://ohmyfoodtb.netlify.app/"},
		{la_panthere: "https://lapantheretb.netlify.app/"},
		{kanap: "https://github.com/krommmm/kanap"},
		{piquantes: "https://github.com/krommmm/piiquantes"},
		{groupomania: "http://13.38.54.185:3000/"},
		{vin: "https://feteduvin.netlify.app/"},
		{gw: "https://clonegamesworkshop.netlify.app/"},
		{kasa: "https://kasatb.netlify.app/"},
		{cuisine: "https://github.com/krommmm/cuisine"}
	];

	const texte = [
		{booki:"Booki"},
		{omyfood:"Omyfood"},
		{la_panthere:"La panthere"},
		{kanap:"Kanap"},
		{piquantes: "Piquantes"},
		{groupomania:"Groupomania"},
		{vin: "Clone fête du vin"},
		{vin: "Clone GamesWorkshop"},
		{kasa: "Kasa"},
		{cuisine: "Cuisine"}
	];

	const [isTabletteOuMoins, setIsTabletteOuMoins] = useState(false);
	useEffect(() => {
		//Si la largeur de l'écran est inférieur à 1032px lance le carousel
		if (
			document.querySelector('body').getBoundingClientRect().width < 1032
		) {
			setIsTabletteOuMoins(true);
		} else {
			setIsTabletteOuMoins(false);
		}

		

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
			
					{!isTabletteOuMoins && <Defilement images={images} urls={urls} texte={texte} />}
					{isTabletteOuMoins && <Carousel images={images} urls={urls} texte={texte} />}
				</div>
			</div>
		</>
	);
};

export default Portfolio;
