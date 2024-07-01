import { useEffect, useState } from 'react';
import Fiche from '../pages/Fiche';

const Defilement = (props) => {

	const [isModal, setIsModal] = useState(false);
	const [selectedItemIndex, setSelectedItemIndex] = useState(null);

	useEffect(() => {
		var slide_container = document.querySelector('.slide_container');

		for (let i = 0; i < props.images.length; i++) {
	
			//creation des elements
			var a = document.createElement('a');
			var article = document.createElement('article');
			article.className = 'article-transition';
			var para = document.createElement('p');

			//creating img
			var image = document.createElement('img');
			image.className = 'monImage';
			image.setAttribute('src', `${props.images[i].net}`);
			image.setAttribute('alt', ``);

			//creating layoutSrc
			var layoutSrc = document.createElement('div');
			layoutSrc.className = 'layoutSrc hidden';

			//creating github et site button
			var github = document.createElement('a');
			var paraGithub = document.createElement('i');
			paraGithub.className = 'fa-brands fa-github';

			var site = document.createElement('a');
			var paraSite = document.createElement('i');
			paraSite.className = 'fa-brands fa-internet-explorer';

			//creating bouton de présentation
			var boutonPresentation = document.createElement('div');
			boutonPresentation.className = 'bouton_presentation cliquable';
			var boutonPresentationNode = document.createTextNode(
				'Information'
			);
			boutonPresentation.appendChild(boutonPresentationNode);
			boutonPresentation.setAttribute(
				'href',
				`${Object.values(props.urls[i])}`
			); // a changer pour l'url de la page( page créée par le dom)

			//attributions des elements
			a.setAttribute('href', `${Object.values(props.urls[i])}`);
			github.setAttribute('href', `${Object.values(props.github[i])}`);
			site.setAttribute('href', `${Object.values(props.urls[i])}`);

			//creation et integration des textNodes
			var divBtn = document.createElement('div');
			divBtn.className = 'divBtn';
			var divTexte = document.createElement('div');
			divTexte.className = 'divTexte';
			var divGitEtSite = document.createElement('div');
			divGitEtSite.className = 'divGitEtSite';

			github.appendChild(paraGithub);
			site.appendChild(paraSite);
			for (let j = 0; j < props.texte[i].length; j++) {
				var commentaire = document.createElement('h2');
				commentaire.className = 'commentaire';
				var commentaireNode = document.createTextNode(
					`${props.texte[i][j]}`
				);
				commentaire.appendChild(commentaireNode);
				divTexte.appendChild(commentaire);
			}

			//intégration des elements
			slide_container.appendChild(article);

			article.appendChild(para);
			article.appendChild(image);
			article.appendChild(layoutSrc);

			divBtn.appendChild(boutonPresentation);

			layoutSrc.appendChild(divBtn);
			layoutSrc.appendChild(divTexte);
			layoutSrc.appendChild(divGitEtSite);

			divGitEtSite.appendChild(github);
			divGitEtSite.appendChild(site);

			// //Creation du layout qui va s'ouvrir :
			// var modal = document.createElement('div');
			// modal.className = 'modal';
			// var modalContent = document.createElement('div');
			// modalContent.className = 'modal_content';
			// var close = document.createElement('span');
			// close.className = 'close';
			// var closeNode = document.createTextNode('X');
			// close.appendChild(closeNode);
			// article.appendChild(modal);
			// modal.appendChild(modalContent);
			// modalContent.appendChild(close);

			/*
		
				<div class="modal">
				<div class="modal-content">
					<span class="close">&times;</span>
					<p>
						<code class="language-javascript"></code><br>
					</p>
				</div>
			</div>
				*/
		}
	}, [props.images, props.texte, props.urls, props.github]);

	// code pour le modal
	useEffect(() => {
		var cliquables = document.querySelectorAll('.cliquable');
		var modals = document.querySelectorAll('.modal');
		var closeBtns = document.querySelectorAll('.close');

		cliquables.forEach((cliquable,index) => {
			cliquable.addEventListener('click', function () {
			
				// let article = cliquable.parentElement.parentElement.parentElement;
				// article.children[3].style.display="flex";
				setIsModal(true);
				setSelectedItemIndex(index); 
	
			});
		});

	

		modals.forEach((modal) => {
			modal.addEventListener('click', function (event) {
				if (event.target === modal) {
					// modal.style.display = 'none';
					setIsModal(false);
					setSelectedItemIndex(null); 
				}
			});
		});
	}, [isModal]);

	useEffect(() => {
		const slide_container = document.querySelector('.slide_container');
		const numberProjects = slide_container.childElementCount;

		//fonction pour le défilement des slides
		for (let i = 0; i < numberProjects; i++) {
			const nbSec = (i + 1) * 0.2;
			slide_container.childNodes[i].style.animationDelay = `${nbSec}s`;
		}
	}, []);

	useEffect(() => {
		var articles = document.querySelectorAll('.slide_container article');

		articles.forEach((article,index) => {
			article.addEventListener('mouseover', () => {
				article.children[1].classList.add('hidden');
				article.children[2].classList.remove('hidden');
		
			    article.style.backgroundImage = `url('${props.images[index].dark}')`;
				// article.style.filter = 'brightness(50%)';
			});
			article.addEventListener('mouseout', () => {
				article.children[1].classList.remove('hidden');
				article.children[2].classList.add('hidden');
				// article.style.filter = 'brightness(100%)';
			});
		});
	}, []);

	return (
		<>
			<div className="diapo">
				<div className="slide_container"></div>
				{isModal && selectedItemIndex !== null && (
					<Fiche
						image={props.images[selectedItemIndex]}
						// pass any other required props to the Fiche component
						github={props.github[selectedItemIndex]}
						urls={props.urls[selectedItemIndex]}
						technos={props.texte[selectedItemIndex]}
						info={props.info[selectedItemIndex]}
						name = {props.name[selectedItemIndex]}
						description = {props.description[selectedItemIndex]}
					/>
				)}
				<i className="fa-solid fa-caret-left"></i>
				<i className="fa-solid fa-caret-right"></i>
			</div>
		</>
	);
};

export default Defilement;
