import { useEffect, useState, useRef } from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import ConsoleProjects from '../components/ConsoleProjects';
import Projects from '../components/Projects';
import gw from '../assets/projets/8_gw.png';
import darkGw from '../assets/projets/darkGw.png';
import cuisine from '../assets/projets/cuisine.webp';
import darkCuisine from '../assets/projets/darkCuisine.webp';
import netflix from '../assets/projets/netflix.webp';
import dNet from '../assets/projets/dark_netflix.webp';
import kasa from '../assets/projets/kasa.png';
import cocktailExpress from '../assets/projets/cocktailExpress.png';
import dShoppingList from '../assets/projets/dShopingList.png';
import groupomania from '../assets/projets/6_groupomania.png';
import dGroupo from '../assets/projets/dGroupo.png';
import dEnvieBretonne from '../assets/projets/dEnvieBretonne.png';
import booking from '../assets/projets/booking.png';
import dBooking from '../assets/projets/dBooking.png';
import todoMulti from '../assets/projets/todoList.PNG';
import trendTangle from "../assets/projets/trendtangle.png";
import boxRevision from "../assets/projets/boxRevision.png";
import game_memo from "../assets/projets/game_memo.png";
import memory_words from "../assets/projets/memory_words.png";

const Portfolio = () => {
	const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
	const [numero, setNumero] = useState(1);
	const [myArray, setMyArray] = useState();
	const [change, setChange] = useState(false);

	let array1 = [];

	useEffect(() => {
		const newData = [
			{
				nomDuProjet: 'Site de recette de cuisine',
				details: {
					nameFr: 'Creation et recherche de recettes',
					nameUk: 'Create & research recipes',
					descriptionFr:
						"Création d'une application pour des recettes de cuisine",
					descriptionUk:
						'Creation of an application for cooking recipes',
					images: { net: cuisine, dark: darkCuisine },
					github: 'https://github.com/krommmm/cuisine',
					url: 'https://cuisinefamille.net',
					isSiteWebActive: false,
					infoFr: `Projet MERN. Serveur node.js , API restful, crud pour utilisateur et recettes.
					Front avec react, create-react-app.
					Des recettes sont affichées et une barre de recherche permet de trier les recettes par nom, ingrédients ou tags.
					Une connexion sécurisée permet de se crééer un compte et de crud les recettes selons ses droits.`,
					infoUk: `MERN Project. Node.js server, RESTful API, CRUD for users and recipes.
					Frontend built with React, create-react-app.
					Recipes are displayed, and a search bar allows sorting recipes by name, ingredients, or tags.
					A secure connection enables users to create an account and perform CRUD operations on recipes based on their permissions.`,
				},
				texte: ['REACT', 'API MERN', 'VPS', 'LINUX'],
			},
			{
				nomDuProjet: `Integration web`,
				details: {
					nameFr: ' clone gameworkshop',
					nameUk: "gameworkshop's clone",
					descriptionFr:
						"Intégation de la page d'accueil du site web games workshop",
					descriptionUk:
						'Integration of the homepage of the Games Workshop website',
					images: { net: gw, dark: darkGw },
					github: 'https://github.com/krommmm/clone_games_workshop',
					isSiteWebActive: true,
					url: 'https://clonegamesworkshop.netlify.app/',
					infoFr: "Intégration de la page d'accueil du site web 'games workshop'. Le projet a été réalisé avec webpack et est axé sur la maîtrise des flex-box, du positionnement et autres propriétés css, ainsi que sur les animations.",
					infoUk: "Integration of the homepage of the 'Games Workshop' website. The project was developed using webpack and focuses on mastering flexbox, positioning, and other CSS properties, as well as incorporating animations.",
				},
				texte: ['HTML', 'JS', 'SCSS'],
			},
			{
				nomDuProjet: 'trieuse de film',
				details: {
					nameFr: 'Clone de netflix',
					nameUk: "Netflix's clone",
					descriptionFr:
						'Application qui créer des fiches de films, inspiré de netflix',
					descriptionUk:
						'application that create forms inspired by netflix',
					images: { net: netflix, dark: dNet },
					github: 'https://github.com/krommmm/app_creation_fiches_cine.git',
					url: '#',
					isSiteWebActive: false,
					infoFr: `Application dont le design est inspiré de Netflix. Un formulaire permet de s'inscrire et de se connecter à une base de données. Une page remplit des fiches de films (titre, image, genre, etc...). Et une autre permet de sélectionner une fiche et d'effectuer une recherche par nom. Les fiches donnent des renseignements sur le film et permettent d'afficher les réalisateurs communs ainsi que de visualiser le film.`,
					infoUk: `Application with a design inspired by Netflix. A form allows users to register and log in to a database. One page fills out movie cards (title, image, genre, etc.). And another one allows selecting a card and performing a search by name. The cards provide information about the movie and allow displaying common directors as well as watching the movie.`,
				},
				texte: ['JS', 'NodeJs'],
			},
			// {
			// 	nomDuProjet: 'vin',
			// 	details: {
			// 		nameFr: 'Fête du vin',
			// 		nameUk: 'Wine party',
			// 		descriptionFr: 'Intégration de bordeaux fête le vin',
			// 		descriptionUk: "Integration of 'bordeaux fête le vin'",
			// 		images: { net: vin, dark: dMemo },
			// 		github: 'https://github.com/krommmm/clone_fete_du_vin',
			// 		url: 'https://feteduvin.netlify.app/',
			// 		isSiteWebActive: true,
			// 		infoFr: `Site vitrine axé sur le positionnement des éléments ainsi que sur les animations.`,
			// 		infoUk: `Showcase website focused on the positioning of elements as well as animations.`,
			// 	},
			// 	texte: ['HTML', 'CSS', 'JS', 'WEBPACK'],
			// },
			{
				nomDuProjet: 'Application e-commerce React',
				details: {
					nameFr: 'Trendtangle',
					nameUk: 'Trendtangle',
					descriptionFr: 'Site e-commerce',
					descriptionUk: "e-commerce web-site'",
					images: { net: trendTangle, dark: trendTangle },
					github: 'https://github.com/krommmm/trendtangle.git',
					url: 'https://trendtangle.netlify.app/',
					isSiteWebActive: true,
					infoFr: `Cette application e-commerce propose un service d'authentification permettant de distinguer les administrateurs, les membres inscrits et les simples visiteurs. Elle intègre des fonctionnalités de likes, des opérations CRUD sur les articles et les catégories, la configuration et la gestion des promotions ainsi que des offres limitées dans le temps. De plus, elle permet la gestion d'un panier d'achat et offre une fonctionnalité de recherche avancée pour trouver des produits. Le serveur, développé en PHP, fonctionne comme une API RESTful, tandis que le frontend utilise React avec des composants, des hooks et des remontées d'état.`,
					infoUk: `This e-commerce application offers an authentication service that distinguishes between administrators, registered members, and casual visitors. It includes features such as likes, CRUD operations on articles and categories, the configuration and management of promotions, as well as time-limited offers. Additionally, it allows for shopping cart management and provides an advanced search feature to find products. The server, developed in PHP, operates as a RESTful API, while the frontend uses React with components, hooks, and state lifting.`,
				},
				texte: ['HTML', 'CSS', 'JS', 'REACT', 'PHP'],
			},
			{
				nomDuProjet: 'kasa',
				details: {
					nameFr: "Application d'hébergement",
					nameUk: 'Host app',
					descriptionFr: "Intégration d'une maquette avec react",
					descriptionUk: 'Integration with react',
					images: { net: kasa },
					github: 'https://github.com/krommmm/kasa',
					url: 'https://kasatb.netlify.app/',
					isSiteWebActive: true,
					infoFr: `Front react avec create-react-app.
					Une page d'accueil avec des logements.
					Une page de focus sur un logement avec ses spécificités.`,
					infoUk: `Frontend with React using create-react-app.
					A homepage featuring accommodations.
					A detailed page highlighting specific information about a single accommodation.`,
				},
				texte: ['react'],
			},
			// {
			// 	nomDuProjet: 'Application e-commerce PF',
			// 	details: {
			// 		nameFr: 'Site e-commerce',
			// 		nameUk: 'E-commerce web site',
			// 		descriptionFr: 'Application e-commerce',
			// 		descriptionUk: 'App e-commerce',
			// 		images: { net: cocktailExpress, dark: dShoppingList },
			// 		github: 'https://github.com/krommmm/app_PF_e-commerce_cocktailExpress.git',
			// 		url: 'https://cocktailsexpress.netlify.app',
			// 		isSiteWebActive: true,
			// 		infoFr: "Un serveur php stocke les articles. Les articles sont ajoutables dans un panier avec des opérations CRUD, comprenant le calcul des prix et des quantités. Les produits sont affichés dynamiquement à l'aide de requêtes HTTP et d'URLs. Le panier est une clé dans le localStorage. L'architecture est découpée en modules (fonctions, requêtes, index).",
			// 		infoUk: 'php server stores articles. Articles can be added to a cart with CRUD operations, including price and quantity calculations. Products are dynamically displayed using HTTP requests and URLs. The cart is a key in the localStorage. The architecture is divided into modules (functions, requests, index).',
			// 	},
			// 	texte: ['JS', 'STORAGE', 'php', 'webpack'],
			// },
			{
				nomDuProjet: 'Memory_cards',
				details: {
					nameFr: 'Jeu de carte mémoire',
					nameUk: 'Memory card game',
					descriptionFr: 'Jeu de carte mémoire',
					descriptionUk: 'Memory card game',
					images: { net: game_memo, dark: game_memo },
					github: 'https://github.com/krommmm/jeu_memoryCards.git',
					url: 'https://cute-kashata-0e8671.netlify.app/',
					isSiteWebActive: true,
					infoFr: "Jeu de carte mémoire écrit en procédurale.",
					infoUk: 'Memory card game written in procedural style',
				},
				texte: ['JS', 'STORAGE', 'webpack'],
			},
			{
				nomDuProjet: 'Learn english',
				details: {
					nameFr: "Application pour apprendre l'anglais",
					nameUk: "Application to learn english",
					descriptionFr: "Application pour apprendre l'anglais",
					descriptionUk: "Application to learn english",
					images: { net: memory_words, dark: memory_words },
					github: 'https://github.com/krommmm/memory_words.git',
					url: 'https://memorywords.netlify.app',
					isSiteWebActive: true,
					infoFr: "Application pour apprendre l'anglais écrit en js poo.",
					infoUk: 'Application to learn english, written in js poo',
				},
				texte: ['JS', 'STORAGE', 'POO'],
			},
			{
				nomDuProjet: 'Blog',
				details: {
					nameFr: 'Groupomania',
					nameUk: 'Groupomania',
					descriptionFr: 'Réseau social interne',
					descriptionUk: 'Internal social network',
					images: { net: groupomania, dark: dGroupo },
					github: 'https://github.com/krommmm/groupomania',
					url: '#',
					isSiteWebActive: false,
					infoFr: `App MERN. Serveur node.js, Api RESTful pour connexion sécurisée des utilisateurs crud content.
					Front react create-react-app.
					Un utilisateur créer un identifiant, se connecte, poste(texte/images), commente, like.`,
					infoUk: `MERN App. Node.js server, RESTful API for secure user authentication and CRUD operations on content.
					Frontend built with React, using create-react-app.
					A user creates an account, logs in, posts text/images, comments, and likes.`,
				},
				texte: ['REACT', 'API MERN'],
			},
			{
				nomDuProjet: 'Agenda pour liste de tâche',
				details: {
					nameFr: 'Todo list',
					nameUk: 'Todo list',
					descriptionFr: 'Application en POO todo list avec agenda,',
					descriptionUk: 'Todo list POO app with a calendar',
					images: { net: todoMulti, dark: dEnvieBretonne },
					github: 'https://github.com/krommmm/todolist_public',
					url: 'https://todolistmulti.netlify.app/',
					isSiteWebActive: true,
					infoFr: `La date est détectée.
					Un calendrier est créé d'aujourd'hui à dans 2 ans.
					Des boutons sont sous écoute d'événements.
					Ils affichent des listes dynamiquement.
					D'autres événements gèrent l'input, la modification et la suppression.`,
					infoUk: `The date is detected.
					A calendar is created from today to 2 years from now.
					Buttons are listening for events.
					They dynamically display lists.
					Other events handle input, modification, and deletion.`,
				},
				texte: ['HTML', 'CSS', 'JS', 'Webpack'],
			},
			{
				nomDuProjet: 'Application de réservation',
				details: {
					nameFr: 'Booking',
					nameUk: 'Booking',
					descriptionFr: 'Application qui réserve un logement',
					descriptionUk: 'App that books a dwelling',
					images: { net: booking, dark: dBooking },
					github: 'https://github.com/krommmm/Booking',
					url: 'https://stalwart-brigadeiros-4907a9.netlify.app',
					isSiteWebActive: true,
					infoFr: `Site de réservation pour des logements. Un agenda permet de sélectionner un créneau et les logements disponibles sont affichés. Ensuite, le client peut effectuer la réservation.`,
					infoUk: `Booking website for accommodations. An agenda allows selecting a time slot, and available accommodations are displayed. Then, the client can make the reservation.`,
				},
				texte: ['JS', 'WebPack', 'Babel', 'Jest'],
			},
			{
				nomDuProjet: 'Application de flashCards',
				details: {
					nameFr: 'Creation de cartes mémoires',
					nameUk: 'Create flash cards',
					descriptionFr:
						"Création d'une application pour des cartes mémoires",
					descriptionUk:
						'Creation of an application for flash cards',
					images: { net: boxRevision, dark: darkCuisine },
					github: 'https://github.com/krommmm/box_revision',
					url: 'https://boxrevision.netlify.app/',
					isSiteWebActive: true,
					infoFr: `Projet en JS vanilla POO. L'application permet d'enregistrer des leçons à réviser et de les afficher selon le principe de la répétition espacée.`,
					infoUk: `Project in vanilla JS OOP. The application allows you to record lessons to review and display them according to the principle of spaced repetition.`
				},
				texte: ['Js', 'localStorage', 'POO'],
			}
		];

		const getNewArray = (numero) => {
			let data1 = ['Agenda pour liste de tâche', 'Application e-commerce React', 'Memory_cards'];
			let data2 = ['Learn english', 'Application de flashCards', 'Integration web'];
			let data3 = ['Site de recette de cuisine', 'Blog', 'trieuse de film'];

			let array;

			switch (numero) {
				case 1:
					array = data1;
					break;
				case 2:
					array = data2;
					break;
				case 3:
					array = data3;
					break;
				default:
					array = data1;
			}

			let newArray = [];
			for (let i = 0; i < newData.length; i++) {
				if (array.includes(newData[i].nomDuProjet)) {
					newArray.push(newData[i]);
				}
			}
			return newArray;
		};

		array1 = getNewArray(numero);
		setMyArray(array1);
	}, [numero]);

	return (
		<>
			<div className="portfolio">
				<div className="portfolio_container">
					<div className="title_container">
						<div className={isDark ? 'uk' : 'fr'}>
							<h2 className="titlePage">SOME PROJECTS</h2>
						</div>
						<div className={isDark ? 'fr' : 'uk'}>
							<h2 className="titlePage">QUELQUES PROJETS</h2>
						</div>
					</div>
					<ConsoleProjects changeNumero={(num) => setNumero(num)} />
				</div>
				<Projects data={myArray} />
			</div>
		</>
	);
};

export default Portfolio;
