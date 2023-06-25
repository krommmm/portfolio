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
import api from '../assets/projets/api_recherche.png';
import calculatrice from '../assets/projets/calcu.png';
import diapo from '../assets/projets/carrousel.png';
import compteur from '../assets/projets/compteur.png';
import genCitations from '../assets/projets/genCitation.png';
import genPassword from '../assets/projets/genPassowrd.png';
import imc from '../assets/projets/imc.png';
import justePrix from '../assets/projets/justePrix.png';
import memory from '../assets/projets/memoryCard.png';
import meteo from '../assets/projets/meteo.png';
import minuteur from '../assets/projets/minuteur.png';
import morpion from '../assets/projets/morpion.png';
import netflix from '../assets/projets/netflix.png';
import pokedex from '../assets/projets/pokedex.png';
import ppc from '../assets/projets/PPC.png';
import saveTheme from '../assets/projets/saveTheme.png';
import scrollInfini from '../assets/projets/scrollInfini.png';
import todoList from '../assets/projets/todoList.png';
import tva from '../assets/projets/tva.png';
import shoppingList from "../assets/projets/shoppingList.png";


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
		{cuisine : cuisine},
		{api: api},
		{calculatrice:calculatrice},
		{diapo:diapo},
		{compteur:compteur},
		{genCitations:genCitations},
		{genPassword:genPassword},
		{imc:imc},
		{justePrix:justePrix},
		{memory:memory},
		{meteo:meteo},
		{minuteur:minuteur},
		{morpion: morpion},
		{netflix:netflix},
		{pokedex:pokedex},
		{ppc:ppc},
		{saveTheme:saveTheme},
		{scrollInfini:scrollInfini},
		{todoList:todoList},
		{tva:tva},
		{shoppingList: shoppingList}
	];

	const urls = [
		{booki:"https://bookitb.netlify.app/"},
		{omyfood: "https://ohmyfoodtb.netlify.app/"},
		{la_panthere: "https://lapantheretb.netlify.app/"},
		{kanap: "https://github.com/krommmm/kanap"},
		{piquantes: "https://github.com/krommmm/piiquantes"},
		{groupomania: "https://github.com/krommmm/groupomania"},
		{vin: "https://feteduvin.netlify.app/"},
		{gw: "https://clonegamesworkshop.netlify.app/"},
		{kasa: "https://kasatb.netlify.app/"},
		{cuisine: "https://cuisinefamille.net"},
		{api:"https://unrivaled-palmier-c3461a.netlify.app/"},
		{calculatrice:"https://zingy-alpaca-0d35ce.netlify.app/"},
		{diapo:"https://precious-gnome-937510.netlify.app/"},
		{compteur:"https://dynamic-churros-65a75a.netlify.app/"},
		{genCitations:"https://monumental-daifuku-b753f0.netlify.app/"},
		{genPassword:"https://tranquil-gelato-6d2d72.netlify.app/"},
		{imc:"https://enchanting-narwhal-9956a2.netlify.app/"},
		{justePrix:"https://majestic-mooncake-1126bd.netlify.app/"},
		{memory:"https://cute-kashata-0e8671.netlify.app/"},
		{meteo:"https://serene-jelly-c73543.netlify.app/"},
		{minuteur: "https://dynamic-griffin-4415a4.netlify.app/"},
		{morpion:"https://delicate-sherbet-560c87.netlify.app/"},
		{netflix:"https://idyllic-brigadeiros-32ba95.netlify.app/"},
		{pokedex:"https://delicate-kelpie-a58dd8.netlify.app/"},
		{ppc:"https://stellar-hamster-fbfad2.netlify.app/"},
		{saveTheme:"https://benevolent-cranachan-71b69d.netlify.app/"},
		{scrollInfini:"https://helpful-frangipane-7ca1f4.netlify.app/"},
		{todoList:"https://effortless-banoffee-37ca0b.netlify.app/"},
		{tva:"https://thriving-souffle-7e520e.netlify.app/"},
		{shoppingList: "https://ubiquitous-torte-ee76b1.netlify.app/"}
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
		{cuisine: "Cuisine"},
		{api: "RandomUser"},
		{calculatrice:"Calculatrice"},
		{diapo: "Diaporama"},
		{compteur:"Compteur de mots"},
		{genCitations:"Générateur de citations"},
		{genPassword: "Générateur de mdp"},
		{imc: "Calcul d'imc"},
		{justePrix: "Le juste prix"},
		{memory: "Jeu de mémoire"},
		{meteo: "Météo"},
		{minuteur: "Minuteur"},
		{morpion: "Jeu du morpion"},
		{netflix:"Clone netflix"},
		{pokedex: "Pokedex"},
		{ppc: "Pierre papier ciseaux"},
		{saveTheme:"Sauver un thème"},
		{scrollInfini: "Scroll infini"},
		{todoList: "Todo list"},
		{tva: "Calcul de la tva"},
		{shoppingList: "Shopping List"}
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
